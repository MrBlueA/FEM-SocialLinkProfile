import { Component } from '@angular/core';
import {ProfileComponent} from '../profile/profile.component';
import {LinkButtonComponent} from '../link-button/link-button.component';

@Component({
  selector: 'app-profile-card',
  imports: [
    ProfileComponent,
    LinkButtonComponent
  ],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
  linkList = [
    {
      name: 'GitHub',
      link: 'https://github.com/MrBlueA'
    },
    {
      name: 'Frontend Mentor',
      link: 'https://www.frontendmentor.io/profile/MrBlueA'
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/agl-ab5aa228a/'
    }
  ];
}
