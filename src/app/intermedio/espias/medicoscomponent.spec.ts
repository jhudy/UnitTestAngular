import { MedicosComponent} from './medicos.component';
import{ MedicosService } from './medicos.service';
import { from, EMPTY, throwError } from 'rxjs';

//test suit
describe('Medicos Componet testSuit', () =>{
    let component: MedicosComponent;            // let,var crean variables con un ambito local o global
    const servicio = new MedicosService(null);  // nunca desde que qse qqcrqeqaq sqeq camqbia de valor

    beforeEach(()=>{
        component = new MedicosComponent(servicio); // antes de cada metodo crea el areglo medicos vacio
    })

    //1
    it('Init: debe cargar los medicos', ()=>{
        const medicosFake = ['medico1', 'medico2', 'medico3']
        spyOn(servicio,'getMedicos').and.callFake(()=>{  //spyOn: falsear .getmedicos del servicio de ngOnInit, simular llamada, y simular valor de retorno
            return from([medicosFake])
        })
        component.ngOnInit();
        expect(component.medicos.length).toBeGreaterThan(0);
    });

    //2
    it('Debe llamar al servidor para agregar un medico', ()=>{
        const espia = spyOn(servicio, 'agregarMedico').and.callFake(medico =>{
            return EMPTY;
        })
        component.agregarMedico();
        expect(espia).toHaveBeenCalled();
    });

    //3
    it('Debe agregar un nuevo medico al arreglo del componente', ()=>{ //this.medicos.push(medicoDB)
        const medico = {id: 1, nombre: 'Judith'};
        spyOn(servicio,'agregarMedico').and.returnValue(from([medico]));
        component.agregarMedico();
        expect(component.medicos.length).toBeGreaterThanOrEqual(1);
    });

    //4
    it('Si falla la llamada el error debe ser igual al error del Servicio', ()=>{ //err => this.mensajeError = err
        const miError = 'No se pudo agregar al medico';
        spyOn(servicio, 'agregarMedico').and.returnValue(throwError(miError));
        component.agregarMedico();
        expect(component.mensajeError).toBe(miError);
    });

})