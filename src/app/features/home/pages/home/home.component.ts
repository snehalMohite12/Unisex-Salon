import { Component } from '@angular/core';
import { HeroComponent } from '../../sections/hero/hero.component';
import { TrustedByComponent } from '../../sections/trusted-by/trusted-by.component';
import { ServicesComponent } from '../../sections/services/services.component';
import { WhyUsComponent } from '../../sections/why-us/why-us.component';
import { PricingComponent } from '../../sections/pricing/pricing.component';

@Component({
  selector: 'app-home',
  imports: [ HeroComponent, ServicesComponent,
    TrustedByComponent,
    WhyUsComponent,
    PricingComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
