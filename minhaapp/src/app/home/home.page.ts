import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public alertButtons = ['OK'];

  nome: string = '';
  sobrenome: string = '';

  constructor() {
    
  }

}
