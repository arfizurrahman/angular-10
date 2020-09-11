import { PlaceholderDirective } from './shared/placeholder/placeholder.directive';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AuthComponent } from './auth/auth.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AlertComponent } from './shared/alert/alert.component';
import { RecipesModule } from './recipes/recipes.module';
import { ShoppinListModule } from './shopping-list/shopping-list.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RecipesModule,
    ShoppinListModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  // entryComponents: [AlertComponent],
})
export class AppModule {}
