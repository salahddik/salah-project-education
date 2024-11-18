import { Component, Input } from '@angular/core'; // First, import Input

@Component({
  selector: 'app-resultform',
  templateUrl: './resultform.component.html',
  styleUrls: ['./resultform.component.scss'],
})
export class ResultformComponent {
  @Input() item = ''; // decorate the property with @Input()
}
