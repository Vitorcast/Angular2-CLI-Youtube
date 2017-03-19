import { Video } from './../videos/shared/video.model';

import { Injectable } from '@angular/core';

@Injectable()
export class AppState {

  videoList : Video[] = [];
  activeVideo: Video;

  constructor() { }

}
