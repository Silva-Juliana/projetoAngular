import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './modal/modal.component';
import { ShowLastDigitsPipe } from './show-last-digits.pipe';
import { ModalReceiptComponent } from './modal-receipt/modal-receipt.component'
import { FormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask'
@NgModule({
  declarations: [
    AppComponent,
    ListaUsuariosComponent,
    ModalComponent,
    ShowLastDigitsPipe,
    ModalReceiptComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[ ShowLastDigitsPipe]
})
export class AppModule { }
