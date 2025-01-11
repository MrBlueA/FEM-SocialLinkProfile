import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-link-button',
  imports: [],
  templateUrl: './link-button.component.html',
  styleUrl: './link-button.component.css'
})
export class LinkButtonComponent {
  @Input({required: true}) name!: string;
  @Input({required: true}) link!: string;

  openLink() {
   window.open(this.link, '_blank');
  }
}
