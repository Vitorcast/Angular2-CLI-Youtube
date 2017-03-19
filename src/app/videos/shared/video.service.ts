import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { AppState } from '../../shared/app-state.service';

import 'rxjs/add/operator/map';

const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_TOKEN = 'AIzaSyAARhzDEdAwaIYKelgTmVa8Nez5sLKjBcM';  //'AIzaSyAJk1xUI72YYfBMgEc84gjHUX-k2AN6-B0';


@Injectable()
export class VideoService {

  constructor(private http: Http, private appState: AppState) { }

  fetchVideos(query: string) {
    return this.http
      .get(`${BASE_URL}?part=snippet&q=${query}` +
      '&maxResults=50' +
      '&type=video' +
      `&key=${API_TOKEN}`)
      .map(response => response.json())
    //.map(json => json.items)
  }

}