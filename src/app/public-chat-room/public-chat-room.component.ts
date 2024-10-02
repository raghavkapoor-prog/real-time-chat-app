import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-public-chat-room',
  templateUrl: './public-chat-room.component.html',
  styleUrls: ['./public-chat-room.component.css']
})
export class PublicChatRoomComponent implements OnInit {
  messages!: Observable<any[]>;
  newMessage: string = '';
  currentUser: any;

  constructor(
    private firestore: AngularFirestore,
    private auth: AngularFireAuth
  ) {}

  ngOnInit() {
    // Fetch messages for the public chat room
    this.messages = this.firestore
      .collection('public-chat', ref => ref.orderBy('timestamp'))
      .valueChanges();

    // Get the current authenticated user
    this.auth.authState.subscribe(user => {
      this.currentUser = user;
    });
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      // Add message to public chat room
      this.firestore.collection('public-chat').add({
        sender: this.currentUser.displayName,
        text: this.newMessage,
        timestamp: new Date()
      });
      this.newMessage = '';
    }
  }
}
