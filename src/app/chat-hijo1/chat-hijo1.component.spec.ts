import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatHijo1Component } from './chat-hijo1.component';

describe('ChatHijo1Component', () => {
  let component: ChatHijo1Component;
  let fixture: ComponentFixture<ChatHijo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatHijo1Component]
    });
    fixture = TestBed.createComponent(ChatHijo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
