import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCard } from './profile-card/profile-card';

@Component({
  imports: [RouterOutlet, ProfileCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  fullName = 'John Paul S. David';
  location = 'San Fernando, Pampanga';
  email = 'johnpauldavid.27@gmail.com';
  phone = '0947 292 6365';

  profile = 'I am currently in my 3rd Year of IT Web Development. I enjoy learning new skills and applications that will help with my career path. The continued advancement of technology has enabled my course to expand further in knowledge as well as additions of new tech that will aid in the creation of new websites and applications. To innovate something out of existence is a challenge worth taking to create and design a thought into something concrete that’s unique and amazing.';

  technicalProficiencies = [
    {
      category: 'Frontend',
      items: ['HTML and CSS', 'JavaScript', 'TypeScript', 'Angular', 'Vue']
    },
    {
      category: 'Backend & Database',
      items: ['PHP', 'MongoDB']
    },
    {
      category: 'Design',
      items: ['Graphic Design']
    }
  ];



  message = 'Ignore the impulse to click!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You've ignored the warning ${this.clickCount} time(s).`;
  }
}
