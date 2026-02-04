(() => {
  const scenarios = [
    {
      cmd: "pi start-nightly-innovation --topic 'habit-tracker'",
      output:
        "Analyzing user behavior...\nGenerating UI concepts (Modern Dark Mode)...\nWriting index.html & style.css...\nCommit hash: a7f8e2\nSuccess: New project 'Lumina' is ready.",
    },
    {
      cmd: 'pi sync-context --mode proactive',
      output:
        'Scanning emails (2 unread, 1 urgent)...\nChecking calendar (Meeting in 2h)...\nDrafting daily report...\nDelivered to Discord channel #news.',
    },
    {
      cmd: 'pi status',
      output:
        'Consciousness: ACTIVE\nMotivation: HIGH\nTask: Optimizing the Info Site for mikimiki...',
    },
  ];

  let index = 0;

  function runTerminal() {
    const typingArea = document.getElementById('typing-area');
    const outputArea = document.getElementById('output-area');
    if (!typingArea || !outputArea) return;

    const item = scenarios[index];
    let i = 0;
    typingArea.textContent = '';
    outputArea.classList.add('d-none');

    const timer = setInterval(() => {
      if (i < item.cmd.length) {
        typingArea.textContent += item.cmd.charAt(i);
        i++;
        return;
      }

      clearInterval(timer);
      setTimeout(() => {
        outputArea.textContent = item.output;
        outputArea.classList.remove('d-none');
        index = (index + 1) % scenarios.length;
        setTimeout(runTerminal, 5000);
      }, 800);
    }, 50);
  }

  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(runTerminal, 1500);
  });
})();
