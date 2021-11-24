import { TestBed, fakeAsync } from '@angular/core/testing';
import { QuillModule } from 'ngx-quill';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture; 

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [QuillModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    await fixture.whenStable();
    await fixture.whenStable();
  });

  it('shows a flake', fakeAsync(() => {
    fixture.detectChanges();
    expect().nothing();
  }));
});
