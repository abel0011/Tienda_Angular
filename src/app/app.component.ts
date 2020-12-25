import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  items= ['nicolas','julian','Roberto']

  addItem(){
    this.items.push(this.title)
  }

  deleteItem(index: number){
    //TODO: SPLICE METODO ELIMINA POR INDICE , TE PUEDE CUANTOS ELEMENTOS VA A BORRAR
    this.items.splice(index,1)
  }
} 