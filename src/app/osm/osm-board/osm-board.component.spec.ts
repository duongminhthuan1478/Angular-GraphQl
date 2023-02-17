import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsmBoardComponent } from './osm-board.component';

describe('OsmBoardComponent', () => {
  let component: OsmBoardComponent;
  let fixture: ComponentFixture<OsmBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsmBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OsmBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
