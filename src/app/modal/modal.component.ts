import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  
  @Input()
  selectedUser: any;

  @Output() onCloseModal = new EventEmitter<boolean>()

  constructor(private http: HttpClient) { }
  
  card = '1111';
  cards = [
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

 validate:any = [] 

  ngOnInit(): void {
  }

validacao(){
  const digits = this.card.match(/\d{4}/);
  const currentCard = this.cards.find((value) => value.card_number.slice(-4) === digits![0]);
    return this.http.post('https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989', {

      card_number: currentCard?.card_number,
      cvv: currentCard?.cvv,
      expiry_date: currentCard?.expiry_date ,

    }).toPromise().then((validacao:any) => {
      
      this.validate = validacao
    })
}

  closeModal() {
    this.onCloseModal.emit(true)
  }

  selectCard(card: any) {
    this.card = card.target.value;
  }
}
