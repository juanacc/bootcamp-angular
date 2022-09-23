import { Component } from '@angular/core';
import { AccountService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService],
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService, private accountsService: AccountService) {
    this.accountsService.statusUpdated.subscribe((status: string) => alert('New Status: ' + status));
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    const account = {
      name: accountName,
      status: accountStatus
    }
    this.accountsService.addAccount(account);
    //this.loggingService.logStatusChange(accountStatus);
  }
}
