import { Component, Input } from '@angular/core';

import { AccountsService } from '../../accounts.service';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css'],
    //No se provee el AccountsService, aca porque no queremos otra instancia, queremos la misma instancia que viene del app.module
    //providers: [ AccountsService ]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private accountsService: AccountsService) {
        
    }

  onSetTo(status: string) {
      this.accountsService.updateStatus(this.id, status);
  }
}
