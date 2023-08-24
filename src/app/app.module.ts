import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { NoPageFoundComponent } from './pages/no-page-found/no-page-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

@NgModule({
    declarations:[  
        AppComponent, 
        LoginComponent, 
        NoPageFoundComponent, 
        DashboardComponent, 
        BreadcrumbsComponent, 
        SidebarComponent,
    ],
    imports:[
        BrowserModule
    ],
    providers:[],

    bootstrap:[AppComponent]
})

export class AppModule{ }