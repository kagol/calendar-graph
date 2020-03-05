import { Component, Input } from '@angular/core';

@Component({
    selector: 'd-color-cube',
    template: `
        <span class="color-cube" [ngStyle]="{
            'display': 'inline-block',
            'width.px': size,
            'height.px': size,
            'background-color': color
        }"></span>
    `,
})
export class ColorCube {
    @Input() color: string;
    @Input() size: number;
}