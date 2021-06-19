import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MenuTemplateComponent } from './components/menu-template/menu-template.component';
import { PokePageComponent } from './components/poke-page/poke-page.component';

const routes: Routes = [
  {
    path: '',
    component: MenuTemplateComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'pokepage',
        component: PokePageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
