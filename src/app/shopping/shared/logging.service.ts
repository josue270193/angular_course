import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class LoggingService {

    logToStatusChanged(status: string) {
        console.log('A server status changed. Status: ' + status);
    }
}