import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    //{ path: 'home', component: AppComponent },
    //https://stackoverflow.com/questions/70313032/type-string-is-not-assignable-to-type-loadchildrencallback
    { path: 'recipes', loadChildren: () => import('./recipes/recipes.module').then(x => x.RecipesModule) },
    { path: 'shopping-list', loadChildren: () => import('./shopping-list/shopping-list.module').then(x => x.ShoppingListModule) },
    { path: 'auth', loadChildren: () => import('./auth/authModule').then(x => x.AuthModule) },
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}