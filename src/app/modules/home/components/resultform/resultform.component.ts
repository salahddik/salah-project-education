import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resultform',
  templateUrl: './resultform.component.html',
  styleUrls: ['./resultform.component.scss'],
})
export class ResultFormComponent {
  elementshtow = '';
  number = 8945;
  text = 'hello world';

  @Input() resultvariable: { input1: string; input2: string } | null = null;
}
