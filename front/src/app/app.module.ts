import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { NoConnectedComponent } from './pages/no-connected/no-connected.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { DoubleValidatorComponent } from './components/double-validator/double-validator.component';
import { httpInterceptorProviders } from './http-interceptors';
import { ListComponent } from './components/list/list.component';
import { EditElemComponent } from './components/edit-elem/edit-elem.component';
import { FormDialogComponent } from './dialogs/form-dialog/form-dialog.component';
import { InformationDialogComponent } from './dialogs/information-dialog/information-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoConnectedComponent,
    LoginComponent,
    SigninComponent,
    DoubleValidatorComponent,
    ListComponent,
    EditElemComponent,
    FormDialogComponent,
    InformationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [httpInterceptorProviders],
  entryComponents: [
    FormDialogComponent,
    InformationDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
