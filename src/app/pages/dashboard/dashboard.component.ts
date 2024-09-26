import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/interface/post.interface';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public posts: Post[] = [];
  public role: string | null = '';
  public displayDialog: boolean = false;
  public isEdit: boolean = false;
  public postForm: FormGroup;

  private currentPostId: number | null = null;

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.role = localStorage.getItem('role');
    this.getPosts();
  }

  public logout(): void {
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }

  private getPosts() {
    this.apiService.getPost().subscribe((data) => {
      this.posts = data;
    });
  }

  public canEdit(): boolean {
    return this.role === 'admin';
  }

  public showCreateDialog() {
    this.isEdit = false;
    this.currentPostId = null;
    this.postForm.reset();
    this.displayDialog = true;
  }

  public showEditDialog(post: Post) {
    this.isEdit = true;
    this.currentPostId = post.id;
    this.postForm.patchValue({
      title: post.title,
      body: post.body,
    });
    this.displayDialog = true;
  }

  public hideDialog() {
    this.displayDialog = false;
  }

  public onSubmit() {
    if (this.postForm.invalid) return;

    const post: Post = this.postForm.value;

    if (this.isEdit && this.currentPostId !== null) {
      this.apiService
        .editPost(this.currentPostId, post)
        .subscribe((response) => {
          const index = this.posts.findIndex(
            (p) => p.id === this.currentPostId
          );
          if (index !== -1) {
            this.posts[index] = response;
          }
          this.hideDialog();
        });
    } else {
      this.apiService.createPost(post).subscribe((response) => {
        this.posts.push(response);
        this.hideDialog();
      });
    }
  }
}
