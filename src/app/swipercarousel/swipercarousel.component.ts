import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { PaginationOptions } from "swiper/types/modules/pagination";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

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
export class SwipercarouselComponent implements OnInit {

  imagesNotLoadedYet: boolean = true;
  currentRepo: any;
  images: any[] = [];
  myPagination: PaginationOptions = {
    clickable: true,
    bulletClass: 'swiper-pagination-bullet'
  };

  constructor(private defaultService: DefaultService, private sharedService: SharedService, private http: HttpClient) {
    this.myPagination = {
      clickable: true,
      bulletClass: 'swiper-pagination-bullet'
    };

  }

  onRepoChanged(repo: any) {
    this.imagesNotLoadedYet = true;
    this.currentRepo = repo;
    this.http.get<any>('https://syb32bcis4.execute-api.us-east-1.amazonaws.com/prod/gitrepoimages?repoName=' + this.currentRepo.name).subscribe(data => {
      this.images = [];
      let myList = data.list;
      let images = this.images;
      myList.forEach(function (value: any) {
        images.push({ 'url': value.url });
      });
      this.imagesNotLoadedYet = false;
      this.myPagination = {
        clickable: true,
        bulletClass: 'swiper-pagination-bullet'
      };
    });
  }

  ngOnInit(): void {

    this.sharedService.dataTransferObservable.subscribe(repo => {
      this.onRepoChanged(repo);
    })

    this.myPagination = {
      clickable: true,
      bulletClass: 'swiper-pagination-bullet'
    };

  }




}
