import Popover from './popover';

const button = document.querySelector('.container');
button.addEventListener('click', () => {
  if (button.querySelector('.popover-box')) {
    button.querySelector('.popover-box').remove();
  } else {
    const popover = new Popover(button);
    popover.createPopover(button);
  }
});
