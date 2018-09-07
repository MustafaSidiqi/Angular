import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template:  `

  <div *ngIf="display; then thenBlock; else elseBlock"></div>

  <ng-template #thenBlock>
    <h2>
      Welcome {{name}}
    </h2>
  </ng-template>

  <ng-template #elseBlock>
    <h2>
      Name is hidden
    </h2>
  </ng-template>

  <h2 [class]="successClass">
  {{name.length}}
  </h2>
  <input [(ngModel)]="name" type="test">
  <button (click)="onClick(input.value)">Greet</button>
  {{name}}
  `,
  styles: [`
  .text-success {
    color: green;
  }
  .text-danger {
    color: red;
  }
  .text-special {
    font-style: italic;
  }
  `]
})
export class TestComponent implements OnInit {
  public name = "";
  public display = false;
  public successClass = "text-danger";
  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return "Hello " + this.name;
  }

  onClick(input) {
    console.log(input);
  }

}
