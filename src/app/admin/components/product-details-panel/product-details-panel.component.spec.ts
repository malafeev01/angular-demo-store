import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { ProductDetailsPanelComponent } from './product-details-panel.component';

describe('ProductDetailsPanelComponent', () => {
  let component: ProductDetailsPanelComponent;
  let fixture: ComponentFixture<ProductDetailsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDetailsPanelComponent],
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

    fixture = TestBed.createComponent(ProductDetailsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
