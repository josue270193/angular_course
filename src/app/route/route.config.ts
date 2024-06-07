import { Routes } from "@angular/router"
import { AssignmentComponent } from "../assignment/assignment.component"
import { ShoppingComponent } from "../shopping/shopping.component"
import { PreviousComponent } from "../previous-component/previous.component";

const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'shopping' },
    { path: 'previous', component: PreviousComponent },
    { path: 'assignment', component: AssignmentComponent },
    {
        path: 'shopping', component: ShoppingComponent,
        loadChildren: () =>
            import('../shopping/route/route.config')
                .then(m => m.default)
    },
    { path: '**', redirectTo: 'shopping' }
]

export default appRoutes;