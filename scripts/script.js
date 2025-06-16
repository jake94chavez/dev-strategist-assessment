// Accordion Component
// This component allows for the creation of an accordion interface
// where sections can be expanded and collapsed.
class Accordion extends HTMLElement {
  constructor() {
    super();   

    this._selectors = {
      accordion: '[js-accordion]',
      accordionItem: '[js-accordion-item]',
      accordionHeader: '[js-accordion-header]',
      accordionContent: '[js-accordion-content]'
    }
  }

  // Get all buttons in this accordion instance and add event listeners
  connectedCallback(){
    this.buttons = this.querySelectorAll(this._selectors.accordionHeader);
    this.buttons.forEach(button => {
      button.addEventListener('click', this._toggleContent)
    })
  }

  // Toggle the content of an accordion item
  // Change aria attributes accordingly
  _toggleContent = (e) => {
    e.stopImmediatePropagation();
    const trigger = e.currentTarget;
    const content = this.querySelector(`#${trigger.getAttribute('aria-controls')}`);
    let isExpanded = trigger.getAttribute('aria-expanded');
    if (isExpanded == 'false') {
      trigger.setAttribute('aria-expanded', true);
      this._expandSection(content);
    }else{
      trigger.setAttribute('aria-expanded', false);
      this._collapseSection(content);
    }
  }

  _collapseSection(element) {
    // mark the section as "currently hidden"
    element.setAttribute('aria-hidden', true);
    element.style.height = 0 + 'px';
}

_expandSection(element) {
    // mark the section as "currently not hidden"
    element.setAttribute('aria-hidden', false);
    element.style.height = element.scrollHeight + 'px';
  }
}

customElements.define('accordion-component', Accordion);