<script>
  import Board from "./Board.svelte";
  import Reset from "./ResetButton.svelte";
  import Yield from "./YieldButton.svelte";
</script>

<main>
  <div class="game-wrapper">
    <Board />
    <div class="game-buttons">
      <Reset />
      <Yield />
    </div>
  </div>
</main>

<style lang="scss">
  main {
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;

    .game-wrapper {
      .game-buttons {
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>
