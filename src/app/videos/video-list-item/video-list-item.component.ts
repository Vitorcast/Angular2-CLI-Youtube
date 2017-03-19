import { Video } from './../shared/video.model';
import { Component, OnInit, Input} from '@angular/core';
import { AppState } from '../../shared/app-state.service';

@Component({
  selector: 'app-video-list-item',
  templateUrl: './video-list-item.component.html',
  styleUrls: ['./video-list-item.component.scss']
})
export class VideoListItemComponent implements OnInit {

  @Input() video: Video;

  constructor(private appState: AppState) { }

  onClick(){
    this.appState.activeVideo = this.video;
  }

  ngOnInit() {
  }

}
