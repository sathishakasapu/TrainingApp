import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TrainingService } from './training.service';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainingComponent } from './training/training.component';


@NgModule({
  declarations: [
    AppComponent,
    TrainingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,  
    AppRoutingModule
  ],
  providers: [HttpClientModule, TrainingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
