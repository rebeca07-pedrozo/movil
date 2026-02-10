import { Component } from '@angular/core';
import { IonDatetime } from '@ionic/angular/standalone';
import { IonFab, IonFabButton, IonFabList, IonIcon } from '@ionic/angular/standalone';
import { IonAvatar } from '@ionic/angular/standalone';
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/angular/standalone';





import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
  
})
export class Tab2Page {

  constructor() {
    addIcons({ add });

    
  }
  
}
export class ExampleComponent {}


