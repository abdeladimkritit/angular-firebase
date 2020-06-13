import { Component, OnInit } from '@angular/core';
import { Client } from './../../models/client';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientService } from './../../services/client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  id:string;
  client : Client= {
    firstname : '',
    lastname : '',
    phone : null,
    email:'',
    balance : null
  };

  constructor(private clientService:ClientService, private route : ActivatedRoute , private flash : FlashMessagesService, private router : Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
      this.clientService.getClient(this.id).subscribe((client)=>{
        this.client = client;
        console.log(client);
        
      });
  }

  onSubmit(){
    this.client.id = this.id;
    this.clientService.updateClient(this.client);
    this.flash.show('Client updated',{cssClass : 'alert-success' , timeout : 4000});
    this.router.navigate(['/client/',this.id]);
  }

}
