import { VideoService } from './../shared/video.service';
import { Video } from './../shared/video.model';
import { Component, OnInit } from '@angular/core';
import { AppState } from '../../shared/app-state.service';
import * as moment from 'moment';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  videoList : Video[] = [];

  constructor(private videoService: VideoService, private appState: AppState) { }

  ngOnInit() {
    this.videoService.fetchVideos('typescript')
          .subscribe(data => {        

            this.appState.videoList = data.items.map(item => {
              return new Video(
                item.id.videoId,
                item.snippet.title,
                item.snippet.thumbnails.high.url,
                item.snippet.channelTitle,
                item.snippet.channelId,
                moment(item.snippet.publishedAt).fromNow(),
                item.snippet.description)
            });
          });
    
        this.appState.activeVideo = this.appState.videoList[0];  
      }
  }
