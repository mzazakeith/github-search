import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {SearchComponent} from './search/search.component';


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path 'home', component: ProfileComponent},
    {path: 'search', component: SearchComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }