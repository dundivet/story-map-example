import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatIconModule, MatButtonModule } from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BasicComponent } from './basic/basic.component';
import { ExampleComponent } from './example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    DragDropModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
