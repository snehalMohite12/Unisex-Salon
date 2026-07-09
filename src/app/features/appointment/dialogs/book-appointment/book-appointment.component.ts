import { Component, inject } from '@angular/core';
import { AppointmentFormComponent } from '../../components/appointment-form/appointment-form.component';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-book-appointment',
  imports: [AppointmentFormComponent, MatIcon],
  templateUrl: './book-appointment.component.html',
  styleUrl: './book-appointment.component.scss'
})
export class BookAppointmentComponent {

  dialogRef = inject(MatDialogRef<BookAppointmentComponent>);
  close() {
    this.dialogRef.close();
  }
}
