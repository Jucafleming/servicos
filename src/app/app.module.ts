
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CursosServices } from './cursos/cursos.service';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { CursosModule } from './cursos/cursos.module';
import { LogService } from './log.service';




@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CriarCursoModule,
    CursosModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
