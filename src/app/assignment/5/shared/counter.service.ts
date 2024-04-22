import { EventEmitter, Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class CounterService {

    private _countActiveUser = 0;
    private _countInactiveUser = 0;
    eventCountActiveUser = new EventEmitter<number>();
    eventCountInactiveUser = new EventEmitter<number>();

    constructor() {
        
    }

    public get countActiveUser() {
        console.log('this._countActiveUser: ', this._countActiveUser);
        return this._countActiveUser;
    }

    public get countInactiveUser() {
        console.log('this._countInactiveUser: ', this._countInactiveUser);
        return this._countInactiveUser;
    }

    public updateCountActiveBy1() {
        this._countActiveUser++;
        this.eventCountActiveUser.emit(this._countActiveUser);
    }

    public updateCountInactiveBy1() {        
        this._countInactiveUser++;
        this.eventCountInactiveUser.emit(this._countInactiveUser);
    }
}