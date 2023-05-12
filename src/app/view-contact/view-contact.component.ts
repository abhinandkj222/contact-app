import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
contacts:any={}
errorMsg:string=''
group:any={}
 constructor(private api:ApiService,private viewRouter:ActivatedRoute){

 }
 ngOnInit(): void{
  // to get contacts id from its url
  this.viewRouter.params.subscribe((data:any)=>{
    const {id} =data
    console.log(id);
    // api call to get a particular contacts details
 this.api.viewContact(id).subscribe({
  next:(response:any)=>{
    console.log(response);
    const {groupid}= response
    this.api.getGroup(groupid).subscribe((data:any)=>{
      console.log(data);
      const {name} = data
      this.group =name
    })
    this.contacts=response
  },
  error:(err:any)=>{
    console.log(err.message);
    this.errorMsg=err.message
    
  }
 })
    
  })
 
 }
}
