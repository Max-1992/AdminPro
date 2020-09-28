// Declare Interface
interface UserI {
    name: string;
    email: string;
    dni: number;
    id: string;
    password?: string;
    image?: string;
    active: boolean;
    role: string;
    fechaAlta: Date;
    google: boolean;
    reset?: string;
}

// Declare Class
export class User implements UserI {
    
    public id: string;
    public name: string;
    public email: string;
    public password: string;
    public dni: number;
    public image: string;
    public active: boolean;
    public role: string;
    public fechaAlta: Date;
    public google: boolean;
    public reset: string;

    constructor() {}

}