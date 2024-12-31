import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { catchError, delay, map, Observable, of } from "rxjs";
import { ActorService, ActorServiceImp } from "../services/actor.service";

@Injectable({providedIn: 'root'})
export class UniqueRoleValidator implements AsyncValidator{
    constructor(private actorService: ActorServiceImp){}

    validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        return this.actorService.isRoleTaken(control.value).pipe(
            map((isTaken)=> (isTaken ? {uniqueRole:true} : null )), delay(2000) ,catchError(()=> of(null))
        );
    }
}