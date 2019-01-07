import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValuesComponent } from './values/values.component';
import {HttpClientModule} from '@angular/common/http';//اضافه کردیم
   import { from } from 'rxjs';

@NgModule({
   declarations: [
      AppComponent,
      ValuesComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule //اضافه کردیم
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
