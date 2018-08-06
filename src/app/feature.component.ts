import {Component , Input , OnInit} from '@angular/core';
import {PostService} from './post.service';
import {Post} from './post';

@Component ( {
  moduleId: module.id.toString () ,
  selector: 'app-root' ,
  templateUrl: './feature.component.html' ,

} )

export class FeatureComponent implements OnInit {
  title = 'Feature';
  posts: Post[] = [];


  constructor (private postService: PostService ,) {
  }

  ngOnInit () {

    let a = this.postService.getAllPosts ().subscribe ( posts => {
      // debugger;
      this.posts = posts.data;
    } );

  }

}
