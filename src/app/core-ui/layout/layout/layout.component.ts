import { ApplicationRef, Component, ElementRef, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import * as THREE from 'three';
// @ts-ignore
import FOG from 'vanta/dist/vanta.fog.min';
import { first } from 'rxjs';

@Component({
  selector: 'oms-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet,
    FooterComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {

  constructor(
    private el: ElementRef,
  ) {
    const applicationRef = inject(ApplicationRef);

    applicationRef.isStable.pipe(first((isStable) => isStable)).subscribe(() => {
      setTimeout(() => { this.initVantaEffect(); });
    });
  }

  ngOnInit(): void {

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
  }
}
