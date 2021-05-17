import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public posts!: {
    id: number,
    titolo: string,
    testo: string,
  }[];

  public api!: {
    titolo: string,
    testo: string,
  };

  constructor( private postservice: PostService) { }

  ngOnInit(): void {
    this.postservice.list().subscribe( response => {
      console.log(response);
      this.posts = response;
    });

    this.postservice.jsontest().subscribe( response => {
      console.log(response);
      this.api = response;

    });

  }

}
