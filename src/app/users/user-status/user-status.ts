import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { IUser } from '@app/shared/interfaces/user.interface';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { UsersRepository } from '@app/shared/store/users.repository';

@Component({
  selector: 'app-user-status',
  imports: [MatSlideToggleModule],
  templateUrl: './user-status.html',
  styleUrl: './user-status.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserStatus {
  user = input.required<IUser>();
  usersRepo = inject(UsersRepository);

  onStatusChange(): void {
    this.usersRepo.changeUserStatus(this.user().id);
  }
}
