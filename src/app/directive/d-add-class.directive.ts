import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDAddClass]'
})
export class DAddClassDirective {

  @Input('appDAddClass') class:any

  constructor( private el:  ElementRef, private r: Renderer2 ) { }

  @HostListener('click') onClick(){
    this.r.addClass(this.el.nativeElement, this.class)
  }

  @HostListener('mouseleave') onLeave(){
    this.r.removeClass(this.el.nativeElement, this.class)
  }

}
