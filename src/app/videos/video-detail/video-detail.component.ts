import { AppState } from './../../shared/app-state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss']
})
export class VideoDetailComponent implements OnInit {

  constructor(private appState :AppState) { }

  ngOnInit() {
  }

}
