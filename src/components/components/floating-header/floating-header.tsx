import { Component, Element, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'floating-header',
  styleUrl: 'floating-header.css',
  shadow: true,
})
export class FloatingHeader {
  @Element() private element: HTMLElement;
  private header;
  private lastDocumentHeight;
  private lastScrollY;
  private lastWindowHeight;
  private progressBar;
  private ticking = false;

  /**
   * The trigger treshold to activate the floating header
   */
  @Prop() triggerTreshold: number = 100;

  /**
   * The trigger treshold to activate the floating header
   */
  @Prop() activeClass: string = 'floating-active';

  private requestTick() {
    if (!this.ticking) {
      requestAnimationFrame(this.update.bind(this));
    }
    this.ticking = true;
  }

  @Listen('window:scroll')
  private onScroll(ev) {
    this.lastScrollY = window.scrollY;
    this.requestTick();
  }
  @Listen('window:resize')
  private onResize(ev) {
    this.lastWindowHeight = window.innerHeight;
    this.lastDocumentHeight = document.documentElement.scrollHeight;
    this.requestTick();
  }

  private update() {
    if (this.lastScrollY >= this.triggerTreshold) {
      this.header.classList.add(this.activeClass);
    } else {
      this.header.classList.remove(this.activeClass);
    }
    this.progressBar.setAttribute('value', String(this.lastScrollY));
    this.ticking = false;
  }

  componentDidLoad() {
    this.progressBar = this.element.shadowRoot.querySelector('progress');
    this.header = this.element.shadowRoot.querySelector('.floating-header');

    this.lastScrollY = window.scrollY;
    this.lastWindowHeight = window.innerHeight;
    this.lastDocumentHeight = document.documentElement.scrollHeight;
    this.progressBar.setAttribute(
      'max',
      String(this.lastDocumentHeight - this.lastWindowHeight),
    );
  }

  render() {
    return (
      <div>
        <div class="post-full-title" style={{ height: '1890px' }}>
          LOL
        </div>
        <div class="floating-header">
          <div class="floating-header-logo" />
          <span class="floating-header-divider">&mdash;</span>
          <div class="floating-header-title">LOL</div>

          <progress class="progress" value="0">
            <div class="progress-container">
              <span class="progress-bar" />
            </div>
          </progress>
        </div>
      </div>
    );
  }
}
