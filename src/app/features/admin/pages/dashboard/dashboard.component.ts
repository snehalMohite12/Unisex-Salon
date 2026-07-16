import { Component } from '@angular/core';
import { AppointmentTableComponent } from '../../components/appointment-table/appointment-table.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    AppointmentTableComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class OwnerDashboardComponent {
stats = [

  {
    title: "Today's Appointments",
    value: 12,
    icon: 'event',
    color: '#2563EB',
    subTitle: '+2 from yesterday'
  },

  {
    title: 'Pending',
    value: 4,
    icon: 'schedule',
    color: '#F59E0B',
    subTitle: 'Needs confirmation'
  },

  {
    title: 'Completed',
    value: 8,
    icon: 'check_circle',
    color: '#22C55E',
    subTitle: 'Finished today'
  },

  {
    title: 'Employees',
    value: 5,
    icon: 'groups',
    color: '#8B5CF6',
    subTitle: 'Available today'
  }

];
}
