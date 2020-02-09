import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[caseChange]'
})
export class PhoneNumberDirective {

  constructor(private el: ElementRef) { }

  @Input('caseChange')
  casingType;

  @HostListener('blur')
  onBlur(){
    let text: string = this.el.nativeElement.value;
    if(this.casingType === 'UPPER'){
      this.el.nativeElement.value = text.toLocaleUpperCase();
    } else if(this.casingType === 'LOWER'){
      this.el.nativeElement.value = text.toLocaleLowerCase();
    }
    console.log(this.casingType);
  }

}
