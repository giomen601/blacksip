import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BlacksipApiService } from '../../services/blacksip-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  MasdeUnaColonia = false;

  data = {
    nombres: '',
    apellidos: '',
    email: '',
    telefono: '',
    postal: '',
    colonia: [],
    region: '',
    ciudad: '',
    municipio: '',
    calle: ''
  }

  constructor(private app:BlacksipApiService) { }

  ngOnInit(): void {
    
  }

  OnSubmit(form:NgForm){
    if(form.invalid){ return; }
    //console.log(this.data.nombres);
    this.app.Post(this.data).subscribe(resp => { 
      console.log(resp);
      
     });
  }

  OnChange(value:string){
    this.app.GetCodigoPostal(value).subscribe(resp => {
      this.data.ciudad = resp.city
      this.data.colonia = resp.colonies;
      this.data.region = resp.state;
      this.data.municipio = resp.town
      //console.log(this.data.colonia);
      //console.log(resp);
      
      
      if(resp.colonies.length <= 1){
        this.MasdeUnaColonia = false;
        
      }else{
        this.MasdeUnaColonia = true;
      }
      
    })
    
  }

}
