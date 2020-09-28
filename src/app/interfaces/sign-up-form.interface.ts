// Declare Interface
export interface SignUpI {
    name: string;
    email: string;
    dni: number;
    password: string;
    terms: boolean;
    passwordRepeat?: string;
}