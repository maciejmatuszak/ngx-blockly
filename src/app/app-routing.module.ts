import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BasicDemoComponent } from './demos/basic-demo/basic-demo.component';

const routes: Routes = [
    {
        path: 'basic',
        component: BasicDemoComponent
    },
    {
        path: '',
        component: AppComponent,
    },
    {
        path: '**',
        component: AppComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
