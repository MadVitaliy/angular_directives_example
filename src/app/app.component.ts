import { Component, OnInit } from '@angular/core';
import {Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isSpecial = true;
  isActive = true;
  
  nullCustomer = null;
  currentCustomer = {
    name: 'Laura'
  };

  item: Item; // defined to demonstrate template context precedence
  items: Item[];

  currentItem: Item;

  itemsNoTrackByCount   = 0;
  itemsWithTrackByCount = 0;
  itemIdIncrement = 1;

  ngOnInit() {
    this.resetItems();
  }

  isActiveToggle() {
    this.isActive = !this.isActive;
  }

  giveNullCustomerValue() {
    this.nullCustomer = 'Kelly';
  }

  resetItems() {
    this.items = Item.items.map(item => item.clone());
    this.currentItem = this.items[0];
    this.item = this.currentItem;
  }

  resetList() {
    this.resetItems();
    this.itemsWithTrackByCount = 0;
    this.itemsNoTrackByCount = 0;
  }

  changeIds() {

    this.items.forEach(i => i.id += 1 * this.itemIdIncrement);
    this.itemsNoTrackByCount = ++this.itemsNoTrackByCount;
    this.itemsWithTrackByCount = ++this.itemsWithTrackByCount;
  }

  trackByItems(index: number, item: Item): number { return item.id; }
  trackById(index: number, item: any): number { return item.id; }
}
