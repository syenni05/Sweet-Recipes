import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../service/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{

  constructor(private utils: UtilsService) { }

  login(data) {
    console.log('You have successfully login');
    this.utils.showToast('You have successfully login');
    }

}
