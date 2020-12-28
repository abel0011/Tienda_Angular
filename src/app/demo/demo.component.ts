import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'Angular';
  items= ['nicolas','julian','Roberto']

  addItem(){
    this.items.push(this.title)
  }

  deleteItem(index: number){
    //TODO: SPLICE METODO ELIMINA POR INDICE , TE PUEDE CUANTOS ELEMENTOS VA A BORRAR
    this.items.splice(index,1)
  }

    power=10;

}
