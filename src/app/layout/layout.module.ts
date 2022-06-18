import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatMenuModule} from '@angular/material/menu'
import {MatListModule} from '@angular/material/list'


@NgModule({
  declarations: [
    AppNavbarComponent,
    AppHeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    RouterModule,
    MatMenuModule,
    MatListModule
  ]
  ,
  exports: [
    AppHeaderComponent,
    AppNavbarComponent
  ]
})
export class LayoutModule {
  constructor(private _iconRegistry: MatIconRegistry, private _sanitizer: DomSanitizer) {
    this._registerIcon()
  }

  private _registerIcon() {
    this._iconRegistry.addSvgIcon('ic_menu', this._sanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/ic_menu.svg'));
    this._iconRegistry.addSvgIcon('ic_app', this._sanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/ic_app.svg'))
  }
}
