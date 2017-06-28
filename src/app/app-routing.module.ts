import { ReactiveComponent } from './form/reactive/reactive.component';
import { LayoutComponent } from './layout/layout.component';
import { ClassComponent } from './form/class/class.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {path: '', component: ClassComponent },
  {path: 'reactive.component', component: ReactiveComponent },
  {path: 'class.component', component: ClassComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    useHash: false,
    //preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
