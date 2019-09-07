import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images: Object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getImg().subscribe(data => {
      this.images = data;
    });
  }

}
