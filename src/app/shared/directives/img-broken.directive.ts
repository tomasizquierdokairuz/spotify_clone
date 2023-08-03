import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @HostListener('error') handleError():void{
    const elNative = this.elHost.nativeElement
    console.log('🔴 Está imagen está rota');
    elNative.src = '../../../assets/images/error.jpg'
  }
  constructor(private elHost: ElementRef) { 
    
  }

}
