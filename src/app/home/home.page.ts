import { Component, ElementRef, ViewChild  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';
import { ApiClientService } from '../api-services/api-client.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild(IonCard, { read: ElementRef }) card: ElementRef<HTMLIonCardElement>;

  private animation: Animation;
  public users = [];

  user: string;

  constructor(private animationCtrl: AnimationController, private activeroute: ActivatedRoute, private router:Router, private api: ApiClientService) {
    this.activeroute.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation()!.extras.state){
        this.user = this.router.getCurrentNavigation()!.extras.state!['user'];
      }
    });
  }
  
  ngAfterViewInit() {
    this.api.getUsers().subscribe((data)=>{
      this.users = data;
    });
    
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(1500)
      .iterations(Infinity)
      .direction('alternate')
      .fromTo('background', 'blue', 'var(--background)');
  }

  play() {
    if(this.animation.isRunning())
    {   
      this.animation.stop();
    } else {
      this.animation.play();
    }
  }

}
