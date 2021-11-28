<script>
  import "./game/setupGame";
  import "./game/registerGame";
</script>

<div class="wrapper">
  <div class="board-wrapper">
    <ul class="bottom-board">
      <li class="bottom-coordinate">a</li>
      <li class="bottom-coordinate">b</li>
      <li class="bottom-coordinate">c</li>
      <li class="bottom-coordinate">d</li>
      <li class="bottom-coordinate">e</li>
      <li class="bottom-coordinate">f</li>
      <li class="bottom-coordinate">g</li>
      <li class="bottom-coordinate">h</li>
    </ul>
    <div class="board">
      <ul class="board-row">
        <li class="tile a1" />
        <li class="tile b1" />
        <li class="tile c1" />
        <li class="tile d1" />
        <li class="tile e1" />
        <li class="tile f1" />
        <li class="tile g1" />
        <li class="tile h1" />
      </ul>
      <ul class="board-row">
        <li class="tile a2" />
        <li class="tile b2" />
        <li class="tile c2" />
        <li class="tile d2" />
        <li class="tile e2" />
        <li class="tile f2" />
        <li class="tile g2" />
        <li class="tile h2" />
      </ul>
      <ul class="board-row">
        <li class="tile a3" />
        <li class="tile b3" />
        <li class="tile c3" />
        <li class="tile d3" />
        <li class="tile e3" />
        <li class="tile f3" />
        <li class="tile g3" />
        <li class="tile h3" />
      </ul>
      <ul class="board-row">
        <li class="tile a4" />
        <li class="tile b4" />
        <li class="tile c4" />
        <li class="tile d4" />
        <li class="tile e4" />
        <li class="tile f4" />
        <li class="tile g4" />
        <li class="tile h4" />
      </ul>
      <ul class="board-row">
        <li class="tile a5" />
        <li class="tile b5" />
        <li class="tile c5" />
        <li class="tile d5" />
        <li class="tile e5" />
        <li class="tile f5" />
        <li class="tile g5" />
        <li class="tile h5" />
      </ul>
      <ul class="board-row">
        <li class="tile a6" />
        <li class="tile b6" />
        <li class="tile c6" />
        <li class="tile d6" />
        <li class="tile e6" />
        <li class="tile f6" />
        <li class="tile g6" />
        <li class="tile h6" />
      </ul>
      <ul class="board-row">
        <li class="tile a7" />
        <li class="tile b7" />
        <li class="tile c7" />
        <li class="tile d7" />
        <li class="tile e7" />
        <li class="tile f7" />
        <li class="tile g7" />
        <li class="tile h7" />
      </ul>
      <ul class="board-row">
        <li class="tile a8" />
        <li class="tile b8" />
        <li class="tile c8" />
        <li class="tile d8" />
        <li class="tile e8" />
        <li class="tile f8" />
        <li class="tile g8" />
        <li class="tile h8" />
      </ul>
    </div>
  </div>
</div>

<style lang="scss">
  .wrapper {
    display: block;
    margin: 0 auto;

    .board-wrapper {
      transform: rotate(180deg);
      .bottom-board {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100;
        transform: rotate(180deg);

        li.bottom-coordinate {
          margin: 0 auto;
        }
      }
      .board {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: auto;
        direction: rtl;
        width: 42vw;
        min-width: 300px;
        max-width: 680px;
        height: auto;
        aspect-ratio: 1/1;
        border: 1px solid grey;

        :nth-child(odd) {
          :nth-child(odd) {
            background-color: hsla(0, 0%, 50%, 1);
          }
          :nth-child(even) {
            background-color: hsla(0, 0%, 100%, 1);
          }
        }
        :nth-child(even) {
          :nth-child(odd) {
            background-color: hsla(0, 0%, 100%, 1);
          }
          :nth-child(even) {
            background-color: hsla(0, 0%, 50%, 1);
          }
        }
        .board-row {
          display: flex;
          li.tile {
            position: relative;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
</style>
