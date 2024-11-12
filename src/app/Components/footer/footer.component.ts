import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  subscribe = { email: '' };
  subscribed = false;

  subscribeForm() {
    this.subscribed = true;
    this.resetForm();
  }

  resetForm() {
    this.subscribe = { email: '' };
  }
}
