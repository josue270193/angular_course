import { Routes } from "@angular/router"
import { RecipesComponent } from "../recipes.component";
import { RecipeStartComponent } from "../recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "../recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "../recipe-edit/recipe-edit.component";

const recipeRoutes: Routes = [
    {
        path: '', component: RecipesComponent,
        children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecipeEditComponent },
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: RecipeEditComponent },
        ]
    },
    { path: '**', redirectTo: '' }
]

export default recipeRoutes;