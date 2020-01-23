import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';


import {HttpClientModule} from '@angular/common/http';
import {ClarityModule} from '@clr/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AgGridModule} from 'ag-grid-angular';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {ArticlesPageComponent} from './articles-page/articles-page.component';
import {SharedModule} from './shared/shared.module';
import { TagsPageComponent } from './tags-page/tags-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
@NgModule({
    declarations: [
        AppComponent,
        MainLayoutComponent,
        ArticlesPageComponent,
        TagsPageComponent
    ],
    imports: [
        BrowserModule,
        AgGridModule.withComponents([]),
        HttpClientModule,
        ClarityModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
