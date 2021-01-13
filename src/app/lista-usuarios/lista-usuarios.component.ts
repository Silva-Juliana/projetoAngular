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
  showMessege:boolean = false
  message:string = ''

  toggleMessege(){
    this.showMessege = !this.showMessege
  }

  ngOnInit(): void {
    this.http.get('https://www.mocky.io/v2/5d531c4f2e0000620081ddce').toPromise().then((usuarios) => {
      
    this.users = usuarios
    })
  }

  initialPay(usr: string) {
    this.selectedUser = usr;
  }

  fecharModal(response:any){
    console.log(response)

    if(!response || !response.status) {
      this.message = 'O pagamento <strong> não </strong> foi concluido com sucesso'
      this.toggleMessege()
      return
    }
    switch (response.status) {
      case 'cancel':
        break;
      case 'Aprovada':
        this.message = 'O pagamento foi concluido com sucesso'
        this.toggleMessege()
        break;
        default:
        this.message = 'O pagamento <strong> não </strong> foi concluido com sucesso'
        this.toggleMessege()
        break;
    }

    this.selectedUser = {}
  }
}
