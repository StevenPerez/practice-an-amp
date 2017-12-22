import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StartComponent implements OnChanges {
  rating: number = 4;
  startWidth: number;

  ngOnChanges() {
    return;
  }
}
