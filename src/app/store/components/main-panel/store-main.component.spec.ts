import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChunksPipe } from 'src/app/common/pipes/chunk.pipe';

import { StoreMainComponent } from './store-main.component';

describe('StoreMainComponent', () => {
  let component: StoreMainComponent;
  let fixture: ComponentFixture<StoreMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreMainComponent, ChunksPipe],
    }).compileComponents();

    fixture = TestBed.createComponent(StoreMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
