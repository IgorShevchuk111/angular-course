import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDHideElement]'
})
export class DHideElementDirective {

  @Input() set appDHideElement(condition: boolean){
    if (condition) {
      this.viewcontainer.createEmbeddedView(this.templateRef)
    } else {
      this.viewcontainer.clear()
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewcontainer: ViewContainerRef
  ) { }

}
