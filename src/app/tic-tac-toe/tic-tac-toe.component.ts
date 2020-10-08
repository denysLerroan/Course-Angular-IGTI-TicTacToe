import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css'],
})
export class TicTacToeComponent {
  currentPlayer: string = 'X';
  winner: string = '';
  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  play(line: number, col: number) {
    console.log(
      `jogada na linha ${line}, coluna ${col} do jogador ${this.currentPlayer}`
    );
  }

  constructor() {}
}
