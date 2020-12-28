import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(elementref:ElementRef) {
    elementref.nativeElement.style.backgroundColor= 'red';
   }

}
