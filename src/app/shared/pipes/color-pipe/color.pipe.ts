import { Pipe, PipeTransform } from '@angular/core';
import { getColor } from '@shared/util';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(value: number, source: number[], target: string[]): string {
    return getColor(value, source, target);
  }

}
