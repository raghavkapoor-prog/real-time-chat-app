import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  searchText: string = '';

  constructor(
    private firestore: AngularFirestore,
    private auth: AngularFireAuth,
    private router: Router
  ) {}

  ngOnInit() {
    // Fetch all users from Firestore
    this.firestore.collection('users').valueChanges().subscribe(users => {
      this.users = users;
    });
  }

  // Filter users based on the search text
  filteredUsers() {
    return this.users.filter(user => user.displayName.toLowerCase().includes(this.searchText.toLowerCase()));
  }

  startChat(user: any) {
    this.router.navigate(['/chat', user.uid]);  // Navigate to the chat room with the selected user
  }

  goToPublicChat() {
    this.router.navigate(['/public-chat']);  // Navigate to the common chat room
  }
}
