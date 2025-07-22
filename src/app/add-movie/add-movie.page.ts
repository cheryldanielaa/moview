import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { NodeWithI18n } from '@angular/compiler';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.page.html',
  styleUrls: ['./add-movie.page.scss'],
  standalone: false
})
export class AddMoviePage implements OnInit {
  movie: any = {
    id: '',
    title: '',
    genre: '',
    releaseDate: '',
    director: '',
    synopsis: '',
    poster: '',
    actors: []
  };
  movies: any[] = [];
  showError: boolean = false;
  isLoggedIn = false;
  userRole: string = '';
  statusCalendar: Boolean = false;
  releaseDate: string = new Date().toISOString().split('T')[0]; //kasih initial value (tanggal hari ini)

  showIonAlert = false;
  alertHeader = '';
  alertMessage = '';
  idGenre = 0; //controller idGenre
  newIdMovie = 0; //buat dapet idMovie yg baru di add, buat tambahin character
  constructor(private storage: Storage, private router: Router, private movieservice: MovieService) {
    this.storage.create();
  }

  ngOnInit() {
    //this.movies = this.movieservice.MOVIE_DATA;
  }

  //ionViewWillEnter ini jalan tiap kali home page show, klo constructor cmn jalan 1x
  ionViewWillEnter() {
    this.checkAccess();
  }

  //cek status login & role user
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

  addCast() {
    this.movie.actors.push({ name: '', character: '' });
  }

  removeCast(index: number) {
    this.movie.actors.splice(index, 1);
  }

  addMovie() {
    this.showError = false;
    //format di variabel release date
    this.movie.releaseDate = new Date(this.releaseDate).toISOString().split('T')[0];
    if (!this.movie.title || !this.movie.genre || !this.movie.director || !this.movie.releaseDate || !this.movie.synopsis || !this.movie.poster) {
      this.showError = true;
      return;
    }

    if (!this.movie.actors ||
      this.movie.actors.length === 0 ||
      this.movie.actors.every((actor: any) => !actor.name.trim() && !actor.character.trim())) {
      this.showAlert('Cast Missing', 'Please add at least one cast.');
      return;
    }
    this.movieservice.searchIdGenre(this.movie.genre).subscribe((genreRes: any) => {
      if (genreRes.result === "success") {
        this.idGenre = genreRes.id_genre;

        this.movieservice.addMovie(
          this.movie.title,
          this.idGenre,
          this.releaseDate,
          this.movie.director,
          this.movie.synopsis,
          this.movie.poster
        ).subscribe((movieRes: any) => {
          if (movieRes.result === "success") {
            this.newIdMovie = movieRes.id_movie;
            // Tambahkan karakter SETELAH dapat idMovie
            this.movie.actors.forEach((actor: any) => {
              if (actor.name.trim() && actor.character.trim()) {
                this.movieservice.addCharacterMovie(
                  actor.name,
                  actor.character,
                  this.newIdMovie
                ).subscribe((res: any) => {
                  if (res.result !== "success") {
                    alert("Gagal tambah character");
                  }
                });
              }
            });
            this.showAlert('Success', 'Movie has been added!');
            this.router.navigate(['/manage-movie']);
          } else {
            alert("Gagal tambah movie");
          }
        });

      } else {
        alert("Genre tidak ditemukan");
      }
    });

  }

  showCalendar() {
    this.statusCalendar = !this.statusCalendar;
  }

  showAlert(header: string, message: string) {
    this.alertHeader = header;
    this.alertMessage = message;
    this.showIonAlert = true;
  }
}