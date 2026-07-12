import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  pageTitle = '';
  @Output() toggleSidebar = new EventEmitter<void>();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {

        let route = this.activatedRoute;

        while (route.firstChild) {
          route = route.firstChild;
        }

        this.pageTitle = route.snapshot.data['title'] || 'Dashboard';

      });

  }
}
