// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatCardModule } from '@angular/material/card';
// import { MatListModule } from '@angular/material/list';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { FormsModule } from '@angular/forms';  // To use [(ngModel)]
// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

// import { AppComponent } from './app.component';
// import { environment } from '../environments/enviroment';
// import { LoginComponent } from './login/login.component';
// import { UserListComponent } from './user-list/user-list.component';
// import { ChatRoomComponent } from './chat-room/chat-room.component';
// import { PublicChatRoomComponent } from './public-chat-room/public-chat-room.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginComponent,
//     UserListComponent,
//     ChatRoomComponent,
//     PublicChatRoomComponent
//   ],
//   imports: [
//     BrowserModule,
//     BrowserAnimationsModule,  // Required for Angular Material
//     MatCardModule,
//     MatListModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatButtonModule,
//     FormsModule,  // Required for [(ngModel)] in form inputs
//     AngularFireModule.initializeApp(environment.firebaseConfig),
//     AngularFirestoreModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';  // To use [(ngModel)]
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { RouterModule } from '@angular/router'; // Import RouterModule for routing

import { AppComponent } from './app.component';
import { environment } from '../environments/enviroment';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { PublicChatRoomComponent } from './public-chat-room/public-chat-room.component';
import { AppRoutingModule } from './app-routing.module'; // Import the routing module

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserListComponent,
    ChatRoomComponent,
    PublicChatRoomComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,  // Required for Angular Material
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,  // Required for [(ngModel)] in form inputs
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    RouterModule, // Import RouterModule
    AppRoutingModule // Include the routing module for routing to work
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

