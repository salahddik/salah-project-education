import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monny',
})
export class MonnyPipe implements PipeTransform {
  transform(value: number): string {
    return `📌${value} 📌`;
  }
}
