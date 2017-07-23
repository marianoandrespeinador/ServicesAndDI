import { Component, Input } from '@angular/core';

import { LoggingService } from '../../logging.service';
import { AccountsService } from '../../accounts.service';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css'],
    //No se provee el AccountsService aca porque no queremos otra instancia, queremos la misma instancia que viene heredada
    providers: [ LoggingService ]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService) {
        
    }

  onSetTo(status: string) {
      this.accountsService.updateStatus(this.id, status);
      this.loggingService.logStatusChance(status);
  }
}
