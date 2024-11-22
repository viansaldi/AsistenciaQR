import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot(), IonicStorageModule.forRoot()],
      providers: [provideRouter([]), provideHttpClient()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });  
  
  it('should find out if the animation is running this must be stopped', () => {
    var r = component.animation.isRunning();
    expect(r).toBeFalse();
  });
  
  it('should play the animation', () => {
    expect(component.play).toBeTruthy();
  });

  it('should find out the animation is running', () => {
    component.play();
    var r = component.animation.isRunning();
    expect(r).toBeTrue();
  });
});
