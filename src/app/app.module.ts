import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AssignmentComponent } from "./assignment/assignment.component";
import { ShoppingComponent } from './shopping/shopping.component';
import { RouterModule } from '@angular/router';
import appRoutes from './route/route.config';
import { PreviousComponent } from './previous-component/previous.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        NgbModule,
        RouterModule.forRoot(appRoutes),        
        AssignmentComponent,
        ShoppingComponent,
        PreviousComponent
    ]
})
export class AppModule { }
