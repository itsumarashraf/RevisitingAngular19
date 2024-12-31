import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// In a real world application, the ActorsService would be responsible for making an HTTP 
// request to the actor database to check if the role is available. From the validator's
//  point of view, the actual implementation of the service is not important, so the example can 
//  just code against the ActorsService interface.

// @Injectable({providedIn: 'root'})
export interface ActorService {

  isRoleTaken: (role:string)=> Observable<boolean>
}

@Injectable({providedIn: 'root'})
export class ActorServiceImp implements ActorService{
  isRoleTaken(role: string){
    return['umar','admin','root','password'].includes(role.toLowerCase()) ? of(true) :of(false)
  }
}
