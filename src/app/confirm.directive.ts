import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appConfirm]',
})
export class ConfirmDirective implements OnInit {
  width = 0;

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  ngOnInit() {
    this.width = this.elementRef.nativeElement.offsetWidth;
  }
}
