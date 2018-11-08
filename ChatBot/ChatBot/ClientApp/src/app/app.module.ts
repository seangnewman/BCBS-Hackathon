import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageSystemComponent } from './message-system/message-system.component';
import { PlanSelectorComponent } from './plan-selector/plan-selector.component';
import { PpoBotComponent } from './ppo-bot/ppo-bot.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageSystemComponent,
    PlanSelectorComponent,
    PpoBotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
