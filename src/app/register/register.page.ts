import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { UserserviceService } from '../userservice.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})

export class RegisterPage {
  fullName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  message: string = '';
  photo: string = "";
  messageColor: string = '';

  users: any[] = [];

  constructor(private router: Router, private storage: Storage, private userservice: UserserviceService) {
    this.storage.create();
  }

  ngOnInit() {
    //this.users = this.userservice.USER_DATA;
  }
  register() {
    //cek smua field udh diisi blm
    if (!this.fullName || !this.email || !this.password || !this.confirmPassword) {
      this.showTextMessage('All fields are required!', 'red');
      return;
    }

    //cek pass sama confirmpass udh sama blm
    if (this.password != this.confirmPassword) {
      this.showTextMessage('Passwords do not match!', 'red');
      return;
    }

    //cek apakah data email yg diisi udh ada di list
    if (this.users.some(u => u.email == this.email)) {
      this.showTextMessage('Email already registered!', 'red');
      return;
    }
    const profile_pic = this.photo && this.photo.trim() !== ""
      ? this.photo
      : 'https://st2.depositphotos.com/5682790/10456/v/450/depositphotos_104564156-stock-illustration-male-user-icon.jpg';

    //masukin data ke list (hanya untuk sesi ini, ga disimpan permanen) bikos pakenya list yuhu
    this.userservice.addUser(this.fullName, this.email, this.password, profile_pic)
      .subscribe((response: any) => {
        if (response.result === "success") {
          this.showTextMessage('Registration successful! Redirecting to login...', 'green');
          setTimeout(() => this.router.navigate(['/login']), 2000);
        } 
        else {
          //kirim pesan gagal registrasi
          this.showTextMessage(response.message, 'red');
        }
      });
  }

  showTextMessage(message: string, color: string) {
    this.message = message;
    this.messageColor = color;

    //message hilang stelah 3 detik
    setTimeout(() => { this.message = ''; }, 3000);
  }
}