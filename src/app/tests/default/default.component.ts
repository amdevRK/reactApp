import { Component, OnInit } from '@angular/core';

import { HttpService } from "./../../_shared/services/http/http.service";
@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  constructor(
    private http: HttpService
  ) { }

  ngOnInit() {
    this.http.get('testlibrary').subscribe(
      data => {
        console.log('data', data)
      },
      err => {
        console.log('err', err)
      }
    )
  }

}
