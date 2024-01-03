import { NgModule } from '@angular/core';
import { CounterComponent} from './components/counter/counter.component';
import { MainPageComponent } from '../dbz/pages/main-page.component';


@NgModule({
  declarations: [CounterComponent],
  exports:[ CounterComponent]
})
export class CounterModule { }
