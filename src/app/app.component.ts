import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HeroComponent } from './features/home/sections/hero/hero.component';
import { ServicesComponent } from './features/home/sections/services/services.component';
import { TrustedByComponent } from './features/home/sections/trusted-by/trusted-by.component';
import { WhyUsComponent } from './features/home/sections/why-us/why-us.component';
import { PricingComponent } from './features/home/sections/pricing/pricing.component';
import { FooterComponent } from './features/home/sections/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HeroComponent, ServicesComponent,
    TrustedByComponent,
    WhyUsComponent,
    PricingComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Salon';
}
