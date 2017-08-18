
//No se usa Injectable, porque no vamos a inyectarle ningun servicio a LoggingService

//import { Injectable } from '@angular/core';
//@Injectable()

export class LoggingService {
    logStatusChange(status: string) {
        console.log('A server status changed, new status: ' + status);
    }
}
