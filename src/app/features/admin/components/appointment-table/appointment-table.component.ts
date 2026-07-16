import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeSelectComponent } from '../employee-select/employee-select.component';
import { Appointment } from '../../../../shared/models/appointment.model';


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
  private dialog = inject(MatDialog);
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
  appointments: Appointment[] = [

    {
      id:1,
      customer:'Rahul',
      mobile:'9876543210',
      service:'Hair Cut',
      date:'Today',
      time:'11:00 AM',
      status:'Pending',
      employee:''
    },

    {
      id:2,
      customer:'Sneha',
      mobile:'9876543211',
      service:'Hair Spa',
      date:'Today',
      time:'2:00 PM',
      status:'Completed',
      employee:'Priya'
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

  updateEmployee() {
    this.dialog.open(EmployeeSelectComponent, {
      width: '1000px',
      maxWidth: '95vw',
      maxHeight: '90vh',
      autoFocus: false,
      panelClass: 'booking-dialog'
    });
  }
}
