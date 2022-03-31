import { Component,OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calcularEdad';
  public number1 :any;
  public number2 : any;
  public result1 : any;
  public result2 : any;

  constructor(private location: Location) {}
  public calc(){
    this.result1 = (this.number1 + this.number2)/2
    this.result2 = this.number1 + this.number2

  }

  public limpiar(){
    location.reload();


  }
}
