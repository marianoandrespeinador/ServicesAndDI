import { Component } from '@angular/core';
import { LoggingService } from '../../logging.service';

import { AccountsService } from '../../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //No se provee el AccountsService aca porque no queremos otra instancia, queremos la misma instancia que viene heredada
  providers: [LoggingService]
})
export class NewAccountComponent {

    constructor(private loggingService: LoggingService, private accountsService: AccountsService) {

    }

  onCreateAccount(accountName: string, accountStatus: string) {
      this.accountsService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChance(accountStatus);
  }
}
