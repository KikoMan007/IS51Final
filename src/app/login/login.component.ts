import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { Subject } from 'rxjs';

export interface IUser {

  username?: string;
  password?: string;


}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: IUser = { username: '', password: '' };


  constructor(private router: Router, private toastService: ToastService) {
  }

  ngOnInit() {


  }
  login(user: IUser) {

    const defaultUser: IUser = { username: 'michael', password: 'michael123' };
    if (user.username) {

    }

    if (user.username != null && user.password != null) {
      if (user.username === defaultUser.username && user.password === defaultUser.password) {



        // store user in local storage navigate to contacts page
      }

    } else {
      // show error toast user
    }



  }

}
