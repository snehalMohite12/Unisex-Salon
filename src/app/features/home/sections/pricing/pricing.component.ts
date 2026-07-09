import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-pricing',
  imports: [SectionTitleComponent],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
  plans = [

    {
      title:'Hair Cut',
      price:350,
      features:[
        'Hair Wash',
        'Professional Styling',
        'Consultation'
      ]
    },

    {
      title:'Facial',
      price:799,
      features:[
        'Deep Cleansing',
        'Face Massage',
        'Glow Pack'
      ]
    },

    {
      title:'Hair Spa',
      price:1200,
      features:[
        'Hair Wash',
        'Head Massage',
        'Deep Conditioning'
      ]
    }

  ];
}
