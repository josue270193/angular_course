import { Routes } from "@angular/router"
import { AssignmentComponent } from "../assignment/assignment.component"
import { ShoppingComponent } from "../shopping/shopping.component"
import { PreviousComponent } from "../previous-component/previous.component";

const appRoutes: Routes = [
    { path: '', component: PreviousComponent },
    { path: 'previous', component: PreviousComponent },
    { path: 'assignment', component: AssignmentComponent },
    { path: 'shopping', component: ShoppingComponent }
]

export default appRoutes;