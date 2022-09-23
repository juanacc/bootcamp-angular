import { Component, OnInit } from '@angular/core';
import { Supermarket } from '../supermarket.model';
import { SupermarketService } from '../supermarket.service';

@Component({
  selector: 'app-supermarket-list',
  templateUrl: './supermarket-list.component.html',
  styleUrls: ['./supermarket-list.component.css']
})
export class SupermarketListComponent implements OnInit {
  supermarkets: Supermarket[] = [];
  isLoading: boolean = false;
  constructor(private supermarketService: SupermarketService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.supermarketService.getAllSupermarkets().subscribe(supers => {
      this.isLoading = false;
      this.supermarkets = supers;
      console.log('Supermercados: ', this.supermarkets);
    });
  }

}
