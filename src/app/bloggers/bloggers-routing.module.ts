import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloggersComponent } from './bloggers.component';

const routes: Routes = [
  {
    path: '',
    component: BloggersComponent,
    data: {
      title: 'Blogger Principal'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BloggerRoutingModule {
}
