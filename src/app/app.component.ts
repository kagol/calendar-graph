import { Component } from '@angular/core';
import { EMPTY_WEEK, LETTER_a, LETTER_g, LETTER_I, LETTER_K, LETTER_l, LETTER_m, LETTER_o } from '@shared/symbol-array';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  contributions = [].concat(
    LETTER_I, EMPTY_WEEK, EMPTY_WEEK,
    LETTER_a, EMPTY_WEEK, LETTER_m, EMPTY_WEEK, EMPTY_WEEK,
    LETTER_K, EMPTY_WEEK, LETTER_a, EMPTY_WEEK, LETTER_g, EMPTY_WEEK, LETTER_o, EMPTY_WEEK, LETTER_l
  );

  contributionsColumn = [
    // I
    [ 1, 1, 1, 1, 1, 1, 1 ],
  
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    
    // a
    [ 0, 6, 0, 0, 6, 0, 0 ],
    [ 0, 6, 0, 6, 0, 6, 0 ],
    [ 0, 6, 0, 6, 0, 6, 0 ],
    [ 0, 0, 6, 6, 6, 6, 0 ],
  
    [ 0, 0, 0, 0, 0, 0, 0 ],
  
    // m
    [ 0, 12, 12, 12, 12, 12, 0 ],
    [ 0, 12, 0, 0, 0, 0, 0 ],
    [ 0, 12, 0, 0, 0, 0, 0 ],
    [ 0, 3, 3, 3, 3, 3, 0 ],
    [ 0, 3, 0, 0, 0, 0, 0 ],
    [ 0, 3, 0, 0, 0, 0, 0 ],
    [ 0, 0, 8, 8, 8, 8, 0 ],
  
    [ 0, 0, 0, 0, 0, 0, 0 ],
    
    [ 0, 0, 0, 0, 0, 0, 0 ],
  
    // K
    [ 8, 8, 8, 8, 7, 7, 7 ],
    [ 0, 0, 0, 7, 0, 0, 0 ],
    [ 0, 0, 0, 7, 0, 0, 0 ],
    [ 0, 0, 7, 0, 7, 0, 0 ],
    [ 7, 1, 0, 0, 0, 1, 1 ],
    
    [ 0, 0, 0, 0, 0, 0, 0 ],
  
    // a
    [ 0, 1, 0, 0, 1, 0, 0 ],
    [ 0, 1, 0, 10, 0, 10, 0 ],
    [ 0, 10, 0, 10, 0, 10, 0 ],
    [ 0, 0, 10, 3, 3, 3, 0 ],
    
    [ 0, 0, 0, 0, 0, 0, 0 ],
  
    // g
    [ 0, 3, 3, 3, 0, 0, 3 ],
    [ 2, 0, 0, 0, 2, 0, 2 ],
    [ 2, 0, 0, 0, 2, 0, 2 ],
    [ 2, 2, 1, 1, 1, 1, 0 ],
    
    [ 0, 0, 0, 0, 0, 0, 0 ],
  
    // o
    [ 0, 0, 1, 1, 1, 0, 0 ],
    [ 0, 9, 0, 0, 0, 9, 0 ],
    [ 0, 9, 0, 0, 0, 9, 0 ],
    [ 0, 0, 9, 9, 9, 0, 0 ],
    
    [ 0, 0, 0, 0, 0, 0, 0 ],
  
    // l
    [ 1, 20, 1, 5, 5, 1, 0 ],
  
  ];
}
