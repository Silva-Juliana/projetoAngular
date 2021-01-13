import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface TransactionPayload {
  // Card Info
  card_number: string;
  cvv: number;
  expiry_date: string;

  // Destination User ID
  destination_user_id: number;

  // Value of the Transaction
  value: number;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  
  @Input()
  selectedUser: any;

  @Output() onCloseModal = new EventEmitter()

  vt:any = "";
  cardSelect:any = '1111111111111111'

  constructor(private http: HttpClient) { }
  
  cards:any = [
    // valid card
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
    },
    // invalid card
    {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20',
    },
  ];


  ngOnInit(): void {
  }
  
  closeModal(response:any = {status: 'cancel'}) {
    this.vt=""
    this.cardSelect=this.cards[0].card_number
    this.onCloseModal.emit(response)
  }

  makeTransaction(){

    let cardFull=this.cards.filter((card:any) => {
      if (card.card_number == this.cardSelect) {
        return true
      }
      return false
    })[0];

    let transaction:TransactionPayload= {

      card_number:this.cardSelect,
      destination_user_id:this.selectedUser.id,
      value:parseFloat(this.vt.replace(',', '.')),
      cvv:cardFull.cvv,
      expiry_date:cardFull.expiry_date,

    }
    this.http.post('https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989', transaction).toPromise().then((response)=> {
      this.closeModal(response)
    })
  }

}
