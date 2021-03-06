import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolsByCategoryComponent } from './schools-by-category/schools-by-category.component';
import { SchoolsByNameComponent } from './schools-by-name/schools-by-name.component';
const routes: Routes = [
    {path: 'schools/category', component: SchoolsByCategoryComponent},
    {path: 'schools/name', component: SchoolsByNameComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SchoolRoutingModule {}