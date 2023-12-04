import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { HomePageComponent } from './helpers/home/home-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
    CardListComponent,
    CardComponent,
    SearchBoxComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class GifsModule { }
