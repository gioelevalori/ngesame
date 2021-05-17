import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../post.service';
import {Location} from '@angular/common';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public post!: {
    id: number,
    titolo: string,
    testo: string,
  };


  constructor(private route: ActivatedRoute, private postservice: PostService, private location: Location) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params);
    const id = this.route.snapshot.params.id;
    this.postservice.show(id).subscribe(response => {
      console.log(response);
      this.post = response;
    });
  }

  update(titolo : string, testo : string) {
    const id = this.route.snapshot.params.id;
    this.postservice.update(id, titolo, testo).subscribe((response : any) => {
      console.log(response);
      this.post = response;
    });
  }

}
