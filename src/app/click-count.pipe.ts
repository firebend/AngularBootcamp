import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clickCount'
})
export class ClickCountPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return !!value ? `Clicked ${value} times` : 'Clicked 0 times';
  }

}
