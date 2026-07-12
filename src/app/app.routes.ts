import { Routes } from '@angular/router';
import { BookAppointmentComponent } from './features/appointment/dialogs/book-appointment/book-appointment.component';
import { WebsiteLayoutComponent } from './layouts/website-layout/website-layout.component';
import { LoginComponent } from './features/auth/login/login.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './features/admin/pages/dashboard/dashboard.component';
import { HomeComponent } from './features/home/pages/home/home.component';

export const routes: Routes = [
    {
        path: 'book-appointment',
        component: BookAppointmentComponent
    },
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
                component: DashboardComponent,
                data: {
                    title: 'Dashboard'
                }
            },
            // {
            //     path: 'appointments',
            //     component: AppointmentsComponent,
            //     data: {
            //         title: 'Appointments'
            //     }
            // },

            // {
            //     path: 'customers',
            //     component: CustomersComponent,
            //     data: {
            //         title: 'Customers'
            //     }
            // },
            // {
            //     path: 'employees',
            //     component: EmployeesComponent,
            //     data: {
            //         title: 'Employees'
            //     }
            // },

            // {
            //     path: 'services',
            //     component: ServicesComponent,
            //     data: {
            //         title: 'Services'
            //     }
            // },

            // {
            //     path: 'pricing',
            //     component: PricingComponent,
            //     data: {
            //         title: 'Pricing'
            //     }
            // },

        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
