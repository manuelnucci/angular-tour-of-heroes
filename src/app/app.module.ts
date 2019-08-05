import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
    declarations: [AppComponent, HeroesComponent, HeroDetailComponent],
    imports: [BrowserModule, AppRoutingModule, FormsModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
