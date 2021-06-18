import { Component, ElementRef, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ConfirmDirective } from './confirm.directive';

// Host Component Strategy:

@Component({
  template: `<h1 style="width: 100px;" appConfirm>Hello</h1>`,
})
class HostComponent {
  @ViewChild(ConfirmDirective) directiveRef!: ConfirmDirective;
}

describe('ConfirmDirective', () => {
  let fixture: ComponentFixture<HostComponent>;
  let directive: ConfirmDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmDirective, HostComponent],
    });

    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    directive = fixture.componentInstance.directiveRef;
  });

  it('should create an instance', () => {
    expect(directive.width).toBe(100);
  });
});
