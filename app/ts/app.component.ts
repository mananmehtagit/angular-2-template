import {Component} from 'angular2/core';
import {Config} from './config-service';
import {Videos} from './videos';
import {PlaylistComponents} from './playlist.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponents]
})

export class AppComponent {
	mainHeading = Config.MAIN_HEADING;
	videos:Array<Videos>;
	//Videos: Videos[];


	constructor(){
		this.videos = [
			new Videos (1, "Zalima - Raees","hhdSyBHuI88"),
			new Videos (2, "Enna Sona","ofTxceS4wLI"),
			new Videos (3, "Ae Dil Hai Mushkil","vUCM_0evdQY")

		]
	}
}
