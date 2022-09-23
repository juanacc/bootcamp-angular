import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from './post.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching: boolean = false;
  error = null;
  private errorSub: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.errorSub = this.postService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    })
    this.getPosts();
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    console.log(postData);
    // this.postService.creteNewPost(postData).subscribe(resp => {
    //   console.log(resp);
    //   this.getPosts();
    // });
    this.postService.creteNewPost(postData);
  }

  onFetchPosts() {
    this.getPosts();
  }

  onClearPosts() {
    this.postService.deletePosts().subscribe(() => {
      this.getPosts();
      //this.loadedPosts = [];
    })
  }

  onHandlerError() {
    this.error = null;
  }

  private getPosts() {
    this.isFetching = true;
    this.postService.getPosts().subscribe(resp => {
      this.isFetching = false;
      this.loadedPosts = resp;
    }, error => {
      this.isFetching = false;
      console.log(error.error.error);
      this.error = error.error.error;
    })
  }
}
