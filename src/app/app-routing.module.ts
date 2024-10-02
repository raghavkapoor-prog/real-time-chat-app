// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { UserListComponent } from './user-list/user-list.component';
// import { ChatRoomComponent } from './chat-room/chat-room.component';
// import { PublicChatRoomComponent } from './public-chat-room/public-chat-room.component';

// const routes: Routes = [
//   { path: '', redirectTo: '/login', pathMatch: 'full' },
//   { path: 'login', component: LoginComponent },
//   { path: 'users', component: UserListComponent },
//   { path: 'chat/:id', component: ChatRoomComponent },  // Chat with specific user
//   { path: 'public-chat', component: PublicChatRoomComponent }  // Common chatroom
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }



// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { UserListComponent } from './user-list/user-list.component';
// import { ChatRoomComponent } from './chat-room/chat-room.component';
// import { PublicChatRoomComponent } from './public-chat-room/public-chat-room.component';

// const routes: Routes = [
//   { path: '', redirectTo: '/login', pathMatch: 'full' },
//   { path: 'login', component: LoginComponent },
//   { path: 'users', component: UserListComponent },
//   { path: 'chat/:id', component: ChatRoomComponent },  // Direct chat with a specific user
//   { path: 'public-chat', component: PublicChatRoomComponent }  // Common chat room
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }




import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { PublicChatRoomComponent } from './public-chat-room/public-chat-room.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UserListComponent },
  { path: 'chat/:id', component: ChatRoomComponent },  // Direct chat with a specific user
  { path: 'public-chat', component: PublicChatRoomComponent }  // Common chat room
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
