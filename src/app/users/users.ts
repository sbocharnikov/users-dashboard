import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { IUser } from '@app/shared/interfaces/user.interface';
import { Observable } from 'rxjs';
import { UsersRepository } from '@app/shared/store/users.repository';
import { AsyncPipe } from '@angular/common';
import { UserStatus } from '@app/users/user-status/user-status';

@Component({
  selector: 'app-users',
  imports: [AsyncPipe, UserStatus],
  templateUrl: './users.html',
  styleUrl: './users.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Users {
  usersRepo = inject(UsersRepository);
  users$: Observable<IUser[]> = this.usersRepo.users$;
}
