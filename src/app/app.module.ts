import { VideoService } from './videos/shared/video.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/nav/header/header.component';
import { SearchBoxComponent } from './shared/nav/search-box/search-box.component';
import { AppState } from './shared/app-state.service';
import { YoutubeSafeUrlPipe } from './shared/youtube-safe-url.pipe';
import { VideosComponent } from './videos/videos.component';
import { VideoListComponent } from './videos/video-list/video-list.component';
import { VideoDetailComponent } from './videos/video-detail/video-detail.component';
import { VideoListItemComponent } from './videos/video-list-item/video-list-item.component';

import {Ng2PaginationModule} from 'ng2-pagination';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBoxComponent,
    YoutubeSafeUrlPipe,
    VideosComponent,
    VideoListComponent,    
    VideoDetailComponent,
    VideoListItemComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2PaginationModule
  ],
  providers: [
    AppState,
    VideoService    
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
