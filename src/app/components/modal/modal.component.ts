import { Component, OnInit, Input } from '@angular/core';
import { CommonModule, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgStyle, CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  @Input() title: any;
  @Input() backgroundColor: string ;

  modalOpen: boolean;
  total: number = 0;

  constructor() {
    this.modalOpen = false;
    this.backgroundColor='white';
  }

  openModal(titulo_modal: string, toggleColor: string | null): void {
    this.modalOpen = true;
    this.title = titulo_modal;
    if (toggleColor) {
      this.total_sum(1, 5);
      this.changeBackgroundColorModal(toggleColor)
    }
  }

  closeModal(): void {
    this.modalOpen = false;
  }

  total_sum(num1: number, num2: number): number {
    this.total = num1 + num2;
    return this.total;
  }

  changeBackgroundColorModal(color: string): void {
    if (this.backgroundColor == color) {
      this.backgroundColor = 'white';
    } else {
      this.backgroundColor = color;
    }
  }
}




