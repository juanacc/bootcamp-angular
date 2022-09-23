import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { TemplateDriveFormComponent } from "./template-drive-form/template-drive-form.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'template', component: TemplateDriveFormComponent },
    { path: 'reactive', component: ReactiveFormComponent },
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRountingModule { }