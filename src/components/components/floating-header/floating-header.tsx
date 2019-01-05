import { Component, Listen, Prop, State } from '@stencil/core';

@Component({
  tag: 'floating-header',
  styleUrl: 'floating-header.css',
  shadow: true,
})
export class FloatingHeader {
  progressBar!: HTMLElement;

  private ticking = false;

  @State() isActive: boolean = false;
  /**
   * The trigger treshold to activate the floating header
   */
  @Prop() triggerTreshold: number = 100;

  /**
   * The trigger treshold to activate the floating header
   */
  @Prop() activeClassName: string = 'floating-active';

  @Listen('window:scroll')
  private onScroll(ev) {
    this.requestTick(this.updateValue.bind(this, window.scrollY));
  }

  @Listen('window:resize')
  private onResize(ev) {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    this.requestTick(this.updateMax.bind(this, windowHeight, documentHeight));
  }

  private requestTick(fn: () => void) {
    if (!this.ticking) {
      requestAnimationFrame(fn);
    }
    this.ticking = true;
  }

  private updateValue(scrollY: number) {
    if (scrollY >= this.triggerTreshold) {
      this.isActive = true;
    } else {
      this.isActive = false;
    }
    this.progressBar.setAttribute('value', String(scrollY));
    this.ticking = false;
  }

  private updateMax(windowHeight: number, documentHeight) {
    this.progressBar.setAttribute('max', String(documentHeight - windowHeight));
    this.ticking = false;
  }

  componentDidLoad() {
    this.onResize({});
    this.onScroll({});
  }

  render() {
    return (
      <div
        class={{
          'floating-header': true,
          [this.activeClassName]: this.isActive,
        }}
      >
        <div class="floating-header-logo" />
        <span class="floating-header-divider">&mdash;</span>
        <div class="floating-header-title">LOL</div>

        <progress
          class="progress"
          value="0"
          ref={el => (this.progressBar = el as HTMLElement)}
        >
          <div class="progress-container">
            <span class="progress-bar" />
          </div>
        </progress>
      </div>
    );
  }
}
