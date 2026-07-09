import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BookAppointmentComponent } from '../../../appointment/dialogs/book-appointment/book-appointment.component';
@Component({
  selector: 'app-hero',
  imports: [MatDialogModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
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
