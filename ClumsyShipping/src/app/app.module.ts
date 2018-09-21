import { RouterModule, Routes} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { SubmissionsTableComponent } from './submissions/submission-table/table.component';
import { PopupComponent } from './popup/popup.component';


const clumsyRoutes: Routes = [
  {
    path: 'feedback',
    component: FeedbackComponent
  },
  {
    path: 'submissions',
    component: SubmissionsComponent
  },
  {
    path: '',
    component: FeedbackComponent
  },
  {
    path: '**',
    component: FeedbackComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    FeedbackComponent,
    SubmissionsComponent,
    SubmissionsTableComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(clumsyRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
