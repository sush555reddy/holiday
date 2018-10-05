import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import {GetdataService} from './getdata.service';
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GetdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
