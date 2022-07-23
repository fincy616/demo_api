import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { LivenewsComponent } from './livenews/livenews.component';
import { PhotosComponent } from './photos/photos.component';
import { PostsComponent } from './posts/posts.component';
import { ShoppingAppComponent } from './shopping-app/shopping-app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:"shoppingapp",component:ShoppingAppComponent},
  {path:"todolist",component:TodolistComponent},
  {path:"album",component:AlbumsComponent},
  {path:"posts",component:PostsComponent},
  {path:"livenews",component:LivenewsComponent},
  {path:"users",component:UsersComponent},
  {path:"photos",component:PhotosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
