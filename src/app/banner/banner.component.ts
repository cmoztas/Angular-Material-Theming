import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() message = '';
  @Input() type: 'success' | 'info' | 'warn' | 'none' = 'none';

  @HostBinding('class')
  get hostClass():string {
    if (this.type !== 'none') {
      return `app-banner-${this.type}`;
    } else {
      return '';
    }
  }

  constructor() { }

  ngOnInit(): void { }

}
