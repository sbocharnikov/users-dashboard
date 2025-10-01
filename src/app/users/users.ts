import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { IUser } from '@app/shared/interfaces/user.interface';
import { map, Observable } from 'rxjs';
import { UsersRepository } from '@app/shared/store/users.repository';
import { AsyncPipe } from '@angular/common';
import { UserStatus } from '@app/users/user-status/user-status';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AddUserDialog } from './add-user-dialog/add-user-dialog';

@Component({
  selector: 'app-users',
  imports: [AsyncPipe, UserStatus, MatButtonModule],
  templateUrl: './users.html',
  styleUrl: './users.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Users {
  private usersRepo = inject(UsersRepository);
  users$: Observable<IUser[]> = this.usersRepo.users$;
  private dialog = inject(MatDialog);
  readonly addUserDisabled$ = this.users$.pipe(
    map((users) => !(users.every((user) => user.active) && users.length < 5)),
  );

  openAddUserDialog(): void {
    this.dialog.open(AddUserDialog);
  }
}
