import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdditionPage } from './addition.page';

describe('AdditionPage', () => {
  let component: AdditionPage;
  let fixture: ComponentFixture<AdditionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdditionPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdditionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
