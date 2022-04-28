import Popover from '../popover';
/**
 * @jest-environment jsdom
 */
const container = document.querySelector('.container');
const popover = new Popover(container);
test('check popover content', () => {
  document.body.innerHTML = `<div class="container">
  <button class="button1">click to toggle popover</button>
</div>`;
  container.addEventListener('click', () => {
    popover.createPopover();
  });

  container.click();
  expect(document.querySelector('.popover-box')).toBeTruthy();
  expect(document.querySelector('.popover-title')).toBeTruthy();
  expect(document.querySelector('.popover-text')).toBeTruthy();
});
