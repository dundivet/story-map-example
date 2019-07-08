import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { ExampleComponent } from './example/example.component';

const routes: Routes = [
  { path: '', component: BasicComponent },
  { path: 'example', component: ExampleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
