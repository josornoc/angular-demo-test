import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';

import { ThemesModule } from './themes.module';

export function main() {
  describe('Themes component', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [ThemesModule]
      });
    });

    it(
      'should work',
      async(() => {
        TestBed.compileComponents().then(() => {
          const fixture = TestBed.createComponent(TestComponent);
          const themesDOMEl = fixture.debugElement.children[0].nativeElement;

          expect(themesDOMEl.querySelectorAll('h2')[0].textContent).toEqual(
            'Themes'
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
