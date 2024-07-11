import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ModalComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'angular-bad';
  modal_title = 'modal test';

  @ViewChild('modalComponent', { static: false }) modalComponent!: ModalComponent;

  ngAfterViewInit(): void {
    // Referencia a modalComponent ya está disponible aquí
    console.log('Modal Component:', this.modalComponent);
  }
  // Abre el modal
  openModal(modal_title: string, modal_body: string,toggleColor:string | null): void {
    this.modalComponent.openModal(modal_title, modal_body, toggleColor);
  }
  // Cierra el modal
  closeModal(): void {
    this.modalComponent.closeModal();
  } 
}

  /* changeBackgroundColorModal(color: string): void {
    if (this.modalComponent.backgroundColor == color) {
      this.modalComponent.backgroundColor = 'white';
    } else {
      this.modalComponent.backgroundColor = color;
    }
    this.modalComponent.suma_total(2, 5);
    this.openModal('Título modal ejemplo3', 'Cuerpo modal ejemplo3');
  }
}
 */

///coses fetes
/// importar CommonModule per error ngif
/// en el app-modal afegir un #modalComponent i modificar el nom de la variable a viewchild, el que hi havia era poc concret
// eliminar test modal que no serveix per res
// a change backgroundmodal cridar a la funció propia del component enlloc de la del fill
// trec l' oninit del modal perque no s' hi crida cap funció
//coses fetes per consultar

///coses a fer
// un sol open modal i enviar-ne els valor des del boto



