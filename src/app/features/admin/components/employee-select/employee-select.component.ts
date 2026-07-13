import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-employee-select',
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './employee-select.component.html',
  styleUrl: './employee-select.component.scss'
})
export class EmployeeSelectComponent {
dialogRef = inject(MatDialogRef<EmployeeSelectComponent>);
 employeeName = '';

  mobile = '';

   employees = [

    {
      name:'Priya Sharma',
      mobile:'9876543210'
    },

    {
      name:'Neha Patil',
      mobile:'9876543211'
    },

    {
      name:'Rahul Joshi',
      mobile:'9876543212'
    }

  ];

  addEmployee(){

    if(!this.employeeName || !this.mobile){
      return;
    }

    this.employees.push({

      name:this.employeeName,

      mobile:this.mobile

    });

    this.employeeName='';

    this.mobile='';

  }

  deleteEmployee(index:number){

    this.employees.splice(index,1);

  }
  close() {
    this.dialogRef.close();
  }
}
