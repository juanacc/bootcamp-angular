import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //serverElements = [{ type: 'server', name: 'Testserver', content: 'Just a test!' }];
  serverElements = [];
  oddNumbers = [];
  evenNumbers = [];

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }

  onStart(numberEmited: number) {
    //console.log(numberEmited);
    numberEmited % 2 === 0 ? this.evenNumbers.push(numberEmited) : this.oddNumbers.push(numberEmited);
  }
}
