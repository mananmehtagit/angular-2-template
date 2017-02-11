import {Component} from 'angular2/core';
import {Videos} from './videos';

@Component({
	selector:"playlist",
	templateUrl: 'app/ts/playlist.component.html',
	inputs: ['videoAttributes']
})

export class PlaylistComponents{

	onSelect(vid:Videos){
		console.log(JSON.stringify(vid));
	}
}