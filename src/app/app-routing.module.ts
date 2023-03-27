import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';





const routes: Routes = [

{path: '', redirectTo:'/processo/admin', pathMatch: 'full'},
{path: 'processo/admin', component: ProcessoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
