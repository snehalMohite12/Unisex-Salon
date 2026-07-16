import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-my-appointments',
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatFormFieldModule
  ],
  templateUrl: './my-appointments.component.html',
  styleUrl: './my-appointments.component.scss'
})
export class MyAppointmentsComponent {
  displayedColumns = [
    'customer',
    'service',
    'time',
    'status',
    'action'
  ];

  selectedFilter = 'Pending';

  filters = [
    'Pending',
    'In Progress',
    'Completed',
    'Rejected'
  ];

  appointments = [

    {
      customer: 'Rahul Sharma',
      service: 'Hair Cut',
      time: '11:00 AM',
      status: 'Pending'
    },

    {
      customer: 'Sneha Joshi',
      service: 'Hair Spa',
      time: '12:30 PM',
      status: 'In Progress'
    },

    {
      customer: 'Amit Patil',
      service: 'Facial',
      time: '2:00 PM',
      status: 'Completed'
    },

    {
      customer: 'Rohit',
      service: 'Beard',
      time: '5:00 PM',
      status: 'Rejected'
    }

  ];
}
