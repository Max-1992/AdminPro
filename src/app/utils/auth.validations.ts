import { AbstractControl } from '@angular/forms';

export class CustomValidators {

    /*
        * Password format validation.
    */
    static passwordValidation( password: AbstractControl ) {

        if ( password.value.length < 4 ) {
        return {
            'passwordValidation': {'message': 'Your password is very weak. It must contain at least 6 characters.'}
            }
        }
        
        if( password.value === password.value.toLocaleLowerCase() ) {
        return {
            'passwordValidation': {'message': 'Your password must contain at least one uppercase character.'}
            }
        }
        
        if( password.value === password.value.toUpperCase() ) {
            return {
            'passwordValidation': {'message': 'Your password must contain at least one lowercase character.'}
            }
        }
        
        return null;
    }

    /*
        * Matches Password validation.
    */
   static matchPassword ( passwordRepead: AbstractControl ) {
    
        let form: any = this;
    
        let password2 = passwordRepead.value
    
        if( form.controls['password'].value !== password2 ){
            return {
            'matchPassword': {'message': 'Los password no son identicos'}
            }
        }

        return null;
    }
    
    
}