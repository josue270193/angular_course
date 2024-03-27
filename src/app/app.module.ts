import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component';

import { BlockWarningComponent, BlockSuccessComponent, UsernameComponent, LogUserDetail } from './previous-component/previous-component';
import { DatabindingComponent } from './previous-component/databinding/databinding.component';
import { CockpitComponent } from './previous-component/databinding/cockpit/cockpit.component';
import { ServerElementComponent } from './previous-component/databinding/server-element/server-element.component';

import { GameControlComponent } from './assignment/4/game-control/game-control.component';
import { EvenNumberComponent } from './assignment/4/even-number/even-number.component';
import { OddNumberComponent } from './assignment/4/odd-number/odd-number.component';

import { HeaderComponent } from './shopping/header/header.component';
import { RecipesComponent } from './shopping/recipes/recipes.component';
import { RecipeListComponent } from './shopping/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './shopping/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './shopping/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping/shopping-list/shopping-edit/shopping-edit.component';
import { OddListComponent } from './previous-component/odd-list/odd-list.component';
import { BasicHighlightDirective } from './previous-component/odd-list/basic-highlight/basic-hightight.directive';
import { BetterHighlight } from './previous-component/odd-list/better-highlight/better-highlight.directive';
import { UnlessDirective } from './previous-component/unless/unless.directive';
import { DropdownDirective } from './shopping/shared/dropdown.directive';


@NgModule({
  declarations: [
    AppComponent,
    BlockWarningComponent, BlockSuccessComponent, UsernameComponent, LogUserDetail, HeaderComponent,    
    RecipesComponent, RecipeListComponent, RecipeDetailComponent, RecipeItemComponent, ShoppingEditComponent, ShoppingListComponent,     
    DatabindingComponent, CockpitComponent, ServerElementComponent,
    GameControlComponent, EvenNumberComponent, OddNumberComponent,
    OddListComponent, BasicHighlightDirective, BetterHighlight, UnlessDirective,  
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
