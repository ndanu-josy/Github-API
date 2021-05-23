import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMycustomDirective]'
})
export class MycustomDirectiveDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('teal');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
