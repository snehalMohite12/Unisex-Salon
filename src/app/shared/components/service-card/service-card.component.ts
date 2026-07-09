import { Component, input } from '@angular/core';
import { Service } from '../../../core/models/service.model';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-service-card',
  imports: [ButtonComponent],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {
  service = input.required<Service>();

}
