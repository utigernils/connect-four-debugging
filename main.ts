import { Board, Player } from "./board.ts";

export function playTurn(board: Board, player: Player, input: string): { row: number, winner: Player } {
  const col = Number.parseInt(input);
  const row = board.makeMove(player, col);
  const winner = board.winner(player, row, col);
  return { row, winner };
}

if (import.meta.main) {
  const board = new Board();
  let player = Player.PlayerX;

  board.output();

  while (true) {
    const input = prompt(`Player ${player}:`) || "";
    const { row, winner } = playTurn(board, player, input);
    board.output();
    console.log();
    if (winner != Player.Nobody) {
      console.log(`Player ${player}: A winner is you!`);
      break;
    }
    player = player == Player.PlayerX ? Player.PlayerO : Player.PlayerX;
  }
}
