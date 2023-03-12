<h1 align="center">
  <p>Game of Life<p>
  <img src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Conways_game_of_life_breeder_animation.gif" width="500" />
</h1>
<p>
  The Game of Life by the mathematician John Horton Conway was created in 1970, is a zero-player game 
  (this is because the game evolution is determined by the initial state of the board given at the start, without further input)
  is considered Turing complete and can simulate a Turing machine.
</p>
<p align="center">Link:</p>
<p align="center"><a href="https://game-of-life-conway.web.app/" text-align="center">Game of life - Conway</a></p>
<h2>Rules</h2>
<p>
  The game had a two dimensional infinite board of squares (called cells), each one can be in two possible states, 
  when its painted is considered alive and when its white its considered dead, each cell interacts with its eight neighbours to
  calculate the next generation of cells.
</p>
<p>This game has 3 simple rules:</p>
<ul>
  <li>Any alive cell with two or three neighbours alive lives on to the next generation.</li>
  <li>Any dead cell with exactly three neighbours alive becomes a live cell the next generation.</li>
  <li>Any cell that don't meet the previous conditions die in the next gen by underpopulation or overpopulation.</li>
</ul>

<h2>Tools and Technologies</h2>
<p align="center">
  <a href="https://vitejs.dev/" target="_blank"><img src="https://vitejs.dev/logo-with-shadow.png" width="80"></a>
  <a href="https://es.reactjs.org/" target="_blank"><img src="https://user-images.githubusercontent.com/97072752/211161846-8cb79ff8-c318-4973-aa5e-445f62d89365.png" width="80"></a>
  <a href="https://www.typescriptlang.org/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" width="80"></a>
  <a href="https://github.com/pmndrs/zustand/" target="_blank"><img src="https://user-images.githubusercontent.com/97072752/224575665-535acd71-55b6-4f49-84b0-8c7cc456baae.png" width="80"></a>
</p>
<p>This application don't uses HTML canvas, is pure DOM manipulation with React states.</p>
