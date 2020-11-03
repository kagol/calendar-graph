import { Component, Input } from '@angular/core';

@Component({
  selector: 'd-color-cube',
  templateUrl: './color-cube.component.html',
  styleUrls: ['./color-cube.component.scss']
})
export class ColorCubeComponent {

  @Input() color: string;
  @Input() size: number;

}
