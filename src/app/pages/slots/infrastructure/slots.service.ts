import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

const BaseUrl = 'https://cms.crocobet.com/integrations'

@Injectable({ providedIn: 'root' })
export class SlotsService {
  private readonly http = inject(HttpClient);

  // TODO: define category model
  getCategories (): Observable<any> {
    const params = { include: 'games' };

    return this.http.get<any>(`${ BaseUrl }/v2/slot/categories`, { params });
  }

    // TODO: define provider model
    getProviders (): Observable<any> {
      const params = {
        type: 'slot',
        platform: 'desktop'
      };

      return this.http.get<any>(`${ BaseUrl }`, { params });
    }

    // TODO: define slot model
    getSlotsByProvider (provider = 'TPG@bet-construct'): Observable<any> {
      return this.http.get<any>(`${ BaseUrl }/v2/slot/providers/${ provider }`);
    }
}
