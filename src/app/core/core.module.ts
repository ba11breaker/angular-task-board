import { NgModule, SkipSelf, Optional } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent,
  ],
  imports: [
    SharedModule,
    BrowserAnimationsModule,
  ],
  exports: [
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent,
  ],
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parent: CoreModule
    ) {
    if (parent) {
      throw new Error('Module exits, could not reload it! ');
    }
  }
 }
