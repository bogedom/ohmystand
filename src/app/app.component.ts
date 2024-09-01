import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import * as THREE from 'three';
// @ts-ignore
import FOG from 'vanta/dist/vanta.fog.min';
import { DOCUMENT } from '@angular/common';
import { LayoutComponent } from './core/layout/layout/layout.component';


@Component({
  selector: 'oms-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private el: ElementRef) {
  }

  ngOnInit(): void {
    this.initVantaEffect();
  }

  private initVantaEffect(): void {
    const vanta =  FOG({
      el: this.el.nativeElement.parentElement.parentElement,
      THREE: THREE,
      highlightColor: '#00e8ff',
      midtoneColor: '#ff6596',
      lowlightColor: '#ce73ff',
      baseColor: '#fff248',
      blurFactor: 0.4,
      speed: 0.7,
      zoom: 0.7,
      shininess: 10,
    });

    setTimeout(() => {
      vanta.resize();
    })
  }
}
