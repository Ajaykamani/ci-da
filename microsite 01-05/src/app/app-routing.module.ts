import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './modules/about-us/about-us.component';


const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./modules/dashboard/dashboard.module').then(mod => mod.DashboardModule)
  // },
  {
    path:'about-us', component:AboutUsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
