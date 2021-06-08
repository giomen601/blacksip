import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlacksipApiService {

  constructor(private http:HttpClient) { }

  GetCodigoPostal(id:string):Observable<any>{
    return this.http.get<any>(`https://blackisp.herokuapp.com/postalCodes/${id}`);
  }

  Post(data:any){
    return this.http.post('https://blackisp.herokuapp.com/contact', data);
  }

  GetProductos():Observable<any>{
    return this.http.get<any>('https://blackisp.herokuapp.com/products');
  }
}
