import { HomeComponent } from './home';
import { TestPageComponent } from './testpage';
import { DashboardComponent } from './dashboard';
import { ProjectMainComponent } from './project-main';
import { AdministrationMainComponent } from './administration-main';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: DashboardComponent  },
  { path: 'dashboard', component: DashboardComponent  },
  { path: 'project', component: ProjectMainComponent  },
  { path: 'administration', component: AdministrationMainComponent  },
  { path: 'material', component: HomeComponent  },
  { path: 'test', component: TestPageComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class MkTestManagerRoutingModule {
};
