import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './interceptor/auth.interceptor';
import {XhrInterceptor} from './interceptor/xhr.interceptor';

const httpInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true},
];

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    httpInterceptorProviders
  ]
})
export class CoreModule {
}
