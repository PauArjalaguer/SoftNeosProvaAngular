import { Component, OnInit, Input } from '@angular/core';
import { CommonModule, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgStyle, CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent  {

  @Input() title: any = 'Default Title'; // Título del modal
  @Input() data: any;
  @Input() backgroundColor: string = 'white'; // Propiedad para el color de fondo
  modalOpen: boolean; // Estado del modal (abierto/cerrado)
  total: number = 0;


  constructor() {
    // Iniciando el constructor, aunque no hace nada
    this.modalOpen = false;  // Por defecto el modal está cerrado
  }

 
  openModal(titulo_modal: string, cuerpo_modal: string, toggleColor: string | null): void {
    this.modalOpen = true; 
    this.title = titulo_modal;
    console.log('Modal opened!');
    if(toggleColor){
      this.changeBackgroundColorModal(toggleColor)
    }
  }

  closeModal(): void {
    this.modalOpen = false; 
    console.log('Modal closed!');
  }

  suma_total(num1: number, num2: number): number {
    this.total = num1 + num2; 
    return this.total;
  }

  changeBackgroundColorModal(color: string): void {
    if (this.backgroundColor == color) {
      this.backgroundColor = 'white';
    } else {
      this.backgroundColor = color;
    }
    //this.modalComponent.suma_total(2, 5);
    //this.openModal('Título modal ejemplo3', 'Cuerpo modal ejemplo3');
  }
}




