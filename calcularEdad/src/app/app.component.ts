import { Component,OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Suma} from '../app/Entidades/suma';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calcularEdad';
  // public number1 :number=0;
  // public number2 : number=0;
  // public result1 :number=0;
  // public result2 : number=0;
  miSuma=new Suma();

  constructor(private location: Location) {}
  public calc(){
    this.miSuma.resultado = (this.miSuma.num1 + this.miSuma.num2)/2
    this.miSuma.resultado2 = this.miSuma.num1  + this.miSuma.num2

  }

  public limpiar(){
    location.reload();


  }
}
