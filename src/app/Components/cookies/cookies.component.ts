import { Component } from '@angular/core';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css']
})
export class CookiesComponent {
  cookieAccepted: boolean | null = null; 

  ngOnInit() {
    this.checkCookieConsent();
  }

  checkCookieConsent() {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'true') {
      this.cookieAccepted = true; 
    } else if (consent === 'false') {
      this.cookieAccepted = false; 
    } else {
      this.cookieAccepted = null; 
    }
  }

  acceptCookies() {
    localStorage.setItem('cookieConsent', 'true');
    this.cookieAccepted = true; 
  }

  rejectCookies() {
    localStorage.setItem('cookieConsent', 'false');
    this.cookieAccepted = false; 
  }
}
