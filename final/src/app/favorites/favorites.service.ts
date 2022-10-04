import { Injectable } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
    constructor(private dataStorageService: DataStorageService) { }

    getMyFavorites() {
        return this.dataStorageService.fetchRecipes();
    }

}
