import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  trendingMovies: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTrendingMovies();
  }

  getTrendingMovies() {
    this.http
    .get('http://localhost:4200/assets/data/trending-movies.json')
    .subscribe((movies) => {
      this.trendingMovies = movies;
      console.log(this.trendingMovies)
    });
  }

}
