import { Post } from "./post.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
@Injectable({ providedIn: "root" })
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  getPosts() {
    this.http
      .get<{ message: string; posts: Post[] }>(
        "http://localhost:3000/api/posts"
      )
      .subscribe(postData => {
        this.posts = postData.posts;
        this.postsUpdated.next([...this.posts]);
      });
  }
  getPostsUpdateListener() {
    return this.postsUpdated.asObservable();
  }
  addPosts(title: string, content: string) {
    const post = { id: null, title: title, content: content };
    this.http.post<{ message: string }>(
      "http://localhost:3000/api/posts",
      post
    ).subscribe((responseData)=>{
      console.log(responseData);
    });
    this.posts.push(post);
    console.log(this.posts);
    this.postsUpdated.next([...this.posts]);
  }
}
