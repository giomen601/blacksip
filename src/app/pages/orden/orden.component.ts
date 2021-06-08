import { Component, OnInit } from '@angular/core';

import { BlacksipApiService } from '../../services/blacksip-api.service';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent implements OnInit {
  datas
  constructor(private api:BlacksipApiService) { }

  ngOnInit(): void {
    this.api.GetProductos().subscribe( resp => {
      console.log(resp);
      this.datas = resp;
    })
  }

}
