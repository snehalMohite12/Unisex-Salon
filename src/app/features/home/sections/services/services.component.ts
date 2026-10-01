import { Component, input } from '@angular/core';
import { Service } from '../../../../core/models/service.model';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { ServiceCardComponent } from '../../../../shared/components/service-card/service-card.component';

@Component({
  selector: 'app-services',
  imports: [SectionTitleComponent, ServiceCardComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services: Service[] = [
   {
      id:1,
      title:'Hair Cut',
      description:'Professional haircut by expert stylists.',
      duration:'30 Min',
      price:350,
      image:'assets/images/Haircut.png'
    },

    {
      id:2,
      title:'Hair Spa',
      description:'Relaxing hair spa treatment.',
      duration:'60 Min',
      price:1200,
      image:'assets/images/Hair Spa Treatment.png'
    },

    {
      id:3,
      title:'Facial',
      description:'Luxury skin rejuvenation.',
      duration:'45 Min',
      price:799,
      image:'assets/images/Facial.png'
    },

    {
      id:4,
      title:'Beard Styling',
      description:'Premium beard grooming.',
      duration:'20 Min',
      price:250,
      image:'assets/images/Beard.png'
    },

    {
      id:5,
      title:'Hair Coloring',
      description:'Premium hair coloring service.',
      duration:'90 Min',
      price:1800,
      image:'assets/images/Hair Colouring.png'
    },

    {
      id:6,
      title:'Bridal Makeup',
      description:'Complete bridal makeover.',
      duration:'3 Hours',
      price:6500,
      image:'assets/images/Bridal Glow.png'
    }
  ];
}
