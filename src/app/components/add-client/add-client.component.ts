import { ClientService } from './../../services/client.service';
import { Client } from './../../models/client';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthClientService } from 'src/app/services/auth-client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  client : Client={
    firstname:"",
    lastname: "",
    email:"",
    phone:null,
    balance:null,
    user:''
  }
  constructor(private authService:AuthClientService, private clientService : ClientService , private route : Router,private flash : FlashMessagesService) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth=>{
       this.client.user = auth.uid;
    })
  }
  onSubmit(){
    this.clientService.newClient(this.client);
    this.flash.show('Client added Successfully',{ cssClass : 'alert-success' ,timeout : 4000 })
    this.route.navigate(['/']);
  }
}
