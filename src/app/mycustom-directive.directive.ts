import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMycustomDirective]'
})
export class MycustomDirectiveDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#fca311');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
