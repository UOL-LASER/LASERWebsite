<script lang="ts">
  import '@fontsource-variable/exo-2';
  import '@fontsource-variable/orbitron';

  export let question: string;
  export let answer: string;

  let isOpen = false;

  function toggleDropdown() {
      isOpen = !isOpen;
  }

  function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Enter' || event.key === ' ') {
          toggleDropdown();
      }
  }
</script>

<style>
  .faq-container {
      margin: 20px auto;
      padding: 20px;
      border-radius: 10px;
      width: 90%;
      max-width: auto;
      background-color: #ffffff;
      transition: all 0.3s ease;
      font-family: 'Exo 2 Variable';
      text-align: center;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  }

  .question {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      padding: 10px;
      background: #000000;
      color: #ffffff;
      border-radius: 10px;
      font-size: 1rem;
      text-align: center;

  }

  .answer {
      max-height: 0;
      opacity: 0;
      overflow: hidden;
      transition: max-height 0.3s ease, opacity 0.3s ease;
      padding: 0 10px;
      background: #ffffff;
      color: #000000;
      border-radius: 0 0 10px 10px;
      margin-top: 5px;
      text-align: center;
      font-size: 1rem;

  }

  .answer.open {
      max-height: 200px; /* Adjust based on content */
      opacity: 1;
      padding: 10px;
  }
</style>

<div class="faq-container">
  <div class="question" role="button" tabindex="0" on:click={toggleDropdown} on:keydown={handleKeyDown}>
      <h2>{question}</h2>
  </div>
  <div class="answer {isOpen ? 'open' : ''}">
      <p>{answer}</p>
  </div>
</div>
