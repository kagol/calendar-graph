import { Component, Input } from '@angular/core';

@Component({
    selector: 'd-color-cube',
    template: `
        <span class="color-cube" [ngStyle]="{
            'width.px': size,
            'height.px': size,
            'background-color': color
        }"></span>
    `,
    styles: [
        `
            .color-cube {
                display: inline-block;
            }
        `
    ]
})
export class ColorCube {
    @Input() color: string;
    @Input() size: number;
}