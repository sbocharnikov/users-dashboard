import { inject, Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, take, debounceTime, switchMap, catchError } from 'rxjs/operators';
import { UsersApiService } from '@app/shared/services/users.service';

@Injectable({ providedIn: 'root' })
export class NameExistsValidator {
  private usersApiService = inject(UsersApiService);

  checkNameExists(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ nameExists: boolean } | null> => {
      return control.valueChanges.pipe(
        debounceTime(500),
        switchMap((value) => {
          if (!value) {
            return of(null);
          }

          return this.usersApiService
            .checkNameExists(value)
            .pipe(map((exists) => (exists ? { nameExists: true } : null)));
        }),
        catchError(() => of(null)),
        take(1),
      );
    };
  }
}
