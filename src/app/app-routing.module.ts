import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './Components/contact/contact.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { AboutComponent } from './Components/about/about.component';
import { HomeComponent } from './Components/home/home.component';
import { ComicPageComponent } from './Components/comic-page/comic-page.component';
import { CartPageComponent } from './Components/cart-page/cart-page.component';
import { ComicsByCategoryComponent } from './Components/comics-by-category/comics-by-category.component';
import { RegisterComponent } from './Components/register/register.component';



const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "search/:searchTerm", component:HomeComponent},
  {path: "about", component:AboutComponent},
  {path: "categories", component:CategoriesComponent},
  {path: "contact", component:ContactComponent},
  {path: "comic/:id", component:ComicPageComponent},
  {path: "cart-page", component:CartPageComponent},
  {path: 'comics/:category', component: ComicsByCategoryComponent },
  {path: "register", component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
