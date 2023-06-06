import { Directive, HostBinding, HostListener, OnInit } from "@angular/core";


@Directive({
    selector : '[hoverDirective]'
})
export class HoverDirective implements OnInit{
    
    @HostBinding('style.backgroundColor') bgColor = "";
    
    ngOnInit(): void {
        this.bgColor = "yellow";
    }

    @HostListener('mouseenter')
    onMouseEnter(){
        this.bgColor = "red";
    }

    @HostListener('mouseleave')
    onMouseLeave(){
        this.bgColor = "yellow";
    }

}