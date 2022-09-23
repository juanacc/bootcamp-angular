import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  numberEmited: number = 0;
  nIntervId;
  @Output() startGame = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.nIntervId = setInterval(() => {
      this.startGame.emit(++this.numberEmited);
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.nIntervId);
  }

}
