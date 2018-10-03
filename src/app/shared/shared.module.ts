import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { numberPipe } from './pipes/number.pipe';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MiddleComponent } from './components/middle/middle.component';
import { BodyComponent } from './components/body/body.component';
import { TranslatePipe } from './pipes/translate/translate.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    numberPipe,
    HeaderComponent,
    FooterComponent,
    MiddleComponent,
    BodyComponent,
    TranslatePipe
  ],
  exports: [
    numberPipe,
    HeaderComponent,
    FooterComponent,
    MiddleComponent,
    BodyComponent
  ],
  providers: [
    TranslatePipe
  ]
})
export class SharedModule { }
