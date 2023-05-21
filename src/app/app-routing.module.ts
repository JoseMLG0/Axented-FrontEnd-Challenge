import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloggersModule } from './bloggers/bloggers.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: '',
    data: {
      title: 'bloggers'
    },
    children: [
      {
        path: 'inicio',
        loadChildren: () =>
          import('./bloggers/bloggers.module').then((m) => m.BloggersModule)
      }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled',
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
