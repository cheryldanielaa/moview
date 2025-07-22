import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,  
})
export class AppComponent {
  userRole: string = '';
  hideTabs: boolean = false;

  //constructor ini pertama kali jalan waktu page nya loading
  //inisialisasi storage buat waktu pertama kali load home page
  constructor(private storage: Storage, private router: Router) {
    this.storage.create();
    this.checkUserRole();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        document.body.classList.remove('login-page', 'register-page');

        if (event.url.includes('/login')) {
          document.body.classList.add('login-page');
        } 
        else if (event.url.includes('/register')) {
          document.body.classList.add('register-page');
        }
      }
    });
  }

  checkUserRole() {
    //ambil userRole dari storage
    //klo berhasil, lanjut ke .then()
    //then catch ini kayak try catch -> masuk try klo berhasil, masuk catch klo gagal
    this.storage.get('userRole').then(role => {
      //kalo role nya gaada, set ''
      this.userRole = role || '';
    }).catch(error => {
      //catch buat tangkep error
      console.error('Error fetching user role:', error);
      this.userRole = '';
    });
  }
}
