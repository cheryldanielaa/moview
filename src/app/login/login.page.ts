import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //buat routing
import { Storage } from '@ionic/storage-angular'; //buat nyimpen status login
import { UserserviceService } from '../userservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  //users:any[]=[];
  email: string = '';
  password: string = '';
  message: string = '';
  messageColor: string = '';
  user: any = {}; //user yang login ke dalam sistem
  //create storage dulu
  constructor(private router: Router, private storage: Storage,
    private userservice: UserserviceService
  ) {
    this.storage.create();
  }

  ngOnInit() {
    //deklarasi user disini
    // this.users = this.userservice.USER_DATA;
  }

  login() {
    //cari data user dari USER_DATA
    // const user = this.userservice.checkLogin(this.email, this.password);
    //panggil API
    this.userservice.checkLogin(this.email, this.password)
      .subscribe(
        (data) => {
          //cek apakah data ditemukan
          if (data && data.length > 0) {
            //jika ditemukan, maka perbaharui user sesuai dgn hasil query
            this.user = data[0]; //ambil data index 1 krn dia direturn berupa array
            //simpen status & data user yg lagi login di storage
            this.storage.set('isLoggedIn', true)
              .then(() => this.storage.set('userEmail', this.user.email))
              .then(() => this.storage.set('userRole', this.user.role))
              .then(() => this.storage.set('userId', this.user.id))
              .then(() => this.storage.set('userName', this.user.name))
              .then(() => this.storage.set('userProfile', this.user.profile_pic))
              .then(() => {
                this.showTextMessage('Login successful!', 'green');
                setTimeout(() => {
                  //klo berhasil, direct ke home
                  this.router.navigate(['/home']).then(() => {
                    //reload home page buat munculin manage-movie tab hbs log in as admin
                    location.reload();
                  });
                }, 2000);
              });
          }
          else {
            //jika tdk ada user yg ditemukan, maka munculin exception
            this.showTextMessage('Login failed! Check your email and password.', 'red');
          }
        }
      )
  }
  showTextMessage(message: string, color: string) {
    this.message = message;
    this.messageColor = color;
    //message hilang setelah 3 detik
    setTimeout(() => { this.message = ''; }, 3000);
  }
}
