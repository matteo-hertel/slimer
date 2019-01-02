import { Component, Element } from '@stencil/core';

@Component({
  tag: 'floating-header',
  styleUrl: 'floating-header.css',
  shadow: true,
})
export class FloatingHeader {
  @Element() private element: HTMLElement;

  componentDidLoad() {
    var progressBar = this.element.shadowRoot.querySelector('progress');
    var header = this.element;
    var title = this.element.shadowRoot.querySelector('.post-full-title');
    var lastScrollY = window.scrollY;
    var lastWindowHeight = window.innerHeight;
    var lastDocumentHeight = document.documentElement.scrollHeight;
    var ticking = false;
    function onScroll() {
      lastScrollY = window.scrollY;
      requestTick();
    }
    function onResize() {
      lastWindowHeight = window.innerHeight;
      lastDocumentHeight = document.documentElement.scrollHeight;
      requestTick();
    }
    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(update);
      }
      ticking = true;
    }
    function update() {
      var trigger = title.getBoundingClientRect().top + window.scrollY;
      var triggerOffset = 100 + 35;
      var progressMax = lastDocumentHeight - lastWindowHeight;
      // show/hide floating header
      if (lastScrollY >= trigger + triggerOffset) {
        header.classList.add('floating-active');
      } else {
        header.classList.remove('floating-active');
      }
      progressBar.setAttribute('max', String(progressMax));
      progressBar.setAttribute('value', String(lastScrollY));
      ticking = false;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, false);
    update();
  }

  render() {
    return (
      <div>
        <div class="post-full-title">PAPOIIIIIIII</div>
        <progress id="file" max="100" value="70">
          70%
        </progress>
      </div>
    );
  }
}
