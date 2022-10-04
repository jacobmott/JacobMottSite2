import { Component, OnInit, Renderer2, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import 'jquery';
import 'src/assets/scrollHorizontally/fullpage.scrollHorizontally.min.js';
import 'fullpage.js/dist/fullpage.extensions.min'
declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit{
  config: any;
  fullpage_api: any;

  constructor(private renderer: Renderer2) {

    // for more details on config options please visit fullPage.js docs
    this.config = {

      // fullpage options
      licenseKey: '',
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
      menu: '#menu',
      navigation: true,
      sectionsColor: ['#e2e5ee', '#e2e5ee', '#e2e5ee', '#e2e5ee', '#e2e5ee'],
      normalScrollElements: '#mytopapp-my3d, #ng-srollingmylist, #siteAdminAppmy3d, #mytopcarousel',
      keyboardScrolling:  false,
      autoScrolling: true,
      scrollHorizontally: false,
      continuousHorizontal: true,
      fitToSection: true,
      controlArrows: true,
      continuousVertical: true,
      scrollHorizontallyKey: '',
      // events callback
      afterLoad: (origin: any, destination: any, direction: any) => {
        // console.log(destination);
        //this.fullpage_api.setResponsive(false);
        //this.fullpage_api.setAllowScrolling(true);
      },
      afterRender: () => {
        // console.log('afterRender');
      },
      afterResize: (width: any, height: any) => {
        // console.log('afterResize' + width + ' ' + height);
      },
      afterSlideLoad: (section: any, origin: any, destination: any, direction: any) => {
        // console.log(destination);
      }
    };
  }

  
  ngOnInit() {
    
  }

  ngAfterViewInit () { 
    console.log("CAllaed it");

    $('#fullpage').fullpage(this.config);
    this.fullpage_api = $.fn.fullpage;
    //this.fullpage_api.setAllowScrolling(true);
    //this.fullpage_api.setAllowScrolling(false,'left, right');
  }


  //addSection() {
  //  // change background color
  //  this.config['sectionsColor'] = Array(6).fill(0).map(x => this.randomColor());
//
  //  // creating the section div
  //  const section = this.renderer.createElement('div');
  //  this.renderer.addClass(section, 'section');
  //  this.renderer.setProperty(section, 'innerHTML', '<h3>New Section</h3>');
  //  // adding section
  //  this.renderer.appendChild(this.fp_directive.nativeElement, section);
//
  //  this.fullpage_api.build();
  //}
//
  //removeLast() {
  //  const lastSection = this.fp_directive.nativeElement.lastChild;
//
  //  if (lastSection.isEqualNode(this.fullpage_api.getActiveSection().item)) {
  //    this.fullpage_api.moveSectionUp();
  //  }
  //  lastSection.remove();
//
  //  this.fullpage_api.build();
  //}

  randomColor() {
    return '#' + Math.random().toString(16).slice(-3);
  }





}
