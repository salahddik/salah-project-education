import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resultform',
  templateUrl: './resultform.component.html',
  styleUrls: ['./resultform.component.scss'],
})
export class ResultFormComponent {
  elementshtow = '';

  @Input() resultvariable: { input1: string; input2: string } | null = null;
}
