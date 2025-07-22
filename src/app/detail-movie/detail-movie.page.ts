import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { MovieService } from '../movie.service';
import { UserserviceService } from '../userservice.service';
@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.page.html',
  styleUrls: ['./detail-movie.page.scss'],
  standalone: false
})

export class DetailMoviePage implements OnInit {
  movies: any[] = []; //data movie itu dideclare di ingonit
  isLoggedIn = false;
  selectedMovie: any = {};//penampung object movie
  newRating: number = 0;
  newReview: string = '';
  loggedInUserId: number = 0;
  loggedInUserName: string = '';
  loggedInProfilePic: string = '';
  users: any[] = []; //buat ambil profile pic
  idMovie = 0; //initial value
  constructor(private route: ActivatedRoute, private storage: Storage, private router: Router,
    private movieservice: MovieService, private userservice: UserserviceService) {
    this.storage.create().then(() => {
      this.storage.get('isLoggedIn').then(status => {
        this.isLoggedIn = status || false;

        if (this.isLoggedIn) {
          this.storage.get('userId').then(id => {
            this.loggedInUserId = id || 0;
          });
          this.storage.get('userProfile').then(profile_pic => {
            this.loggedInProfilePic = profile_pic;
          })
        }
      });
    });
  }

  ngOnInit() {
    /*deklarasi movie servicenya juga
    this.movies = this.movieservice.MOVIE_DATA;
    this.users=this.userservice.USER_DATA;
    ambil param id dari url
    cari data di movies (MOVIE_DATA) yang id nya sesuai sama param & isi ke var selectedMovie*/
    this.route.params.subscribe(params => {
      this.idMovie = params['id']; //set value sesuai parameter idnya berapa
      //paramsnya sesuai yang di app routing module
      this.movieservice.detailMovie(params['id']).subscribe(
        (data) => {
          this.selectedMovie = data[0]; //krn cuman return 1 data jd hrs access index 0 krn dia return berupa array
          this.movieservice.movieActors(params['id']).subscribe(
          (data) => {
            //set valuenya di index actors pny selected movie
            this.selectedMovie.actors = data;//return berupa list
            this.movieservice.movieReview(params['id']).subscribe(
            (data) => {
              //set valuenya di index ratings pny selected movie
              this.selectedMovie.ratings = data;//return berupa list
              console.log("Data from API:", this.selectedMovie.ratings);
            });
          });
        });
    });
  }

  //buat mask username user -> misal: Aurel jadi Au*** (2 huruf pertama yg show)
  //ambil data username dari id user
  getMaskedUserName(name: string): string {
    /*cari data user di USER_DATA
    let user = this.users.find(u => u.id === userId);
    kalau tidak ditemukan
    if (!user) {
    return 'Unknown User';
    }
    ambil nama user*/
    let maskedName = name;
    //mask kalo panjang namanya lebih dari 2
    if (maskedName.length > 2) {
      return maskedName.substring(0, 2) + '*'.repeat(maskedName.length - 2);
    }
    else {
      return maskedName;
    }
  }

  submitReview() {
    //pastikan field tidak ada yg null
    if (this.newRating === null || this.newRating < 0 || this.newRating > 10 || this.newReview.trim() === '') {
      alert('Please enter a valid rating (0-10) and review.');
      return;
    }
    /*jika semua tdk ada yang null, maka panggil methodnya
    this.movieservice.addMovieReview(this.loggedInUserId,this.newRating,this.newReview,this.idMovie);*/
    this.movieservice.addMovieReview(this.loggedInUserId, this.newRating,
      this.newReview, this.idMovie).subscribe((response: any) => {
        if (response.result === 'success') {
          //alert("success")
          this.refreshData();
        }
        else {
          alert(response.message)
        }
      });

    //reset
    this.newRating = 0;
    this.newReview = '';

    this.refreshData();
  }

  //hitung average rating per movie >> panggil di service
  // avgRating(idmovies:number):number{
  //   return this.movieservice.averageMovieRating(idmovies);
  // }

  //buat isi profile pic user
  getUserProfile(idUser: number) {
    //cari objek user dari array users dmn id di array == idUser yang diinput
    const user = this.users.find(pro => pro.id == idUser);
    return user?.profile_pic;
  }

  //buat nentuin berapa bintang yang muncul di tiap rating user
  getStarArray(rating: number): number[] {
    return Array(Math.floor(rating)).fill(1);
  }

  refreshData() {
    this.route.params.subscribe(params => {
      this.idMovie = params['id']; //set value sesuai parameter idnya berapa
      //paramsnya sesuai yang di app routing module
      this.movieservice.detailMovie(params['id']).subscribe(
        (data) => {
          this.selectedMovie = data[0]; //krn cuman return 1 data jd hrs access index 0 krn dia return berupa array
          this.movieservice.movieActors(params['id']).subscribe(
          (data) => {
            //set valuenya di index actors pny selected movie
            this.selectedMovie.actors = data;//return berupa list
            this.movieservice.movieReview(params['id']).subscribe(
            (data) => {
            //set valuenya di index ratings pny selected movie
            this.selectedMovie.ratings = data;//return berupa list
            // console.log("Data from API:", this.selectedMovie.ratings);
            });
          });
        });
    });

  }
}