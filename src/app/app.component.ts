import { Component } from '@angular/core';
import { WishItem } from 'src/shared/model/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items = [
    new WishItem('To Learn Angular'),
    new WishItem('To Change Job'),
    new WishItem('To be the Rich'),
  ];
  title = 'wishlist';
}
