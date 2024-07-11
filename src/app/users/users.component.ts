import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  addUser(): void {
    // Error 10: Datos hardcodeados
    const newUser = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: '123456'
    };

    this.userService.addUser(newUser).subscribe(user => {
      this.users.push(user);
    });
  }
}

