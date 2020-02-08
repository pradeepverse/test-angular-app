import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideText'
})
export class HideTextPipe implements PipeTransform {

  transform(value: any, arg: number): any {
    let newText = (value.length > arg) ? (value.substr(0,arg) + '...') : value
    return newText;
  }

}
