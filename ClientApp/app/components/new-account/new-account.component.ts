import { Component } from '@angular/core';

import { AccountsService } from '../../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //No se provee el AccountsService, ni el LoggingService aca porque no queremos otra instancia,
  //queremos el mismo que viene instanciado del app.module
  //providers: [AccountsService, LoggingService]
})
export class NewAccountComponent {

    constructor(private accountsService: AccountsService) {

    }

  onCreateAccount(accountName: string, accountStatus: string) {
      this.accountsService.addAccount(accountName, accountStatus);
  }
}
