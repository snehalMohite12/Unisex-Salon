import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
 quickLinks = [
    'Home',
    'Services',
    'Pricing',
    'Gallery',
    'Book Appointment'
  ];

  services = [
    'Hair Cut',
    'Hair Spa',
    'Facial',
    'Bridal Makeup'
  ];
}
