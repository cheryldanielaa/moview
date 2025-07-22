import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-manage-movie',
  templateUrl: './manage-movie.page.html',
  styleUrls: ['./manage-movie.page.scss'],
  standalone: false
})
export class ManageMoviePage implements OnInit {
  movies:any = [];
  isLoggedIn = false;
  userRole: string = '';
  actors: any[] = []; //buat simpan daftar actorsnya
  constructor(private storage: Storage, private router: Router, private movieservice:MovieService) {
    this.storage.create();
  }

  ngOnInit(){
    // this.movies = this.movieservice.MOVIE_DATA;
     this.movieservice.manageMovie().subscribe(
      (data)=>{
        //perbaharui data movies sesuai dgn data yang direturn dari db
        this.movies=data;
      }
    ) 
  }

  ionViewWillEnter() {
    this.checkAccess();
    this.refreshData();
  }

  checkAccess() {
    this.storage.get('isLoggedIn').then(status => {
      this.isLoggedIn = status || false;
      this.storage.get('userRole').then(role => {
        this.userRole = role || '';

        if (!this.isLoggedIn || this.userRole !== 'Admin') {
          // redirect ke login jika belum login atau bukan admin
          this.router.navigate(['/login']);
        }
      });
    });
  }

  chunkArray(arr: any[], chunkSize: number):any[][]{
    const result = [];

    for(let i=0; i<arr.length; i+=chunkSize){
      result.push(arr.slice(i,i+chunkSize));
    }

    return result;
  }
  deleteMovie(id:number)
  {
    this.movieservice.deleteMovie(id).subscribe((response: any) => {
      if(response.result==='success'){
        //alert("success")
        // this.router.navigate(['/manage-movie']) 
        this.refreshData(); //mantap auto refresh data
      }
  });
}
  refreshData(){
      //baca ulang data
     this.movieservice.manageMovie().subscribe(
      (data)=>{
        //perbaharui data movies sesuai dgn data yang direturn dari db
        this.movies=data;
      }
    ) 
  }
}