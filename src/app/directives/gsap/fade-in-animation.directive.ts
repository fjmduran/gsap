import { Directive, OnInit, ElementRef } from '@angular/core';
import { CoreAnimationDirective } from './core-animation.directive';

@Directive({
  selector: '[fadeInAnimation]'
})
export class FadeInAnimationDirective extends CoreAnimationDirective implements OnInit {
  constructor(protected element: ElementRef) {
    super(element);
  }

  ngOnInit() {
    // perform animation
    this.animateIn();
  }

  protected animateIn() {
    this.timeline.from(this.element.nativeElement, this.duration, {opacity:'0', x:-200, ease:"elastic.out"}, this.delay);
    super.animateIn();
  }
}