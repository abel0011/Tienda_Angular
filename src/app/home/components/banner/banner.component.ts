import { Component, OnInit ,AfterViewInit} from '@angular/core';
// import Swiper core and required components
import SwiperCore, { EffectFade, Swiper } from "swiper/core";

// install Swiper components
SwiperCore.use([EffectFade]);
@Component({  
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
