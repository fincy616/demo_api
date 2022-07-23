import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingAppComponent } from './shopping-app/shopping-app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { PostsComponent } from './posts/posts.component';
import { PhotosComponent } from './photos/photos.component';
import { AlbumsComponent } from './albums/albums.component';
import { UsersComponent } from './users/users.component';
import { LivenewsComponent } from './livenews/livenews.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingAppComponent,
    TodolistComponent,
    PostsComponent,
    PhotosComponent,
    AlbumsComponent,
    UsersComponent,
    LivenewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
