import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatHijo2Component } from './chat-hijo2.component';

describe('ChatHijo2Component', () => {
  let component: ChatHijo2Component;
  let fixture: ComponentFixture<ChatHijo2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatHijo2Component]
    });
    fixture = TestBed.createComponent(ChatHijo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
