import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.page.html',
  styleUrls: ['./edit-movie.page.scss'],
  standalone: false,
})
export class EditMoviePage implements OnInit {
  //movies:any[]=[];
  poster: string = '';
  selectedMovie: any = []; //buat simpen movie skrg apa
  idMovie = 0;
  movieTitle: string = '';
  genreMovie: string = '';
  movieDirector: string = '';
  releaseDate: string = '2025-03-20';
  synopsis: string = '';
  showDate: boolean = false;
  showBar: string = 'search-outline';
  actors: any; //aktor itu tipe datanya any krn berupa array :)))
  isLoggedIn = false;
  userRole: string = '';
  idGenre = 0; //ambil data idgenre movie
  constructor(
    private route: ActivatedRoute,
    private storage: Storage,
    private router: Router,
    private movieservice: MovieService
  ) {
    this.storage.create();
  }

  //ON INIT ITU KETIKA FILE PERTAMA KALI DIJALANKAN
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.idMovie = params['id']; //set value sesuai parameter idnya berapa
      //paramsnya sesuai yang di app routing module
      this.movieservice.detailMovie(params['id']).subscribe((data) => {
        this.selectedMovie = data[0]; //krn cuman return 1 data jd hrs access index 0 krn dia return berupa array
        this.movieTitle = this.selectedMovie.title;
        this.genreMovie = this.selectedMovie.genre;
        this.movieDirector = this.selectedMovie.director;
        this.releaseDate = this.selectedMovie.release_date;
        this.synopsis = this.selectedMovie.synopsis;
        this.poster = this.selectedMovie.poster;
        this.movieservice.movieActors(params['id']).subscribe((data) => {
        //set valuenya di index actors pny selected movie
        this.selectedMovie.actors = data; //return berupa list
      });
      });
    });
    /*this.selectedMovie = this.movieservice.getSelectedMovie(this.id);
    jika selectedMovie exists, maka set value utk masing-masing
    if(this.selectedMovie){
      //set value dr masing-masing ngModel sesuai dgn selectedMovie
      this.movieTitle = this.selectedMovie.title;
      this.genreMovie = this.selectedMovie.genre;
      this.movieDirector = this.selectedMovie.director;
      this.releaseDate = this.selectedMovie.releaseDate;
      this.synopsis = this.selectedMovie.synopsis;
      this.actors = this.selectedMovie.actors;
      this.poster = this.selectedMovie.poster;
    }
          this.movieTitle = this.selectedMovie.title;
          this.genreMovie = this.selectedMovie.genre;
          this.movieDirector = this.selectedMovie.director;
          this.releaseDate = this.selectedMovie.releaseDate;
          this.synopsis = this.selectedMovie.synopsis;
          this.actors = this.selectedMovie.actors;
          this.poster = this.selectedMovie.poster;*/
  }

  ionViewWillEnter() {
    this.checkAccess();
    //biar dijalanin terus
    this.route.params.subscribe((params) => {
      this.idMovie = params['id']; //set value sesuai parameter idnya berapa
      //paramsnya sesuai yang di app routing module
      this.movieservice.detailMovie(params['id']).subscribe((data) => {
        this.selectedMovie = data[0]; //krn cuman return 1 data jd hrs access index 0 krn dia return berupa array
        this.movieTitle = this.selectedMovie.title;
        this.genreMovie = this.selectedMovie.genre;
        this.movieDirector = this.selectedMovie.director;
        this.releaseDate = this.selectedMovie.release_date;
        this.synopsis = this.selectedMovie.synopsis;
        this.poster = this.selectedMovie.poster;
        this.movieservice.movieActors(params['id']).subscribe((data) => {
        //set valuenya di index actors pny selected movie
        this.selectedMovie.actors = data; //return berupa list
      });
      });
    });
  }

  checkAccess() {
    this.storage.get('isLoggedIn').then((status) => {
      this.isLoggedIn = status || false;
      this.storage.get('userRole').then((role) => {
        this.userRole = role || '';

        if (!this.isLoggedIn || this.userRole !== 'Admin') {
          // redirect ke login jika belum login atau bukan admin
          this.router.navigate(['/login']);
        }
      });
    });
  }

  showCalendar() {
    //jika showdate nilainya true, maka jd false
    //berlaku pula sebaliknya
    this.showDate = !this.showDate;
    if (!this.showDate) {
      this.showBar = 'search-outline';
    } else {
      this.showBar = 'close-outline';
    }
  }

  addCharacter() {
    //digunakan utk menambahkan row baru di actors
    //supaya dia waktu ngeloop ion-item, nanti dia muncul data baru
    //nama variabel gk perlu dipetik
    this.selectedMovie.actors.push({ name: '', character: '' });
  }

  removeCharacter(index: number) {
    //hapus index tertentu
    //splice >> digunakan utk remove data dr suatu index
    //1 tandanya 1 data yg dihapus
    this.selectedMovie.actors.splice(index, 1);
  }
  editMovie() {
    /*steps edit movie:
    1. Baca dulu genrenya apa yang diinput terus ada idnya atau gak
    2. Klo gak ada, maka insert, ambil stmt->insert id utk tabel genre
    3. Baca data actorsnya, ada yang berubah atau gak utk valuenya
    4. Klo gak ada ya sudah
  */
    this.movieservice
      .searchIdGenre(this.genreMovie)
      .subscribe((response: any) => {
        if (response.result === 'success') {
          this.idGenre = response.id_genre; //simpen hasil idGenre berapa
          //alert(this.idGenre);
          //jadi baru hapus klo semisal dia itu udah dpt id genrenya berapa
          //hapus dari table character semua TT
          this.movieservice
            .deleteCharacterEdit(this.idMovie)
            .subscribe((response: any) => {
              if (response.result === 'success') {
                // alert(response.message);
                //lakuin looping buat masukin aktornya satu-satu ke tabel character
                this.insertActors(0); // mulai dari index 0
              }
            });
        }
      });
  }
  //insert actor satu per satu ke dalam db
  insertActors(index: number) {
    if (index < this.selectedMovie.actors.length) {
      const actor = this.selectedMovie.actors[index];
      this.movieservice
        //insert aktor satu per satu ke dalam movie (movie_actor)
        .addCharacterMovie(actor.actor_name, actor.character_name, this.idMovie)
        .subscribe((response: any) => {
          if (response.result === 'success') {
            this.insertActors(index + 1); // lanjut ke aktor berikutnya
          } else {
            alert('Gagal Tambah Data');
          }
        });
    } else {
      //klo udh kelar mengurus movie actor
      //ubahhh sisanyaaa!!!!!!
      this.movieservice
        .editMovie(
          this.movieTitle,this.idGenre,this.movieDirector,this.releaseDate,this.synopsis,this.poster,this.idMovie
        )
        .subscribe((response: any) => {
          if (response.result === 'success') {
            setTimeout(() => this.router.navigate(['/manage-movie']), 100);
          }
        });
    }
  }
}
