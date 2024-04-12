import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectOptionsComponent } from './components/select-options/select-options.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';

const routes: Routes = [
  {
    path: '',
    component: SelectOptionsComponent,
  },
  {
    path: 'tutorial',
    component: TutorialComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
