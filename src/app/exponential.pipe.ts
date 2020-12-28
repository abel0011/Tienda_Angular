import { Pipe, PipeTransform } from '@angular/core';
//TODO:DECORADOR
@Pipe({
  name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {

  //meotodo --> tranformar datos 
  transform(value: number):any{
    return Math.pow(value,2);
  }

}
