import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  // { path: "", pathMatch: "full" },
  {
    path: "",
    pathMatch: "full",
    loadChildren: () => import("./pre-login/pre-login.module")
      .then(m => m.PreLoginModule),
  },
  { path: "*", redirectTo: "/", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
