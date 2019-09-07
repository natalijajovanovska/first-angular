import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  content: Object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getPosts().subscribe(data => {
      this.content = data;
    });
  }

}
