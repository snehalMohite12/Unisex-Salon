import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookAppointmentComponent } from '../../../features/appointment/dialogs/book-appointment/book-appointment.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private dialog = inject(MatDialog);

  openBooking() {
    this.dialog.open(BookAppointmentComponent, {
      width: '1000px',
      maxWidth: '95vw',
      maxHeight: '90vh',
      autoFocus: false,
      panelClass: 'booking-dialog'
    });
  }
}
