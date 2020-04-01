import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainRouteModule } from './main-route/main-route.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialMainModule } from './modules/material-main/material-main.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AlrtSnackComponent } from './commmon/alrt-snack/alrt-snack.component';

@NgModule({
  declarations: [
    AppComponent,
    
    
    
    NavigationComponent,
    AlrtSnackComponent,
    
  ],
  imports: [
    BrowserModule,
    MaterialMainModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MainRouteModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
