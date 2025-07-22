import { Component, OnInit } from '@angular/core';
import { MOVIE_DATA } from '../data';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: false
})
export class SearchPage implements OnInit {

  keyword: string = '';
  filteredMovies:any= [];
  movies:any=[];
  constructor(private movieservice:MovieService) { }

  ngOnInit() {
    /*this.movies = this.movieservice.MOVIE_DATA;
    awalnya munculin semua data movies yang ada
    this.filteredMovies = this.movieservice.MOVIE_DATA; >>value awalnya filtered movies itu semua data*/
    this.movieservice.movieList().subscribe(
      (data)=>{
        //perbaharui data movies sesuai dgn data yang direturn dari db
        this.filteredMovies=data;
      }
    )    
  }
  searchMovie() {
    //method searchMovienya dipindah ke service
    //this.filteredMovies = this.movieservice.searchMovie(this.keyword);
     this.movieservice.searchMovie(this.keyword).subscribe(
      (data)=>{
        //perbaharui data movies sesuai dgn data yang direturn dari db
        this.filteredMovies=data;
      }
    )    
  }

  //hitung average rating per movie
  // avgRating(idmovies:number):number{ 
  //   //langsung return aja ke user
  //   return this.movieservice.averageMovieRating(idmovies);
  // }
}