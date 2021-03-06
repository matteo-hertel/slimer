import { Component, Listen, Prop, State, h } from '@stencil/core';

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
  @Prop() activeClassName: string = 'FloatingHeader--active';

  @Listen('scroll', { target: 'window' })
  private onScroll(ev) {
    this.requestTick(this.updateValue.bind(this, window.scrollY));
  }

  @Listen('resize', { target: 'window' })
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
    if (!this.progressBar) return;
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
          FloatingHeader: true,
          [this.activeClassName]: this.isActive,
        }}
      >
        <slot name="logo" />
        <slot name="divider" />
        <slot name="title" />
        <slot name="share" />

        <progress
          class="progress"
          value="0"
          ref={el => (this.progressBar = el as HTMLElement)}
        />
      </div>
    );
  }
}
