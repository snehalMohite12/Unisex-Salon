import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../features/home/sections/footer/footer.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-website-layout',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './website-layout.component.html',
  styleUrl: './website-layout.component.scss'
})
export class WebsiteLayoutComponent {

}
