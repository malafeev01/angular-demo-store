import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { OrderDetailsPanelComponent } from './order-details-panel.component';

describe('OrderDetailsPanelComponent', () => {
  let component: OrderDetailsPanelComponent;
  let fixture: ComponentFixture<OrderDetailsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderDetailsPanelComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: {
              subscribe(): number {
                return 1;
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderDetailsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
