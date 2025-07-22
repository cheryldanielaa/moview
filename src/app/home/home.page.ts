import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  movies: any[] = []; //value movie dideclare di ngOnInit (saat pertama kali form dijalankan)
  isLoggedIn = false;
  userRole: string = '';
  userProfile: string = '';
  nama: string = "";

  //constructor ini dipanggil waktu page pertama kali ngeload
  constructor(private storage: Storage, private router: Router,
    private movieservice: MovieService) {
    this.storage.create();
    this.checkUserRole();
  }
  ngOnInit() {
    //ambil data movies dari database
    //waktu pertama kali di run, ambil API yang menghasilkan 10 dtaa movie terbaru
    this.movieservice.latestMovie().subscribe(
      (data) => {
        //perbaharui data movies sesuai dgn data yang direturn dari db
        this.movies = data;
      }
    )
  }
  //slalu cek login status waktu ke home page
  //ionViewWillEnter ini jalan tiap kali home page show, klo constructor cmn jalan 1x
  ionViewWillEnter() {
    this.checkLoginStatus();
    this.movieservice.latestMovie().subscribe(
      (data) => {
        //perbaharui data movies sesuai dgn data yang direturn dari db
        this.movies = data;
      }
    )
  }

  checkUserRole() {
    //ambil userRole dari storage
    //klo berhasil, lanjut ke .then()
    //then catch ini kayak try catch -> masuk try klo berhasil, masuk catch klo gagal
    this.storage.get('userRole').then(role => {
      //kalo role nya gaada, set ''
      this.userRole = role || '';
    }).catch(error => {
      //catch buat tangkep error
      console.error('Error fetching user role:', error);
      this.userRole = '';
    });
  }

  checkLoginStatus() {
    //ambil userRole dan status dari storage
    //klo berhasil, lanjut ke .then()
    //then catch ini kayak try catch -> masuk try klo berhasil, masuk catch klo gagal
    this.storage.get('isLoggedIn').then(status => {
      this.isLoggedIn = status;
    }).catch(() => {
      this.isLoggedIn = false;
    });

    this.storage.get('userProfile').then(profile => {
      this.userProfile = profile || '';
    }).catch(() => {
      this.userProfile = '';
    });

    this.storage.get('userName').then(nama => {
      this.nama = nama || '';
    }).catch(() => {
      this.nama = '';
    });
  }

  logout() {
    //hapus storage
    //pake then biar rapi karena then ini hanya akan dijalankan kalau syntax sebelumnya berhasil
    //kalo isLoggedIn = false & userRole = '' ditaro diluar then, maka meskipun remove gagal, dia ttp jalan
    this.storage.remove('isLoggedIn')
      .then(() => this.storage.remove('userEmail'))
      .then(() => this.storage.remove('userRole'))
      .then(() => {
        this.isLoggedIn = false;
        this.userRole = '';
        //reload biar storage nya jg load, ga ngestuck
        location.reload();
      })
      .catch(error => console.error('Error during logout:', error));
  }

  //METHOD UNTUK MENAMPILKAN 10 DATA MOVIE BERDASARKAN YANG TERBARU
  // showLatestMovie(){
  //   return this.movieservice.latestMovie(); //harus direturn krn bukan void
  // }


  chunkArray(arr: any[], chunkSize: number): any[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }
}