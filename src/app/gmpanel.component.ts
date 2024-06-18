import { Component } from '@angular/core';
import { io } from 'socket.io-client';
import Contestant from 'Contestant.model';

@Component({
  selector: 'app-root',
  templateUrl: './gmpanel.component.html',
  styleUrls: ['./gmpanel.component.scss']
})
export class GMPanelComponent {
  private socket = io('http://localhost:3000');
	public contestantsList: Contestant[] = [];
	constructor() {
		this.socket.on('contestants', (contestants) => {
			this.contestantsList = contestants;
		})
	}
	
	givePoints(index: number, points: number) {
		if(this.socket.connected) {
			console.log('xd');
			this.socket.emit('setPoints', {
				id: index,
				score: points,
			});
		} else {
			console.log('Not connected');
		}
	}

	setLife(index: number, lives: number) {
		if(this.socket.connected) {
			console.log('xd1');
			this.socket.emit('setLife', {
				id: index,
				lives: lives
			});
		}
	}


  title = '1z8-gmpanel';
}
