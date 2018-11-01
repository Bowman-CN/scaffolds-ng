import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

//3rd-party
import { Routes, RouterModule } from '@angular/router';
import { SampleComponent } from './components/sample/sample.component';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { CookieService } from 'ngx-cookie-service';
//proj

registerLocaleData(zh);

const routes: Routes = [{
  path: '',
  children: [
    // route sample
    { path: 'sample', component: SampleComponent },
    { path: 'dash', component: DashboardComponent },
    { path: '', redirectTo: '/dash', pathMatch: 'full' }
    //{ path: '<path>', component: <refer to component>, canActivate: [<route guard service, if needed>] }

  ]
}]

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }