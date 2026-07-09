import { Component, inject  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule  } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-appointment-form',
  imports: [ CommonModule,
    ReactiveFormsModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatIconModule],
  templateUrl: './appointment-form.component.html',
  styleUrl: './appointment-form.component.scss'
})
export class AppointmentFormComponent {
 private fb = inject(FormBuilder);

 appointmentForm = this.fb.group({

    name: ['', Validators.required],

    mobile: ['', [ Validators.required, Validators.pattern(/^[6-9]\d{9}$/) ]],

    service: [''],

    appointmentDate: ['', Validators.required],

    appointmentTime: ['', Validators.required],

    note: ['']

  });

   submit() {

    if (this.appointmentForm.invalid) {

      this.appointmentForm.markAllAsTouched();

      return;
    }

    console.log(this.appointmentForm.value);

  }
}
