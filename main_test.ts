import { assertEquals } from "@std/assert";
import { Board, Player } from "./board.ts";
import { playTurn } from "./main.ts";


//these test dont assert anything, they just make sure no exceptions are thrown
Deno.test("main handles input < 0", () => {
  const board = new Board();
  playTurn(board, Player.PlayerX, "-1");
});

Deno.test("main handles input > 6", () => {
  const board = new Board();
  playTurn(board, Player.PlayerX, "7");
});

Deno.test("main handles non-numeric input", () => {
  const board = new Board();
  playTurn(board, Player.PlayerX, "abc");
});

Deno.test("main handles empty input", () => {
  const board = new Board();
  playTurn(board, Player.PlayerX, "");
});
