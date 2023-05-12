import { Component, OnInit } from '@angular/core';
import { contactSchema } from 'src/models/contactSchema';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
   contact:contactSchema={}
   groups:any=[]


   constructor (private api:ApiService,private addContactRouter:Router){
    this.contact.groupId ="select A group"
   }
   ngOnInit(): void {
     this.api.getGroups().subscribe({
      next:(response:any)=>{
        console.log(response);
        this.groups = response
      },
      error:(err:any)=>{
        console.log(err.message);
        
      }
     })
   }
   addContact(contact:contactSchema){
    // call api im sevice
    this.api.addContact(contact).subscribe({
      // data added into service
      next:(response:any)=>{
        console.log(response);
        // navigate to all contacts
        this.addContactRouter.navigateByUrl('')
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
    
   }

}


