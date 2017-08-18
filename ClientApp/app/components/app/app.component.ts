import { Component, OnInit } from '@angular/core';

import { AccountsService } from '../../accounts.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //Con la siguiente l�nea, se instanciaria el servicio "AccountsService" para que todos los componentes hijos reciban la misma instancia.
  //providers: [ AccountsService ]
  //SIN EMBARGO, est� instanciado en app.module para asegurarnos de que toda la aplicaci�n reciba la misma instancia.
})
export class AppComponent implements OnInit {
    accounts: {name:string, status:string}[] = [];

    constructor(private accountsService: AccountsService) {        
    }
    
    ngOnInit(): void {
        this.accounts = this.accountsService.accounts;
    }
}
