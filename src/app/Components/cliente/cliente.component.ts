import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/Models/cliente';
import { ClienteService } from '../../Service/cliente-service.service';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {


  clientes : Cliente[] = [];

cliente: Cliente = {
};

  constructor(private clienteService: ClienteService) { 
    this.listarClientes();
  }

  listarClientes(){
    this.clienteService.listaCliente().subscribe(
      (clientes)=> this.clientes = clientes
    );
  }


  registraCliente(){
    console.log(this.cliente);
    this.clienteService.registraCliente(this.cliente).subscribe(
      response => {
        this.listarClientes();
        alert(response);
      },
      error => {
        console.log(error);
      }
    );

  }

  ngOnInit(): void {
    
  }

  eliminar(id?: number){
    this.clienteService.eliminar(id!).subscribe(
      resp => {
        this.listarClientes();
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('complete!');
      }
    )
  }

}
