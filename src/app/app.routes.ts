import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from "./pages/index/index.component";

const routes: Routes = [
  { path: 'home', component: IndexComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash:true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }