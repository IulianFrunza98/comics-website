import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { ContactComponent } from './Components/contact/contact.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { AboutComponent } from './Components/about/about.component';
import { HomeComponent } from './Components/home/home.component';
import { SearchComponent } from './Components/search/search.component';
import { CookiesComponent } from './Components/cookies/cookies.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ComicPageComponent } from './Components/comic-page/comic-page.component';
import { CartPageComponent } from './Components/cart-page/cart-page.component';
import { ComicsByCategoryComponent } from './Components/comics-by-category/comics-by-category.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './Components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContactComponent,
    CategoriesComponent,
    AboutComponent,
    HomeComponent,
    SearchComponent,
    CookiesComponent,
    FooterComponent,
    ComicPageComponent,
    CartPageComponent,
    ComicsByCategoryComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
