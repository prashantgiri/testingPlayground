// import { Component, ElementRef } from '@angular/core';
// import { HighlightDirective } from './highlight.directive';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';

// @Component({
//   selector: 'app-highlight',
//   template: `
//               <p appHighlight> Default color </p>
//               <p appHighlight="red"> Added colot</p>
//             `
// })
// export class HighlightDirectiveHostComponent{

// }


// describe('HighlightDirective', () => {
//   let fixture: ComponentFixture<HighlightDirectiveHostComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [],
//       declarations: [HighlightDirectiveHostComponent],
//       providers : []
//     });
//     fixture = TestBed.createComponent(HighlightDirectiveHostComponent);
//     fixture.detectChanges();
//   });

//   it('should create an instance HighlightDirective', () => {
//     let el:ElementRef =  fixture.debugElement.queryAll(By.css('p'))[0];
//     const directive = new HighlightDirective(el);
//     expect(directive).toBeTruthy();
//   });

//   xit('should highlight component element with default color', () => {
//     let element = fixture.debugElement.queryAll(By.css('p'))[0];
//     expect(element.nativeElement.style.backgroundColor).toBe('yellow')
//   });

//   xit('should highlight component element with provided color', () => {
//     let element = fixture.debugElement.queryAll(By.css('p'))[1];
//     let directive = element.injector.get(HighlightDirective);
//     expect(element.nativeElement.style.backgroundColor).toBe(directive.bgColor);
//   });

// });
