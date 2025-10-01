import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {
  FormControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NameExistsValidator } from '@app/shared/validators/name-exists';
import { UsersRepository } from '@app/shared/store/users.repository';

@Component({
  selector: 'app-add-user-dialog',
  imports: [
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-user-dialog.html',
  styleUrl: './add-user-dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddUserDialog {
  readonly dialogRef = inject(MatDialogRef<AddUserDialog>);
  private formBuilder = inject(NonNullableFormBuilder);
  private nameValidator = inject(NameExistsValidator);
  private usersRepo = inject(UsersRepository);
  userForm = this.formBuilder.group({
    name: ['', [Validators.required], [this.nameValidator.checkNameExists()]],
    active: [false],
  });

  get name(): FormControl<string | null> {
    return this.userForm.controls.name;
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  createUser(): void {
    this.userForm.markAllAsTouched();

    if (!this.userForm.valid) {
      return;
    }

    this.usersRepo.addUser({
      ...this.userForm.getRawValue(),
    });

    this.dialogRef.close();
  }
}
