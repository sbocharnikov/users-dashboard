import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { User } from '../shared/interfaces/user.interface';

@Component({
  selector: 'app-users',
  imports: [MatTableModule],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users {
  users: User[] = [];
}
