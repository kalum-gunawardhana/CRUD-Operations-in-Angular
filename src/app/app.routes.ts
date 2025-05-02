import { Routes } from '@angular/router';
import { TabBarComponent } from './components/tab-bar/tab-bar.component';
import { AddCusComponent } from './components/add-cus/add-cus.component';
import { SearchCusComponent } from './components/search-cus/search-cus.component';
import { UpdateCusComponent } from './components/update-cus/update-cus.component';
import { ViewCusComponent } from './components/view-cus/view-cus.component';

export const routes: Routes = [
    { path: '', component: TabBarComponent },
    { path: 'add', component: AddCusComponent },
    { path: 'search', component: SearchCusComponent },
    { path: 'update', component: UpdateCusComponent },
    { path: 'view', component: ViewCusComponent }
];
