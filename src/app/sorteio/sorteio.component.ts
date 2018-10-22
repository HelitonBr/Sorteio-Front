import { Twitter } from './../shared/models/twitter';
import { Http } from '@angular/http';
import { SorteioService } from './sorteio.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-sorteio',
  templateUrl: './sorteio.component.html',
  styleUrls: ['./sorteio.component.css'],
  providers: [SorteioService]
})

export class SorteioComponent implements OnInit {

  private sorteioService: SorteioService;
  private http: Http;
  private tweet: Twitter;


  constructor(_sorteioService: SorteioService,
              _http: Http) {
               this.sorteioService = _sorteioService;
               this.http = _http;
   }

  ngOnInit() {
  }

  onBuscarTwitter() {
    this.sorteioService.buscaTwitters().subscribe(
      response => {
        if (response.success || response == null) {
          console.log('sucesso');
          this.tweet = response.result;
        }
      }
      error => {
      console.log('error');
      });

  }
