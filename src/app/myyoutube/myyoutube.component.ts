import { Component, OnInit } from '@angular/core';
import {YouTubePlayerModule} from '@angular/youtube-player';
//import { DefaultService, MypingGet200Response } from 'jacob-mott-site';
import {HttpClient} from "@angular/common/http";
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-myyoutube',
  templateUrl: './myyoutube.component.html',
  styleUrls: ['./myyoutube.component.scss']
})
export class MyyoutubeComponent implements OnInit {


  currentRepo: any;
  videos: any[] = [];
  //posts$!: Observable<MypingGet200Response>;
  constructor(private sharedService: SharedService, private http:HttpClient) {

  }
  //constructor(private service: GithubService) { }

  apiLoaded = false;
  height: number = 360;
  width: number = 360





  ngOnInit(): void {
    this.sharedService.dataTransferObservable.subscribe(repo => {
      this.onRepoChanged(repo);
    })

    if (!this.apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
    
    
    

  }

  onRepoChanged(repo:any) {
    this.currentRepo = repo;
    console.log("THIS IS YOUTUBE app! I GOT THE REPO CHANGE: "+repo.name);
    this.http.get<any>('https://syb32bcis4.execute-api.us-east-1.amazonaws.com/prod/gitrepoyoutubevideos?repoName='+this.currentRepo.name).subscribe(data => {
      this.videos = [];
      let myList = data.list;
      let videos = this.videos;
      myList.forEach(function (value:any) {
        videos.push(value.id);
      }); 
    });     

  }

}
