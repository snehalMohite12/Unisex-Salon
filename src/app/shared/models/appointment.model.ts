export interface Appointment {

    id: number;

    customer: string;

    mobile?: string;

    service: string;

    date: string;

    time: string;

    status: 'Pending' | 'In Progress' | 'Completed' | 'Rejected';

    employee?: string;

}