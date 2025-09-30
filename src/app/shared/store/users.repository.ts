import { createState, Store } from '@ngneat/elf';
import { selectAllEntities, updateEntities, withEntities } from '@ngneat/elf-entities';
import { IUser } from '@app/shared/interfaces/user.interface';
import { Injectable } from '@angular/core';

const { state, config } = createState(
  withEntities<IUser>({
    initialValue: [
      { id: '1', name: 'John', active: true },
      { id: '2', name: 'Bill', active: true },
    ],
  }),
);

const store = new Store({ name: 'users', state, config });

@Injectable({ providedIn: 'root' })
export class UsersRepository {
  users$ = store.pipe(selectAllEntities());

  changeUserStatus(id: string): void {
    store.update(updateEntities(id, (entity) => ({ ...entity, active: !entity.active })));
  }
}
