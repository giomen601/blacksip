import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-compradetalle',
  templateUrl: './compradetalle.component.html',
  styleUrls: ['./compradetalle.component.css']
})
export class CompradetalleComponent implements OnInit {
  @Input() data;
  constructor() { }

  ngOnInit(): void {
  }

}
