import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-counter',
  templateUrl: './grade-counter.component.html',
  styleUrls: ['./grade-counter.component.scss'],
})
export class GradeCounterComponent implements OnInit {

  @Input('grade-name') private mName: string;

  @Input('grade-description') private mDescription: string;

  @Input('grade-color') private mColor: string;

  private mCounter = 0;

  constructor() { }

  ngOnInit() { }

  get name() {
    return this.mName;
  }

  get description() {
    return this.mDescription;
  }

  get color() {
    return this.mColor;
  }

  countDown() {
    console.log(this.mCounter);
    if (this.mCounter > 0) {
      this.mCounter--;
    }
  }

  countUp() {
    this.mCounter++;
  }

  get counter(): number {
    return this.mCounter;
  }

}
