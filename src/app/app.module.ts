import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductPageComponent } from './Pages/product-page/product-page.component';
import { ProductListComponent } from './Pages/product-list/product-list.component';
import { ProductCardComponent } from './Pages/product-card/product-card.component';
import { HeaderComponent } from './Composant/header/header.component';
import { FooterComponent } from './Composant/footer/footer.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductListComponent,
    ProductCardComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
