import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {
  chatPartnerId: string = '';
  chatPartnerName: string = '';
  messages!: Observable<any[]>;
  newMessage: string = '';
  currentUser: any;

  constructor(
    private route: ActivatedRoute,
    private firestore: AngularFirestore,
    private auth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.chatPartnerId = this.route.snapshot.paramMap.get('id')!;
    this.auth.authState.subscribe(user => {
      this.currentUser = user;
      this.loadMessages();
    });
  }

  loadMessages() {
    // Fetch the chat messages between the current user and the chat partner
    this.messages = this.firestore
      .collection(`chats/${this.currentUser.uid}_${this.chatPartnerId}/messages`, ref => ref.orderBy('timestamp'))
      .valueChanges();
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      // Send the message to the chat collection
      this.firestore.collection(`chats/${this.currentUser.uid}_${this.chatPartnerId}/messages`).add({
        sender: this.currentUser.displayName,
        text: this.newMessage,
        timestamp: new Date()
      });
      this.newMessage = '';
    }
  }
}
