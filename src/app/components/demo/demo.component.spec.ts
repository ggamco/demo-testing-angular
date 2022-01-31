import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComponent } from './demo.component';

describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('cuando pulse Click me, deberia cambiar el valor de isOn', () => {
    const underTest = new DemoComponent();
    expect(underTest.isOn).toBe(false);
    underTest.clicked();
    expect(underTest.isOn).toBe(true);
    underTest.clicked();
    expect(underTest.isOn).toBe(false);
  });

  it('cuando pulse Click me, el mensaje deberia cambiar con respecto a isOn', () => {
    const underTest = new DemoComponent();
    expect(underTest.message).withContext("Al iniciar debe ser off").toEqual("Off");
    underTest.clicked();
    expect(underTest.message).withContext("Al pulsar por primera vez, cambia a On").toEqual("On");
    underTest.clicked();
    expect(underTest.message).withContext("Al pulsar nuevamente deberia cambiar a off").toEqual("Off");
  })

});
