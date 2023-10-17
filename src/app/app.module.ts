import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component';
import { BlockWarningComponent } from './block-warning/block-warning.component';
import { BlockSuccessComponent } from './block-success/block-success.component';
import { UsernameComponent } from './username/username.component';
import { LogUserDetail } from './log-user-detail/log-user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockWarningComponent,
    BlockSuccessComponent,
    UsernameComponent,
    LogUserDetail
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
