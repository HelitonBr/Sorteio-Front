import { HostApiService } from './../shared/service/hostApiService';
import { Response } from './../shared/models/response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SorteioService {

  constructor(private http: HttpClient) { }

  public buscaTwitters(): Observable<Response> {
    return this.http.get<Response>(`${HostApiService.hostApi}/api/sorteio`);
  }
}
