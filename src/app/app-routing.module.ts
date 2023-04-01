import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProcessoComponent} from './component/processo/processo.component';
import { ViewerprocessoComponent } from './component/viewerprocesso/viewerprocesso.component';
import { ShowprocessoComponent} from './component/showprocesso/showprocesso.component';
import { SearchprocessoComponent} from './component/searchprocesso/searchprocesso.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

const routes: Routes = [
{path: '', redirectTo:'/processo/admin', pathMatch: 'full'},
{path: 'processo/admin', component: ProcessoComponent},
{path: 'processo/search', component: SearchprocessoComponent},
{path: 'processo/viewer', component:  ViewerprocessoComponent},
{path: 'processo/show', component: ShowprocessoComponent},
{path: '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
