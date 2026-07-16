import { Component } from '@angular/core';
import { MyAppointmentsComponent } from '../../components/my-appointments/my-appointments.component';

@Component({
  selector: 'app-dashboard',
  imports: [MyAppointmentsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class EmployeeDashboardComponent {

}
