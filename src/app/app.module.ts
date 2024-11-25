import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarModule } from './layout/navbar/navbar.module';
import { footerModule } from './layout/footer/footer.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent, // Declare AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NavbarModule,
    footerModule,
  ],
  providers: [provideClientHydration(), provideAnimationsAsync('noop'), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
