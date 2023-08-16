import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './result.component.html',
  styles: [
  ]
})
export class ResultComponent {

}
