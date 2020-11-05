import { Pipe, PipeTransform } from '@angular/core';
import { getColor } from '@shared/util';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(value: number): string {
    return getColor(value);
  }

}
