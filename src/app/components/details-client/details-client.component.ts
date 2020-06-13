import { Client } from './../../models/client';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientService } from './../../services/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-details-client',
  templateUrl: './details-client.component.html',
  styleUrls: ['./details-client.component.css']
})
export class DetailsClientComponent implements OnInit {
  id:string;
  client : Client= {
    firstname : '',
    lastname : '',
    phone : null,
    email:''
  };
  showBalance : boolean = false;
  constructor(private clientService:ClientService, private route : ActivatedRoute , private flash : FlashMessagesService,private router :Router) { }

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
      this.flash.show('balance updated',{cssClass : 'alert-warning', timeout : 4000})
    }


    deleteClient(id : string){
      Swal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this imaginary file!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.clientService.deleteClient(id);
          this.flash.show('client deleted',{cssClass : 'alert-warning', timeout : 4000});
          this.router.navigate(['/'])
          Swal.fire(
            'Deleted!',
            'Your imaginary file has been deleted.',
            'success'
          )
        
        }
      })
      
    }

  }
