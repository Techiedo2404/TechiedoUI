import { Routes } from '@angular/router';
import {DynMatTableComponent} from "./shared/components/dyn-mat-table/dyn-mat-table.component";

export const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DynMatTableComponent },

];
