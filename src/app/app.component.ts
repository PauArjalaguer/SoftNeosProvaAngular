import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ModalComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  title: string;
  modal_title: string;

  @ViewChild('modalComponent', { static: false }) modalComponent!: ModalComponent;
  constructor() {
    this.title = "Titol";
    this.modal_title = "Titol modal";
  }
 
  openModal(modal_title: string, toggleColor: string | null): void {
    this.modalComponent.openModal(modal_title, toggleColor);
  }

  closeModal(): void {
    this.modalComponent.closeModal();
  }
}


