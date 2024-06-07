import { Routes } from "@angular/router";

const shoppingRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'recipes' },
    {
        path: 'recipes',
        loadChildren: () =>
            import('../recipes/route/route.config')
                .then(m => m.default)
    },
    {
        path: 'shopping',
        loadChildren: () =>
            import('../shopping-list/route/route.config')
                .then(m => m.default)
    },
    { path: '**', redirectTo: 'recipes' }
]


export default shoppingRoutes;