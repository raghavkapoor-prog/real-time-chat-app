// import { Component, OnInit } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
// import { Observable } from 'rxjs';
// import { Message } from './message.model';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   messages!: Observable<Message[]>;  // Observable for real-time messages
//   newMessage: string = '';           // Holds the message being typed
//   user: string = 'User1';            // Hardcoded user for now

//   constructor(private firestore: AngularFirestore) {}

//   ngOnInit() {
//     // Fetch messages from Firestore, ordered by the 'timestamp' field
//     this.messages = this.firestore
//       .collection<Message>('messages', ref => ref.orderBy('timestamp'))
//       .valueChanges();
//   }

//   // Method to send a new message to Firestore
//   sendMessage() {
//     if (this.newMessage.trim()) {
//       this.firestore.collection('messages').add({
//         user: this.user,               // Static user, replace with auth later if needed
//         text: this.newMessage,         // The message entered by the user
//         timestamp: new Date()          // Timestamp for sorting the messages
//       });
//       this.newMessage = '';  // Clear the input field after sending
//     }
//   }
// }



import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';  // Firebase authentication import
import { Observable } from 'rxjs';
import { Message } from './message.model';
import firebase from 'firebase/compat/app'; // Firebase app import for Google authentication

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  messages!: Observable<Message[]>;  // Observable for real-time messages
  newMessage: string = '';           // Holds the message being typed
  user: firebase.User | null = null; // Holds the authenticated user

  constructor(
    private firestore: AngularFirestore,
    private auth: AngularFireAuth  // Inject AngularFireAuth for authentication
  ) {}

  ngOnInit() {
    // Subscribe to authentication state changes
    this.auth.authState.subscribe(user => {
      this.user = user;  // Save the authenticated user info
    });

    // Fetch messages from Firestore, ordered by the 'timestamp' field
    this.messages = this.firestore
      .collection<Message>('messages', ref => ref.orderBy('timestamp'))
      .valueChanges();
  }

  // Method to sign in with Google
  signIn() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  // Method to sign out
  signOut() {
    this.auth.signOut();
  }

  // Method to send a new message to Firestore
  sendMessage() {
    if (this.newMessage.trim() && this.user) {
      this.firestore.collection('messages').add({
        user: this.user.displayName || 'Anonymous', // Use displayName of authenticated user
        text: this.newMessage,                     // The message entered by the user
        timestamp: new Date()                      // Timestamp for sorting the messages
      });
      this.newMessage = '';  // Clear the input field after sending
    }
  }
}
