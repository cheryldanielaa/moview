import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }
  //cek apakah email dan password user ada di db
  checkLogin(u_email:string, u_password:string):Observable<any>{
  //buat http headersnya dulu
  const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
  const body = new URLSearchParams();
  //yang kiri itu nama kolom di db, yang kanan sesuai params
  body.set('email', u_email);
  body.set('password', u_password);
  const urlEncodedData = body.toString();
    return this.http.post("https://ubaya.xyz/hybrid/160422026/project/check_login.php", urlEncodedData, { headers });
  }

  addUser(fullName:string, email:string, password:string, profile_pic:string){
    //buat http headersnya dulu
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    //yang kiri itu nama kolom di db, yang kanan sesuai params
    body.set('name', fullName);
    body.set('email', email);
    body.set('password', password);
    body.set('role', "User");
    body.set('profile_pic', profile_pic);
    const urlEncodedData = body.toString();
    return this.http.post("https://ubaya.xyz/hybrid/160422026/project/register_user.php", urlEncodedData, { headers });
  }


  USER_DATA = [
    { id: 1, name: 'Cheryl', email: 'cheryl@gmail.com', password: '12345', role: 'Admin', profile_pic:'https://randomuser.me/api/portraits/women/1.jpg' },
    { id: 2, name: 'Aurel', email: 'aurel@gmail.com', password: '12345', role: 'User', profile_pic:'https://randomuser.me/api/portraits/women/2.jpg' },
    { id: 3, name: 'Michele', email: 'michele@gmail.com', password: '12345', role: 'User', profile_pic:'https://randomuser.me/api/portraits/women/3.jpg' },
    { id: 4, name: 'David', email: 'david@gmail.com', password: '12345', role: 'Admin', profile_pic:'https://randomuser.me/api/portraits/men/4.jpg' },
    { id: 5, name: 'Elena', email: 'elena@gmail.com', password: '12345', role: 'User', profile_pic:'https://randomuser.me/api/portraits/women/5.jpg' },
    { id: 6, name: 'James', email: 'james@gmail.com', password: '12345', role: 'User', profile_pic:'https://randomuser.me/api/portraits/men/6.jpg' },
    { id: 7, name: 'Sophia', email: 'sophia@gmail.com', password: '12345', role: 'User', profile_pic:'https://randomuser.me/api/portraits/women/7.jpg' },
    { id: 8, name: 'Michael', email: 'michael@gmail.com', password: '12345', role: 'Admin', profile_pic:'https://randomuser.me/api/portraits/men/8.jpg' },
    { id: 9, name: 'Isabella', email: 'isabella@gmail.com', password: '12345', role: 'User', profile_pic:'https://randomuser.me/api/portraits/women/9.jpg' },
    { id: 10, name: 'William', email: 'william@gmail.com', password: '12345', role: 'User', profile_pic:'https://randomuser.me/api/portraits/men/10.jpg' },
    { id: 11, name: 'Emma', email: 'emma@gmail.com', password: '12345', role: 'User', profile_pic:'https://randomuser.me/api/portraits/women/11.jpg' },
    { id: 12, name: 'Daniel', email: 'daniel@gmail.com', password: '12345', role: 'Admin', profile_pic:'https://randomuser.me/api/portraits/men/12.jpg' },
    { id: 13, name: 'Olivia', email: 'olivia@gmail.com', password: '12345', role: 'User', profile_pic:'https://randomuser.me/api/portraits/women/13.jpg' },
    { id: 14, name: 'Lucas', email: 'lucas@gmail.com', password: '12345', role: 'User', profile_pic:'https://randomuser.me/api/portraits/men/14.jpg' },
    { id: 15, name: 'Ava', email: 'ava@gmail.com', password: '12345', role: 'User', profile_pic:'https://randomuser.me/api/portraits/women/15.jpg' },
    { id: 16, name: 'Henry', email: 'henry@gmail.com', password: '12345', role: 'Admin', profile_pic:'https://randomuser.me/api/portraits/men/16.jpg' },
    { id: 17, name: 'Charlotte', email: 'charlotte@gmail.com', password: '12345', role: 'User', profile_pic:'https://randomuser.me/api/portraits/women/17.jpg' },
    { id: 18, name: 'Ethan', email: 'ethan@gmail.com', password: '12345', role: 'User', profile_pic:'https://randomuser.me/api/portraits/men/18.jpg' },
    { id: 19, name: 'Amelia', email: 'amelia@gmail.com', password: '12345', role: 'User', profile_pic:'https://randomuser.me/api/portraits/women/19.jpg' },
    { id: 20, name: 'Mason', email: 'mason@gmail.com', password: '12345', role: 'Admin', profile_pic:'https://randomuser.me/api/portraits/men/20.jpg' }];    
  
    // id: this.users.length + 1,
    //   name: this.fullName,
    //   email: this.email,
    //   password: this.password,
    //   //jika profile pic kosong, maka pake default,
    //   //klo gk kosong, pake yg default
    //   profile_pic: this.photo && this.photo.trim() !== "" 
    //              ? this.photo 
    //              : 'https://st2.depositphotos.com/5682790/10456/v/450/depositphotos_104564156-stock-illustration-male-user-icon.jpg',
    //   role: 'User'
  // addUser(fullName:string, email:string, password:string, profile_pic:string){
  //   const newUser = {
  //     id: this.USER_DATA.length + 1,
  //     name:fullName,
  //     email: email,
  //     password: password,
  //     //jika profile pic kosong, maka pake default,
  //     //klo gk kosong, pake yg default
  //     profile_pic:profile_pic,
  //     role: 'User'
  //   };
  //   this.USER_DATA.push(newUser);
  }
  // checkLogin(email:string, password:string){
  //   const user = this.USER_DATA.find(u => u.email == email && u.password == password);
  //   return user;
  // }
  
