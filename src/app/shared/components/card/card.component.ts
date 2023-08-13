import { Component, Input } from "@angular/core";
import { SharedModule } from "../../shared.module";

@Component({
  selector: "app-card",
  standalone: true,
  imports: [SharedModule],
  template: `
    <div [class]="className">
      <mat-card class="example-card">
        <mat-card-header>
          <ng-content select="[card-header]"></ng-content>
        </mat-card-header>
        <mat-card-content>
          <ng-content select="[card-content]"></ng-content>
        </mat-card-content>
        <mat-card-actions>
          <ng-content select="[card-actions]"></ng-content>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: [],
})
export default class CardComponent {
  @Input() className: string = ''
}
