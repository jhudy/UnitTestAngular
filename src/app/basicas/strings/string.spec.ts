import { mensaje } from './string';
describe ('Pruebas de strings',() =>{

    it('Debe retornar un string', () => {
        const res = mensaje('Jhudy');
        expect (typeof res).toBe('string');
        });

    
 /*   it('Debe retornar el saludo con el nombre', () => {
        const nombre = 'Jhudy'
        const result= mensaje (nombre)
        expect (result).toContain(nombre);
        });

*/
})