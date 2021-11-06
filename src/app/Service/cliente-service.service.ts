import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../Models/cliente';

const baseUrl='http://localhost:8080/rest/cliente'

@Injectable({
  providedIn: 'root'
})
export class ClienteService{

  constructor(private http: HttpClient ) { }

  listaCliente(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(baseUrl+"/listaCliente");
  }

  registraCliente(data:Cliente) : Observable<Cliente>{
    return this.http.post(baseUrl+'/registraCliente',data);
  }

  eliminar(id: number) {
    const url = `${baseUrl}/${id}`;
    return this.http.delete(url);
  }

}
