import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class CounterService {

    private _countActiveUser = 0;
    private _countInactiveUser = 0;

    constructor() {

    }

    public get countActiveUser() {
        return this._countActiveUser;
    }

    public get countInactiveUser() {
        return this._countInactiveUser;
    }

    public updateCountActiveBy1() {
        this._countActiveUser++;
        this._countInactiveUser--;
    }

    public updateCountInactiveBy1() {
        this._countActiveUser--;
        this._countInactiveUser++;
    }
}