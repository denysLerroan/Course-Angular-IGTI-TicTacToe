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
    if (this.board[line][col] == '' && this.winner == '') {
      this.board[line][col] = this.currentPlayer;
      if (this.currentPlayer == 'O') {
        this.currentPlayer = 'X';
      } else {
        this.currentPlayer = 'O';
      }
    }
  }

  reset() {
    this.currentPlayer = 'X';
    this.winner = '';
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
  }

  constructor() {}
}
