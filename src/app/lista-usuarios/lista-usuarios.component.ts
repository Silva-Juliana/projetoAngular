import { HttpClient } from '@angular/common/http';
import { Component , OnInit } from '@angular/core';


@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  constructor(private http: HttpClient) { }

  users:any = []
  selectedUser:any = {}

  ngOnInit(): void {
    this.http.get('https://www.mocky.io/v2/5d531c4f2e0000620081ddce').toPromise().then((usuarios) => {
      
    this.users = usuarios
    })
  }

  initialPay(usr: string) {
    this.selectedUser = usr;
  }

  fecharModal(e: boolean){
    this.selectedUser = {}
  }
}
