import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../service/utils.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  constructor(private utils: UtilsService) { }

  register(data) {
    console.log('You have successfully register');
    this.utils.showToast('You have successfully register');
    }

}
