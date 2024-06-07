import { Routes } from "@angular/router";
import { ShoppingListComponent } from "../shopping-list.component";

const shoppingRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'list' },
    { path: 'list', component: ShoppingListComponent },
    { path: '**', redirectTo: 'list' },
];

export default shoppingRoutes;