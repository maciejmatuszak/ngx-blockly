import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxBlocklyModule } from 'ngx-blockly';
import { BasicDemoComponent } from './demos/basic-demo/basic-demo.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';

@NgModule({
    declarations: [
        AppComponent,
        BasicDemoComponent
    ],
    imports: [
        AppMaterialModule,
        AppRoutingModule,
        BrowserModule,
        NgxBlocklyModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
