import { NgModule } from '@angular/core';
import {ResolveFn, RouterModule, Routes} from '@angular/router';
import {FirstPageComponent} from "./page/first-page/first-page.component";
import {TodoListPageComponent} from "./page/TodoListPage/todo-list-page.component";
import {NotFoundPageComponent} from "./page/not-found-page/not-found-page.component";
import {ChildAComponent} from "./page/child-a/child-a.component";
import {ChildBComponent} from "./page/child-b/child-b.component";
import {AdminPageComponent} from "./page/admin-page/admin-page.component";
import {AuthGuard} from "./auth/authGuard";
import {LoginPageComponent} from "./page/login-page/login-page.component";
import {TodoDetailsPageComponent} from "./page/todo-details-page/todo-details-page.component";
import {MovieListComponent} from "./page/movie-list/movie-list.component";
import {MovieDetailComponent} from "./page/movie-detail/movie-detail.component";
import {LogoutComponent} from "./page/logout/logout.component";

const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('child a');

const routes: Routes = [

  { path: 'first-page',
    title: 'First Page',
    component: FirstPageComponent ,// this is the component with the <router-outlet> in the template
    children:[
      {
        path:'child-a',//child route path
        title:resolvedChildATitle,
        component:ChildAComponent// child route component that the router renders


      },
      {
        path:'child-b',
        title:'child-b component',
        component:ChildBComponent
      }
    ]
  },
  { path: 'todo-list-page', component: TodoListPageComponent },
  { path: 'another-page',redirectTo:'/first-page',pathMatch:'full'},
  { path: 'admin-page', component: AdminPageComponent,canActivate:[AuthGuard] },
  {path:'login-page', component:LoginPageComponent},
  {path:'logout-page', component:LogoutComponent},
  {path:'movie-list-page', component:MovieListComponent,canActivate:[AuthGuard]},
  {path:'movie-details-page/:movieId', component:MovieDetailComponent,canActivate:[AuthGuard]},
  {path:'todo-details-page/:todoId', component:TodoDetailsPageComponent},
  {
    path:'home',
    loadChildren:()=>import('./module/home/home.module').then((m)=>m.HomeModule),
  },
  {
    path:'about',
    loadChildren:()=>import('./module/about/about.module').then((m)=>m.AboutModule),
  },

  {path:'**',component:NotFoundPageComponent}
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
