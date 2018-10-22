import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class HostApiService {

  public static hostApi = 'http://localhost:52751';

  constructor(private http: Http) { }
}
