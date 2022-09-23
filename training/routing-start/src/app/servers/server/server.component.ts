import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.server = this.serversService.getServer(parseInt(this.route.snapshot.params['id']));
    // console.log('SERVER', this.server.name);
    // this.route.params.subscribe((params: Params) => {
    //   this.server = this.serversService.getServer(parseInt(params['id']));
    // })
    this.route.data.subscribe((data: Data) => {
      this.server = data['server'];
    });
  }

  serverEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' })
  }

}
