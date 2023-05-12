import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { contactSchema } from 'src/models/contactSchema';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   BASE_URL='https://contact-app-u5pp.onrender.com'    
  constructor(private http:HttpClient) { }

// handle error
handleError(error:HttpErrorResponse){
  let errorMsg:string=''
  // errorMsg =`Error: ${error.message}`
  if(error.error){
    // client arror
    errorMsg =`Error: ${error.error.message}`
  }
  else{
    errorMsg =`status: ${error.status} \n Error: ${error.message}`
  }
  return throwError(()=>errorMsg)

}


  // get all conatcts api
  getAllContacts(){
    // api call=http://localhost:3000/contacts req:get 
   return this.http.get(`${this.BASE_URL}/contacts`)
  }
  viewContact(id:any){
       // api call=http://localhost:3000/contacts/id req:get 
       return this.http.get(`${this.BASE_URL}/contacts/${id}`)

  }
  // geta particular groip
  getGroup(id:any){
       // api call=http://localhost:3000/group/id req:get 

    return this.http.get(`${this.BASE_URL}/groups/${id}`)

  }
  // getall groups
  getGroups(){
    // api call-http://localhost:3000/groups
    return this.http.get(`${this.BASE_URL}/groups`)
  }
// add contact
addContact(contact:contactSchema){
  // api call
  return this.http.post(`${this.BASE_URL}/contacts`,contact)
}
// delete contact
deleteContact(id:any){
 return this.http.delete(`${this.BASE_URL}/contacts/${id}`)
}
// edit a contact
editContact(id:any,contact:contactSchema){
// api call
return this.http.put(`${this.BASE_URL}/contacts/${id}`,contact)
}

}
