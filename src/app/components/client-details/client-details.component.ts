import { Client } from './../../models/client';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-client',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  myClient: Client = {
    id: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    balance: 0,
    contact: {},
    subscribe: false

  }

  constructor(private clientService: ClientService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.clientService.getClient(id)
                      .subscribe((res: Client) => {
                        this.myClient = res;
                        this.myClient.id = id;
                      })
  }

  

}
