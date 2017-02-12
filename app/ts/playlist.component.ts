import {Component,Output,EventEmitter} from 'angular2/core';
import {Videos} from './videos';

@Component({
	selector:"playlist",
	templateUrl: 'app/ts/playlist.component.html',
	inputs: ['videoAttributes']
})

export class PlaylistComponents{
	video:Videos;
	@Output() onSelectedVideo = new EventEmitter<Videos>();

	onSelect(vid:Videos){
		console.log(vid.videoCode);
		console.log(JSON.stringify(vid));
		this.onSelectedVideo.emit(vid);
		this.video = vid;

		}
	}
}
