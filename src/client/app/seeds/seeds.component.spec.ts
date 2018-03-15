import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';

import { SeedsModule } from './seeds.module';

export function main() {
  describe('Seeds component', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [SeedsModule]
      });
    });

    it(
      'should work',
      async(() => {
        TestBed.compileComponents().then(() => {
          const fixture = TestBed.createComponent(TestComponent);
          const seedsDOMEl = fixture.debugElement.children[0].nativeElement;

          expect(seedsDOMEl.querySelectorAll('h2')[0].textContent).toEqual(
            'Seeds'
          );
        });
      })
    );
  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-about></sd-about>'
})
class TestComponent {}
