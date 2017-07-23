import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app/app.component'
import { AccountComponent } from './components/account/account.component';
import { NewAccountComponent } from './components/new-account/new-account.component';

export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        AccountComponent,
        NewAccountComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ]
};
