const copyButtonLabel = 'Copy';

const blocks = document.querySelectorAll('pre');

blocks.forEach((block) => {
  // Only add button if browser supports Clipboard API
  if (navigator.clipboard) {
    const button = document.createElement('button');

    button.innerText = copyButtonLabel;
    block.appendChild(button);

    button.addEventListener('click', async () => {
      await copyCode(block, button);
    });
  }
});

async function copyCode(block, button) {
  const code = block.querySelector('code');
  const text = code.innerText;

  await navigator.clipboard.writeText(text);

  // Feedback for the copy
  button.innerText = 'Copied ✅';

  setTimeout(() => {
    button.innerText = copyButtonLabel;
  }, 1500);
}
