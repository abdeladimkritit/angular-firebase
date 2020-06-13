import { Client } from './../../models/client';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { AuthClientService } from 'src/app/services/auth-client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients : Client[];
  total : number = 0;
  searchClient : Client[];
  constructor(private clientService : ClientService ,private authService : AuthClientService) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth=>{
      this.clientService.getClients(auth.uid).subscribe((resp)=>{
        this.searchClient=this.clients = resp;
        this.total = this.getTotal();
        
      })
    })
    
  }
  search(query : string){
    this.searchClient= (query) ? this.clients.filter(client => client.firstname.toLowerCase().includes(query.toLowerCase()) ||
     client.lastname.toLowerCase().includes(query.toLowerCase())  ) :this.clients;
  }

  getTotal(){
    return this.clients.reduce((total:number , client)=>{
      
      let x = +client.balance;
      return total +  x;
    }, 0)
  }

}
