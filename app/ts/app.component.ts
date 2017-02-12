import {Component} from 'angular2/core';
import {Config} from './config-service';
import {Videos} from './videos';
import {PlaylistComponents} from './playlist.component';
import {VideoFrameComponent} from './videoframe.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponents,VideoFrameComponent]
})

export class AppComponent {
	mainHeading = Config.MAIN_HEADING;
	videos:Array<Videos>;
	songs:Videos;

	constructor(){
		this.videos = [
			new Videos (1, "Zalima - Raees","hhdSyBHuI88"),
			new Videos (2, "Enna Sona","ofTxceS4wLI"),
			new Videos (3, "Ae Dil Hai Mushkil","vUCM_0evdQY")

		];

	}
	playsong(song:Videos){
		this.songs = song;
	}
}
