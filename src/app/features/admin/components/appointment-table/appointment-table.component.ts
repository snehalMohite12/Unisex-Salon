import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-appointment-table',
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatChipsModule,
    MatFormFieldModule
  ],
  templateUrl: './appointment-table.component.html',
  styleUrl: './appointment-table.component.scss'
})
export class AppointmentTableComponent {
 search = '';

  selectedFilter = 'All';
  displayedColumns = [
  'customer',
  'mobile',
  'service',
  'date',
  'time',
  'status',
  'employee',
  'action'
];

employees = [
  'Priya',
  'Neha',
  'Amit',
  'Riya'
];
  appointments = [

    {
      customer:'Rahul Sharma',
      mobile:'9876543210',
      service:'Hair Cut',
      date:'Today',
      time:'11:00 AM',
      status:'Pending',
      employee:''
    },

    {
      customer:'Amit Patil',
      mobile:'9876543211',
      service:'Facial',
      date:'Today',
      time:'12:30 PM',
      status:'Confirmed',
      employee:'Priya'
    },

    {
      customer:'Sneha Joshi',
      mobile:'9876543212',
      service:'Hair Spa',
      date:'Today',
      time:'02:00 PM',
      status:'Completed',
      employee:'Neha'
    }

  ];

  filters = [
    'All',
    'Pending',
    'Confirmed',
    'Completed',
    'Today'
  ];

  selectFilter(filter: string) {
  this.selectedFilter = filter;
}
}
