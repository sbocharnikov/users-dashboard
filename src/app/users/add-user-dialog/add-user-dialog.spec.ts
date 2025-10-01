import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserDialog } from './add-user-dialog';
import { MatDialogRef } from '@angular/material/dialog';

describe('AddUserDialog', () => {
  let component: AddUserDialog;
  let fixture: ComponentFixture<AddUserDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUserDialog],
      providers: [{ provide: MatDialogRef, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(AddUserDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
