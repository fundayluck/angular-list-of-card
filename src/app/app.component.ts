import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./card/card.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, CardComponent, CommonModule]
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: '../assets/images/tree.jpeg',
      username: 'nature',
      content: 'I saw this neat tree today.'
    },
    {
      title: 'Snowy Mountain',
      imageUrl: '../assets/images/mountain.jpeg',
      username: 'mountainlover',
      content: 'Here is a picture of a snowy mountain.'
    },
    {
      title: 'Mountain Biking',
      imageUrl: '../assets/images/biking.jpeg',
      username: 'Biking12312',
      content: 'I did some biking today.'
    },

  ]
}
