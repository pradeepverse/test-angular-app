import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { FollowersComponent } from './followers/followers.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';
import { FooterComponent } from './footer/footer.component';
import { HideTextPipe } from './hide-text.pipe';
import { PanelComponent } from './panel/panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhoneNumberDirective } from './phone-number.directive';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ProfileComponent } from './profile/profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MyFollowersComponent } from './my-followers/my-followers.component';
import { UserProfileComponent } from './user-profile/user-profile.component'
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HeaderComponent,
    PostComponent,
    FooterComponent,
    HideTextPipe,
    PanelComponent,
    PhoneNumberDirective,
    SignupFormComponent,
    ProfileComponent,
    FollowersComponent,
    SignInComponent,
    HomePageComponent,
    MyFollowersComponent,
    UserProfileComponent,
    PageNotFoundComponent,
    PostsComponent,
    MyPostsComponent
  ],
  imports: [


    RouterModule.forRoot([
      {
        path: '',
        component: MyPostsComponent
      },
      {
        path: 'sign-in',
        component: SignInComponent
      },
      {
        path: 'home-page',
        component: HomePageComponent
      },
      {
        path: 'followers',
        component: MyFollowersComponent
      },
      {
        path: 'followers/:name',
        component: UserProfileComponent
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ]),
    BrowserModule,
    FormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
