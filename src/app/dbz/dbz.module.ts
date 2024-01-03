import { NgModule } from '@angular/core';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponentDbz } from './components/list/list.component';
import { CommonModule } from '@angular/common';
import { AgregarPersonajeComponent } from './components/agregar-personaje/agregar-personaje.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainPageComponent,
    ListComponentDbz,
    AgregarPersonajeComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
})
export class DbzModule { }
