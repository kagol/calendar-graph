import { Component } from '@angular/core';
import { EMPTY_WEEK, LETTER_a, LETTER_g, LETTER_I, LETTER_K, LETTER_l, LETTER_m, LETTER_o } from 'ng-calendar-graph/calendar-graph/shared/symbol-array';

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
    [ 0, 1, 0, 0, 1, 0, 0 ],
    [ 0, 1, 0, 1, 0, 1, 0 ],
    [ 0, 1, 0, 1, 0, 1, 0 ],
    [ 0, 0, 1, 1, 1, 1, 0 ],
  
    [ 0, 0, 0, 0, 0, 0, 0 ],
  
    // m
    [ 0, 1, 1, 1, 1, 1, 0 ],
    [ 0, 1, 0, 0, 0, 0, 0 ],
    [ 0, 1, 0, 0, 0, 0, 0 ],
    [ 0, 1, 1, 1, 1, 1, 0 ],
    [ 0, 1, 0, 0, 0, 0, 0 ],
    [ 0, 1, 0, 0, 0, 0, 0 ],
    [ 0, 0, 1, 1, 1, 1, 0 ],
  
    [ 0, 0, 0, 0, 0, 0, 0 ],
    
    [ 0, 0, 0, 0, 0, 0, 0 ],
  
    // K
    [ 1, 1, 1, 1, 1, 1, 1 ],
    [ 0, 0, 0, 1, 0, 0, 0 ],
    [ 0, 0, 0, 1, 0, 0, 0 ],
    [ 0, 0, 1, 0, 1, 0, 0 ],
    [ 1, 1, 0, 0, 0, 1, 1 ],
    
    [ 0, 0, 0, 0, 0, 0, 0 ],
  
    // a
    [ 0, 1, 0, 0, 1, 0, 0 ],
    [ 0, 1, 0, 1, 0, 1, 0 ],
    [ 0, 1, 0, 1, 0, 1, 0 ],
    [ 0, 0, 1, 1, 1, 1, 0 ],
    
    [ 0, 0, 0, 0, 0, 0, 0 ],
  
    // g
    [ 0, 1, 1, 1, 0, 0, 1 ],
    [ 1, 0, 0, 0, 1, 0, 1 ],
    [ 1, 0, 0, 0, 1, 0, 1 ],
    [ 1, 1, 1, 1, 1, 1, 0 ],
    
    [ 0, 0, 0, 0, 0, 0, 0 ],
  
    // o
    [ 0, 0, 1, 1, 1, 0, 0 ],
    [ 0, 1, 0, 0, 0, 1, 0 ],
    [ 0, 1, 0, 0, 0, 1, 0 ],
    [ 0, 0, 1, 1, 1, 0, 0 ],
    
    [ 0, 0, 0, 0, 0, 0, 0 ],
  
    // l
    [ 1, 1, 1, 1, 1, 1, 0 ],
  
  ];
}
