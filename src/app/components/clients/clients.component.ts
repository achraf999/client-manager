import { AuthClientService } from './../../services/auth-client.service';
import { Client } from './../../models/client';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  search = '';
  total: number = 0;
  clients: Client[] = [];
  searchClients: Client[] = [];
  constructor(private clientService: ClientService, private authService: AuthClientService) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth =>
      {
        this.clientService.getClients(auth.uid)
        .subscribe((res: Client[]) => {
          this.searchClients = this.clients = res
          this.totalBalance();
        })
      })
  }

  

  

  toggleActive(client) {
    this.clientService.toggleActiveClient(client)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }


  removeClient(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) 
      {
        this.clientService.deleteClient(id)
        .then(res => console.log(res))
        .catch(err => console.error(err))
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

  }

  totalBalance() {
    this.total = this.clients.reduce((total, client) => {
      return total + client.balance;
    }, 0);
  }



  searchClient() {

    if (this.search != '') {
      this.searchClients = this.clients.filter(client => client.firstName.toLowerCase().includes(this.search.toLowerCase()) 
      || client.lastName.toLowerCase().includes(this.search.toLowerCase()) 
      || client.email.toLowerCase().includes(this.search.toLowerCase()))
    } else {
      this.searchClients = this.clients;
    }
  }

}
