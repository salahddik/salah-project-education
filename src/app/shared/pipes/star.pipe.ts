import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'star',
})
export class StarPipe implements PipeTransform {
  transform(value: string): string {
    const splitedvalue: string[] = value.split('');
    let result: string = '';
    for (const item of splitedvalue) {
      if (result !== '') {
        result += '_';
      }
      result += item;
    }
    return result;
  }
}
