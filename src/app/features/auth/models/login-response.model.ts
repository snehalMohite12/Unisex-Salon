export interface LoginResponse {

    token: string;

    role: 'OWNER' | 'EMPLOYEE';

    name: string;

}