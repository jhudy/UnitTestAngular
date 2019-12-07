import { Component, OnInit } from '@angular/core';
import { MedicosService } from './medicos.service';

@Component({
  selector: 'app-medicos',
  template: `
    <p>
      medicos works!
    </p>
  `,
  styles: []
})
export class MedicosComponent implements OnInit {

  public medicos: any[] = [];
  public mensajeError: string;

  constructor( public _medicoService: MedicosService ) { }

  ngOnInit() { //constructor que se ejecuta cuando el componente esta inicializando
    this._medicoService.getMedicos()
          .subscribe( medicos => this.medicos = medicos );
          //.subscribe( m => this.medicos = m );
  }

  agregarMedico() {
    const medico = { nombre: 'Médico Juan Carlos' };

    this._medicoService.agregarMedico(medico)
          .subscribe(
            medicoDB => this.medicos.push(medicoDB),
            err => this.mensajeError = err
          );
  }

  borrarMedico(id: string) {
    const confirmar = confirm('Estas seguro que desea borrar este médico');

    if ( confirmar ) {
      this._medicoService.borrarMedico( id );
    }

  }

}
