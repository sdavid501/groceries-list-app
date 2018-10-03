import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home',      component: HomeComponent }
];

// export const RouteRoutes = RouterModule.forChild(routes);
