import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resultform',
  templateUrl: './resultform.component.html',
  styleUrls: ['./resultform.component.scss'],
})
export class ResultFormComponent {
  @Input() resultvariable: { input1: string; input2: string } | null = null;
  amount = 123.45;
  company = 'acme corporation';
  purchasedOn = '2024-07-08';
}
