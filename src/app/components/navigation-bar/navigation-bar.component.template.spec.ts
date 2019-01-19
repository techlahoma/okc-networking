import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NavigationBarComponent } from './navigation-bar.component';
import { DebugElement } from '@angular/core';

fdescribe('NavigationBarComponent', () => {
  let fixture: ComponentFixture<NavigationBarComponent>;
  let component: NavigationBarComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationBarComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationBarComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('has a home tab', () => {
    const element: DebugElement = fixture.debugElement.query(By.css('.home-tab'));
    expect(element.nativeElement.textContent).toEqual('Home');
  });
});