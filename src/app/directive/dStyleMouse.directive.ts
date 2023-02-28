import { style } from '@angular/animations';
import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDStyleMouse]'
})
export class DStyleMouseDirective {

  @Input() dStyle: {color?: string, fontWeight?: string}
  
  constructor( private el: ElementRef, private r: Renderer2 ) { }

  @HostListener('mouseenter') onMouseenter(){
   this.r.setStyle(this.el.nativeElement, 'color', this.dStyle.color),
   this.r.setStyle(this.el.nativeElement, 'fontWeight', this.dStyle.fontWeight)
  }
  @HostListener('mouseleave') onMouseleave(){
    this.r.setStyle(this.el.nativeElement, 'color', null)
    this.r.setStyle(this.el.nativeElement, 'fontWeight', null)
  }
}
