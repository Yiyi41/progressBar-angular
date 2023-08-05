import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProgressBarService {
  public progress: number = 0;
  public backgroundColor: string = 'green';

  // public currentStyles = {
  //   width: this.progress + '%',
  //   'background-color': this.backgroundColor,
  // };

  public get _progress(): number {
    return this.progress;
  }

  public set _progress(newProgress: number) {
    this.progress = newProgress;
    this.changeBarColor();
  }

  addPercent(percentToAdd: number) {
    this.progress += percentToAdd;
    if (this.progress > 100) this.progress = 100;
    this.changeBarColor();
    return this.progress;
  }

  resetAll() {
    return (this.progress = 0);
  }

  changeBarColor() {
    if (this.progress >= 0 && this.progress < 25) {
      this.backgroundColor = '#7160E8';
    } else if (this.progress >= 25 && this.progress < 50) {
      this.backgroundColor = '#60ADE8';
    } else if (this.progress >= 50 && this.progress < 75) {
      this.backgroundColor = '#60E8B6';
    } else if (this.progress >= 75 && this.progress <= 100) {
      this.backgroundColor = '#30DB63';
    }
    console.log(this.backgroundColor);
    //return this.backgroundColor;
  }

  constructor() {}
}
