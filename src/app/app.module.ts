import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HelloWorldComponent} from './components/hello-world/hello-world.component';
import {EventDemoComponent} from './components/event-demo/event-demo.component';
import {ListDemoComponent} from './components/list-demo/list-demo.component';
import {MovieComponent} from './components/movie/movie.component';
import {ChildTemplateRefComponent} from './components/child-template-ref/child-template-ref.component';
import {ToDoListComponent} from './components/to-do-list/to-do-list.component';
import {ToDoComponent} from './components/to-do/to-do.component';
import {ZippyBasicComponent} from './components/zippy-basic/zippy-basic.component';
import {ShowCurrentDateComponent} from './components/pipe/show-current-date/show-current-date.component';
import {HighlightDirective} from './directives/highlight.directive';
import {UnlessDirective} from './directives/unless.directive';
import {NgswitchDemoComponent} from './components/ngswitch-demo/ngswitch-demo.component';
import {NgClassExampleComponent} from './components/ng-class-example/ng-class-example.component';
import {TableChildComponent} from './components/table-child/table-child.component';
import {TodoListViewComponent} from './components/todo-list-view/todo-list-view.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TemplateDrivenFormExampleComponent} from './components/template-driven-form-example/template-driven-form-example.component';
import {ReactiveFormExampleComponent} from './components/reactive-form-example/reactive-form-example.component';
import {TotalCalculateComponent} from './components/total-calculate/total-calculate.component';
import {NewMovieComponent} from './components/new-movie/new-movie.component';
import {AnalyticsService} from "./services/analytics.service";
import {Metric} from "./models/metric";
import {AnalyticsImplementation} from "./models/analytics-implementation";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ToDoCountComponent } from './components/to-do-count/to-do-count.component';
import { FirstPageComponent } from './page/first-page/first-page.component';
import { TodoListPageComponent } from './page/TodoListPage/todo-list-page.component';
import { NotFoundPageComponent } from './page/not-found-page/not-found-page.component';
import {provideRouter} from "@angular/router";
import {StandaloneComponentComponent} from "./standalone-component/standalone-component.component";
import {ChildAComponent} from "./page/child-a/child-a.component";
import {ChildBComponent} from "./page/child-b/child-b.component";
import { AdminPageComponent } from './page/admin-page/admin-page.component';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { TodoDetailsPageComponent } from './page/todo-details-page/todo-details-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddNewTodoComponent } from './components/add-new-todo/add-new-todo.component';
import { MovieListComponent } from './page/movie-list/movie-list.component';
import { MovieTwoComponent } from './components/movie-two/movie-two.component';
import { MovieDetailComponent } from './page/movie-detail/movie-detail.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { AddNewMovieComponent } from './components/add-new-movie/add-new-movie.component';
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import {FocusOnClickDirective} from "./components/add-new-movie/focus-on-clicl.directive";
import { ReviewComponent } from './components/review/review.component';
import {TokenInterceptor} from "./auth/interceptor/token.interceptor";
import { LogoutComponent } from './page/logout/logout.component';




@NgModule({
  declarations: [
    FocusOnClickDirective,
    AppComponent,
    HelloWorldComponent,
    EventDemoComponent,
    ListDemoComponent,
    MovieComponent,
    ChildTemplateRefComponent,
    ToDoListComponent,
    ToDoComponent,
    ZippyBasicComponent,
    ShowCurrentDateComponent,
    HighlightDirective,
    UnlessDirective,
    NgswitchDemoComponent,

    NgClassExampleComponent,
    TableChildComponent,
    TodoListViewComponent,
    TemplateDrivenFormExampleComponent,
    ReactiveFormExampleComponent,
    TotalCalculateComponent,
    NewMovieComponent,
    ToDoCountComponent,
    FirstPageComponent,
    TodoListPageComponent,
    NotFoundPageComponent,
    ChildAComponent,
    ChildBComponent,
    AdminPageComponent,
    LoginPageComponent,
    TodoDetailsPageComponent,
    AddNewTodoComponent,
    MovieListComponent,
    MovieTwoComponent,
    MovieDetailComponent,
    MovieDetailsComponent,
    AddNewMovieComponent,
    ReviewComponent,
    LogoutComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    HttpClientModule,
    StandaloneComponentComponent,
    NgbModule,
    BrowserAnimationsModule,
    NgMultiSelectDropDownModule.forRoot(),

  ],
  providers: [
    {
      // `AnalyticsService` is the _token_ we use to inject
      // note, the token is the class, but it's just used as an identifier!
      provide: AnalyticsService,
      // useFactory is a function - whatever is returned from this function
      // will be injected
      useFactory() {

        // create an implementation that will log the event
        const loggingImplementation: AnalyticsImplementation = {
          recordEvent: (metric: Metric): void => {
            console.log('The metric is:', metric);
          }
        };

        // create our new `AnalyticsService` with the implementation
        return new AnalyticsService(loggingImplementation);
      }
    },


    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent],

})
export class AppModule {
}
