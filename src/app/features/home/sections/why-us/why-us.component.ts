import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-why-us',
  imports: [MatIconModule, SectionTitleComponent],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.scss'
})
export class WhyUsComponent {

}
