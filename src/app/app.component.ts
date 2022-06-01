import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {MatSelectChange} from '@angular/material/select';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  readonly themeAnchor = this.document.getElementById('app-theme');

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {
  }

  ngOnInit(): void {
    this.setLightTheme();
  }

  setTheme({source}: MatSelectChange): void {
    source.value === 'dark'
      ? this.setDarkTheme()
      : this.setLightTheme();
  }

  setDarkTheme(): void {
    this.renderer.setAttribute(this.themeAnchor, 'href', '/dark-theme.css');
  }

  setLightTheme(): void {
    this.renderer.setAttribute(this.themeAnchor, 'href', '/light-theme.css');
  }
}

