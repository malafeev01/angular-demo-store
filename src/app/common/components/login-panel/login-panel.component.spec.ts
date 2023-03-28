import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NzFormModule } from 'ng-zorro-antd/form';

import { LoginPanelComponent } from './login-panel.component';

describe('AuthDialogComponent', () => {
  let component: LoginPanelComponent;
  let fixture: ComponentFixture<LoginPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPanelComponent],
      imports: [NzFormModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
