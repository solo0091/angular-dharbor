import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { MovieModule } from './movie/movie.module';
import { TestBindingComponent } from './test-binding/test-binding.component';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TestBindingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    MovieModule,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }


/*
declarations: TEMPLATE_DRIVEN_DIRECTIVES,
providers: [RadioControlRegistry],
exports: [InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]*/