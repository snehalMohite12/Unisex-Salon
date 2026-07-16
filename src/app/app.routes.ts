import { Routes } from '@angular/router';
import { BookAppointmentComponent } from './features/appointment/dialogs/book-appointment/book-appointment.component';
import { WebsiteLayoutComponent } from './layouts/website-layout/website-layout.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { OwnerDashboardComponent } from './features/admin/pages/dashboard/dashboard.component';
import { HomeComponent } from './features/home/pages/home/home.component';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { EmployeeDashboardComponent } from './features/employee/pages/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        component: WebsiteLayoutComponent,
        children: [

            {
                path: '',
                component: HomeComponent
            }

        ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'book-appointment',
        component: BookAppointmentComponent
    },
    {
        path: 'admin',
        component: AdminLayoutComponent,
        children: [

            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },

            {
                path: 'dashboard',
                component: OwnerDashboardComponent,
                data: {
                    title: 'Dashboard'
                }
            },
        ]
    },
    {
        path: 'employee',
        component: AdminLayoutComponent,
        children: [

            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },

            {
                path: 'dashboard',
                component: EmployeeDashboardComponent,
                data: {
                    title: 'My Appointments'
                }
            }

        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
