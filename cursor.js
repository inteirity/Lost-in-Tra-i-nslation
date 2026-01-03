// Custom cursor switching for purple/grey
function setCursor(color) {
  const file = color === 'purple' ? 'cursor_purple.svg' : 'cursor_grey.svg';
  document.body.style.cursor = `url('assets/cursor/${file}') 16 16, auto`;
}

setCursor('purple'); // Default

// For all purple nav/buttons
const purpleEls = document.querySelectorAll('.bg-purple-300');
purpleEls.forEach(el => {
  el.addEventListener('mouseenter', () => setCursor('grey'));
  el.addEventListener('mouseleave', () => setCursor('purple'));
});

// Set default cursor for the body
if (document.body) {
  document.body.style.cursor = "url('assets/cursor/cursor_purple.svg') 16 16, auto";
}

// For all purple nav/buttons
function setCursorGrey() {
  if (document.body) {
    document.body.style.cursor = "url('assets/cursor/cursor_grey.cur'), pointer";
  }
}
function setCursorPurple() {
  if (document.body) {
    document.body.style.cursor = "url('assets/cursor/cursor_purple.svg') 16 16, auto";
  }
}

document.querySelectorAll('.bg-purple-300').forEach(el => {
  el.addEventListener('mouseenter', setCursorGrey);
  el.addEventListener('mouseleave', setCursorPurple);
});
