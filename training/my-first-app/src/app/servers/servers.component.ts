import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styles: [`
    .greater5{
      color: white
    }
  `]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test Server';
  userName = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver2'];
  showSecret = false;
  arrayClicksNumber = [];
  number = 0;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  resetUserName() {
    this.userName = '';
  }

  showSecretPassword() {
    this.showSecret = true;
    this.arrayClicksNumber.push(++this.number);
  }

  getColor() {
    return this.number >= 5 ? 'blue' : '';
  }

}
