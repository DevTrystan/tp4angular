import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCardComponent } from './Pages/product-card/product-card.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { ProductPageComponent } from './Pages/product-page/product-page.component';



const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomePageComponent},
  {path: 'products', component : ProductPageComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
