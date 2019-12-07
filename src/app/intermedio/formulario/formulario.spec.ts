import { FormularioRegister } from './formulario';
import {FormBuilder} from '@angular/forms';

describe('Pruebas de Formulario', () =>{
    let componente: FormularioRegister;
    beforeEach (()=>{
        componente = new FormularioRegister ( new FormBuilder);
    });
    it('Debe crear un formulario con 2 campos, email, password', ()=>{
        expect (componente.form.contains('email')).toBeTruthy();
        expect (componente.form.contains('password')).toBeTruthy();
    })
    it('El email debe ser obligatorio', ()=>{
        const control = componente.form.get('email');
        control.setValue('');
        expect (control.valid).toBeFalsy();
    })

    it('El email debe ser un correo valido', ()=>{
        const control = componente.form.get('email');
        control.setValue('jhudy.delgadillo@gamil.com')
        expect (control.valid).toBeTruthy();
    });

})