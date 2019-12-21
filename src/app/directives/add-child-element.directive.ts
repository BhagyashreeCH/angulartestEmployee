import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appAddChildElement]'
})
export class AddChildElementDirective  implements OnInit{

  constructor(private eref: ElementRef, private rendereEle: Renderer2) { }
  ngOnInit(){
    this.eref.nativeElement.style.color = 'green';
    this.eref.nativeElement.style.background= 'yellow';
  let spantag = this.rendereEle.createElement('span');
  let spanText = this.rendereEle.createText(" ,text style added from custom directive");
  this.rendereEle.appendChild(spantag, spanText);
  this.rendereEle.appendChild(this.eref.nativeElement, spantag);
  // this.rendereEle.setStyle(this.eref.nativeElement, 'color', 'blue');
  // this.eref.nativeElement.style.color = 'green';
  }
}
