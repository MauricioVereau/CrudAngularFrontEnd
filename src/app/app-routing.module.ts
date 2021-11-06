import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './Components/cliente/cliente.component';

const routes: Routes = [

  { path : '' , redirectTo:'cliente', pathMatch: 'full'},
  { path: 'cliente', component: ClienteComponent},
 /* { path: '**', component: PageNotFoundComponent}*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { 

  
}
