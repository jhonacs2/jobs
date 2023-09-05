import {
  AfterViewInit,
  ChangeDetectorRef,
  Directive,
  DoCheck,
  ElementRef,
  HostListener,
  NgModule,
  Optional
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgModel} from '@angular/forms';

@Directive({
  selector: '[dInputText]',
  host: {
    class:'d-input-text'
  }
})
export class dInputText implements DoCheck, AfterViewInit {
  @HostListener('input', ['$event'])
  onInput(): void {
    this._updateFilledState();
  }

  filled: boolean = false;

  constructor(public elementRef: ElementRef<HTMLInputElement>,
              private _cd: ChangeDetectorRef,
              @Optional() public ngModel: NgModel) {
  }

  ngAfterViewInit(): void {
    this._updateFilledState();
    this._cd.detectChanges();
  }

  ngDoCheck(): void {
    this._updateFilledState();
  }

  private _updateFilledState(): void {
    this.filled = (this.elementRef.nativeElement.value?.length > 0) || (this.ngModel?.model?.length > 0);
  }
}

@NgModule({
  declarations: [dInputText],
  exports: [dInputText],
  imports: [CommonModule]
})
export class InputTextModule {
}
