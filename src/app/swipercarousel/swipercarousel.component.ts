import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';

import { SwiperComponent, EventsParams } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination, FreeMode, Navigation, Thumbs, SwiperOptions, Swiper } from "swiper";
import { PaginationOptions } from "swiper/types/modules/pagination";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, FreeMode, Navigation, Thumbs]);

import { DefaultService } from 'jacob-mott-site';
//import { DefaultService, MypingGet200Response } from 'jacob-mott-site';
import { HttpClient } from "@angular/common/http";
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-swipercarousel',
  templateUrl: './swipercarousel.component.html',
  styleUrls: ['./swipercarousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SwipercarouselComponent implements OnInit, AfterViewInit {

  @ViewChild('newSwiper', { static: false }) newSwiper?: SwiperComponent;
  @ViewChild('newThumbsSwiper', { static: false }) newThumbsSwiper?: SwiperComponent;

  imagesNotLoadedYet: boolean = true;
  currentRepo: any;
  images: any[] = [];
  myPagination: PaginationOptions = {
    clickable: true,
    bulletClass: 'swiper-pagination-bullet'
  };
  private slides: any;

  private slides2: any;
  
  config: SwiperOptions;
  thumbConfig: SwiperOptions;

  mainSwiper!: Swiper;
  thumbSwiper!: Swiper;


  constructor(private defaultService: DefaultService, private sharedService: SharedService, private http: HttpClient) {
    this.myPagination = {
      clickable: true,
      bulletClass: 'swiper-pagination-bullet'
    };

    

    this.config = {
      thumbs: { swiper: this.newThumbsSwiper?.swiperRef },
      loop: true,
      navigation: true,
      spaceBetween: 5,
      grabCursor: true,
      effect: "coverflow",
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      controller: { control: this.newThumbsSwiper?.swiperRef },

    };

    this.thumbConfig = {
      spaceBetween: 2,
      slidesPerView: 10,
      freeMode: true,
      watchSlidesProgress: true,
      loop: true,
      slideToClickedSlide: true,
      controller: { control: this.newSwiper?.swiperRef },
      //on: {
      //  click: (): void => {
      //    console.log("called me here222222!");
      //    let mainSwiper = this.newSwiper?.swiperRef;
      //    //console.log(mainSwiper.clickedIndex);
//
      //    if (typeof mainSwiper !== 'undefined') {
      //      console.log("its undefined");
      //    }         
      //    if (typeof this.newSwiper !== 'undefined') {
      //      console.log("its undefined2222");
      //    }              
      //    mainSwiper?.slideTo(2);
      //  }
      //},

    };
    //let newThumbsSwiper = this.newThumbsSwiper;
    //newThumbsSwiper!.onAny((eventName: string, ...args: any[]): void => {
    //  console.log('Event: ', eventName);
    //  console.log('Event data: ', args);
    //})

  }


 setSwiperInstance(swiper: any) {
  this.slides = swiper;
  }

  onRepoChanged(repo: any) {
    this.imagesNotLoadedYet = true;
    this.currentRepo = repo;
    this.images = [];
 
    this.http.get<any>('https://syb32bcis4.execute-api.us-east-1.amazonaws.com/prod/gitrepoimages?repoName=' + this.currentRepo.name).subscribe(data => {
      let myList = data.list;
      let images = this.images;
      myList.forEach(function (value: any) {
        images.push({ 'url': value.url });
      });
      this.initizliazeAll();
      this.imagesNotLoadedYet = false;
      this.myPagination = {
        clickable: true,
        bulletClass: 'swiper-pagination-bullet'
      };
   

    });
    //this.newSwiper.thumbsSwiper = this.newThumbsSwiper;
  }


  ngOnInit(): void {

    this.sharedService.dataTransferObservable.subscribe(repo => {
      this.onRepoChanged(repo);
    })

    this.myPagination = {
      clickable: true,
      bulletClass: 'swiper-pagination-bullet'
    };


    //this.newSwiper.controller.control = this.newThumbsSwiper;
    //this.newThumbsSwiper.controller.control = this.newSwiper;


  }



  onSwiper(swiper: any) {
    //console.log(swiper.itera);
    //console.log(swiper.watchSlidesProgress);
    //swiper.thumbsSwiper = this.thumbsSwiper;
    //this.slides = swiper.swiperRef.virtual;
    //console.log("Here in onSwiper checking index");
    //console.log(typeof this.slides);
  }
  onSlideChange() {
    //console.log('slide change');
  }

  onSwiper2(swiper: any) {
    //console.log(swiper.itera);
    console.log(swiper.watchSlidesProgress);
    this.slides2 = swiper;
    //let newSwiper = this.newSwiper;
    //let newThumbsSwiper = this.newThumbsSwiper;
    //this.thumbConfig?.on.click = function () {
    //  console.log("called me here!");
    //  newSwiper?.slideTo(newThumbsSwiper.activeIndex);
    //};  
    //on: {
    //  click: function () {
    //    console.log("called me here!");
    //    newSwiper.slideTo(newThumbsSwiper.activeIndex);
    //  }
    //}      

  }
  onSlideChange2() {
    //console.log('slide2 change');



  }

  ngAfterViewInit(): void {
    console.log(this.newSwiper);
    //this.initizliazeAll();
    //console.log(this.newSwiper.swiperRef);
    //Swiper instance will be displayed in console
  }
  

  initizliazeAll(): void{
    
    this.mainSwiper = this.newSwiper?.swiperRef!;
    this.thumbSwiper = this.newThumbsSwiper?.swiperRef!;

    this.config = {
      thumbs: { swiper: this.newThumbsSwiper?.swiperRef },
      loop: true,
      navigation: true,
      spaceBetween: 5,
      grabCursor: true,
      effect: "coverflow",
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      controller: { control: this.newThumbsSwiper?.swiperRef },
      on: {
        click: (): void => {
          //console.log("called me here222222!");
          let mainSwiper = this.newSwiper?.swiperRef;
          //let thumbSwiper = this.newThumbsSwiper?.swiperRef;          
          //console.log(mainSwiper.clickedIndex);

          if (typeof mainSwiper !== 'undefined') {
            //console.log("its undefined");
          }         
          if (typeof this.newSwiper !== 'undefined') {
            //console.log("its undefined2222");
          }              
          //console.log(mainSwiper?.clickedIndex);
          //mainSwiper?.slideToLoop(thumbSwiper?.clickedIndex! - (slidesPerView2)+offset);
        }
      },
    };

    let length = (this.images.length/10);
    let imagesLength = this.images.length;
    let slidesPerView2 = 10;
    let offset = 0;
    if (length < 0){
      slidesPerView2 = imagesLength;
      offset = 1;
    }
    let doLoop = false;
    //console.log('images length? '+imagesLength);
    //console.log('slidesPerView2? '+slidesPerView2);    
    //if (imagesLength > slidesPerView2){
    //  doLoop = true;
    //}
    //console.log('doloop?'+doLoop);
    this.newSwiper?.swiperRef.slideToLoop(0, 0);
    this.newThumbsSwiper?.swiperRef.slideToLoop(0, 0);    
    this.thumbConfig = {
      spaceBetween: 2,
      slidesPerView: slidesPerView2,
      freeMode: true,
      watchSlidesProgress: true,
      loop: false,
      controller: { control: this.newSwiper?.swiperRef },
      on: {
        click: (): void => {
          //console.log("called me here222222!");
          let mainSwiper = this.newSwiper?.swiperRef;
          let thumbSwiper = this.newThumbsSwiper?.swiperRef;          
          //console.log(mainSwiper.clickedIndex);

          if (typeof mainSwiper !== 'undefined') {
            //console.log("its undefined");
          }         
          if (typeof this.newSwiper !== 'undefined') {
            //console.log("its undefined2222");
          }              
          console.log(thumbSwiper?.clickedIndex);
          mainSwiper?.slideToLoop(thumbSwiper?.clickedIndex!);
        }
      },

    };
  }

}
