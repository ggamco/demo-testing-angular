import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatusService } from 'src/app/services/status.service';

import { DemoComponent } from './demo.component';

describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;
  let statusServiceSpy: jasmine.SpyObj<StatusService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoComponent ], providers:[{provide: StatusService, useValue: statusServiceSpy}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    statusServiceSpy = jasmine.createSpyObj('StatusService', ['getStatus'])
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('cuando pulse Click me, deberia cambiar el valor de isOn', () => {
    //Given
    const underTest = new DemoComponent(statusServiceSpy);
    //When
    expect(underTest.isOn).toBe(false);
    //Then
    underTest.clicked();
    expect(underTest.isOn).toBe(true);
    underTest.clicked();
    expect(underTest.isOn).toBe(false);
  });

  it('cuando pulse Click me, el mensaje deberia cambiar con respecto a isOn', () => {
    //given
    const underTest = new DemoComponent(statusServiceSpy);
    statusServiceSpy.getStatus.and.returnValue("On")
    expect(underTest.message).withContext("Al iniciar debe ser off").toEqual("Off");
    //when
    underTest.clicked();
    //Then
    expect(underTest.message).withContext("Al pulsar por primera vez, cambia a On").toEqual("On");
    //And
    statusServiceSpy.getStatus.and.returnValue("Off")
    //When
    underTest.clicked();
    //Then
    expect(underTest.message).withContext("Al pulsar nuevamente deberia cambiar a off").toEqual("Off");
  });



});
