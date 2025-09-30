import { inject, Injectable } from '@angular/core';
import { UsersRepository } from '@app/shared/store/users.repository';
import { map, Observable, switchMap, timer } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersApiService {
  private repo = inject(UsersRepository);

  checkNameExists(name: string): Observable<boolean> {
    return timer(200).pipe(
      switchMap(() => this.repo.users$),
      map((users) => users.some((user) => user.name === name)),
    );
  }
}
