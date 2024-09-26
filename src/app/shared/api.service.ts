import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpUtils } from "./http-utils.service";
import { Observable } from "rxjs";
import { Post } from "../interface/post.interface";

@Injectable({
  providedIn: 'root'
})
export class ApiService extends HttpUtils {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(http: HttpClient) {
    super(http);
  }

  getPost(): Observable<any[]> {
    return this.get<Post[]>(`${this.baseUrl}/posts`);
  }

  createPost(post: Post): Observable<Post> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8' });
    return this.post<Post>(`${this.baseUrl}/posts`, post, headers);
  }

  editPost(postId: number, post: Post): Observable<Post> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8' });
    return this.put<Post>(`${this.baseUrl}/posts/${postId}`, post, headers);
  }
}
