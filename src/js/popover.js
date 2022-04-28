
export default class Popover {
  constructor(container) {
    this.container = container;
  }

  createPopover(container) {
    this.container = document.querySelector('.container');
    this.button = document.querySelector('.button')
    this.popoverBox = document.createElement('div');
    this.popoverBox.classList.add('popover-box');
    this.popoverTitle = document.createElement('h3');
    this.popoverTitle.textContent = 'Popover';
    this.popoverTitle.classList.add('popover-title');
    this.popoverText = document.createElement('div');
    this.popoverText.classList.add('popover-text');
    this.popoverText.textContent = 'is there any content here';
    this.popoverBox.appendChild(this.popoverTitle);
    this.popoverBox.appendChild(this.popoverText);
    this.container.appendChild(this.popoverBox);
   console.log(this.popoverBox.offsetLeft);
    this.popoverBox.style.top = `${
      this.popoverBox.offsetTop - this.popoverBox.offsetHeight/1.5 - 5}px`;
    this.popoverBox.style.left = `${this.container.offsetLeft - this.container.offsetWidth/2 - this.popoverBox.offsetWidth/2}px`;
  }

  removePopover(container) {
    this.container.querySelector('.popover-box').remove();
  }
}
