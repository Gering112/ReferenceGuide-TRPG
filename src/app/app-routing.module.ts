import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeaponListComponent } from './weapons/weapon-list/weapon-list.component';
import { HomeComponent } from './home/home.component';
import { ArmorListComponent } from './armor/armor-list/armor-list.component';
import { WeaponDetailComponent } from './weapons/weapon-detail/weapon-detail.component';


const routes: Routes = [ 
  { path: '', component: HomeComponent },
  { path: 'weapons', component: WeaponListComponent},
  { path: 'weapons/:id', component: WeaponDetailComponent},
  { path: 'armors', component: ArmorListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
