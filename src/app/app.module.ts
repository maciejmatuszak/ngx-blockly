import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxBlocklyModule } from '../../projects/ngx-blockly/src/lib/ngx-blockly.module';
import { BasicDemoComponent } from './demos/basic-demo/basic-demo.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
