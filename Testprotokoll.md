# Testprotokoll

## Test 1 - Fehler 1 - Absturtz bei Zahl über 6:

Das programm wurde mit der Eingabe "7" zum Absturtz gebracht da diese Zahl nicht auf dem Spielfeld present ist.

```
Player o: 7
0 1 2 3 4 5 6
_ _ _ _ _ _ _
_ _ _ _ _ _ _
_ _ _ _ _ _ _
_ _ _ _ _ _ _
_ _ _ _ _ _ _
_ x _ _ _ _ _

error: Uncaught (in promise) TypeError: Cannot read properties of undefined (reading '0')
      row[i] = this.fields[r][i];
                             ^
    at Board.getRow (file:///C:/Users/nils/Documents/m450/connect-four-debugging/board.ts:95:30)
    at Board.horizontalWinner (file:///C:/Users/nils/Documents/m450/connect-four-debugging/board.ts:75:22)
    at Board.winner (file:///C:/Users/nils/Documents/m450/connect-four-debugging/board.ts:50:29)
    at file:///C:/Users/nils/Documents/m450/connect-four-debugging/main.ts:14:24
```

## Test 2 - Fehler 2 - Absturtz bei Eingabe von einem nicht numerischen wert:

Das programm wurde mit der Eingabe "a" zum Absturtz gebracht da diese Zahl keine Nummer ist.
```
Player x: a
0 1 2 3 4 5 6
_ _ _ _ _ _ _
_ _ _ _ _ _ _
_ _ _ _ _ _ _
_ _ _ _ _ _ _
_ _ _ _ _ _ _
_ _ _ _ _ _ _

error: Uncaught (in promise) TypeError: Cannot read properties of undefined (reading '0')
      row[i] = this.fields[r][i];
                             ^
    at Board.getRow (file:///C:/Users/nils/Documents/m450/connect-four-debugging/board.ts:95:30)
    at Board.horizontalWinner (file:///C:/Users/nils/Documents/m450/connect-four-debugging/board.ts:75:22)
    at Board.winner (file:///C:/Users/nils/Documents/m450/connect-four-debugging/board.ts:50:29)
    at file:///C:/Users/nils/Documents/m450/connect-four-debugging/main.ts:14:24
PS C:\Users\nils\Documents\m450\connect-four-debugging>`
```

## Test 3 - Erfolgreich - Diagonalen

Das Spiel reagiert wie erwartet

```
Player x: 3
0 1 2 3 4 5 6
_ _ _ _ _ _ _
_ _ _ _ _ _ _
_ _ _ x _ _ _
_ _ x o _ _ x
_ x o o _ _ x
x o o o _ _ x

Player x: A winner is you!
```
```
Player x: 4
0 1 2 3 4 5 6
_ _ _ _ _ _ _
_ _ _ _ _ _ _
_ _ _ _ x _ _
_ _ _ x o _ _
_ _ x o o _ x
_ x o o o x x

Player x: A winner is you!
```
```
Player x: 1
0 1 2 3 4 5 6
_ _ _ _ _ _ _
_ _ _ _ _ _ _
_ x _ _ _ _ _
_ o x _ _ _ x
_ o o x _ _ x
_ o o o x _ x

Player x: A winner is you!
```
```
Player x: 4
0 1 2 3 4 5 6
_ _ _ _ _ _ _
_ _ _ _ x _ _
_ _ _ x o _ _
_ _ x o o _ x
_ x x o x _ o
_ o o x o _ x

Player x: A winner is you!
```

## Test 4 - Erfolgreich - Horizontal / Vertikal

Das Spiel reagiert wie erwartet

```
Player x: 1
0 1 2 3 4 5 6
_ _ _ _ _ _ _
_ _ _ _ _ _ _
_ x _ _ _ _ _
_ x o _ _ _ _
_ x o _ _ _ _
_ x o _ _ _ _

Player x: A winner is you!
```

```
Player x: 3
0 1 2 3 4 5 6
_ _ _ _ _ _ _
_ _ _ _ _ _ _
_ _ _ _ _ _ _
_ _ _ _ _ _ o
_ _ _ _ _ _ o
x x x x _ _ o

Player x: A winner is you!
```