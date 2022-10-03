import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('fullpageRef') fp_directive!: ElementRef;
  config: any;
  fullpage_api: any;



  constructor(private renderer: Renderer2) {

    // for more details on config options please visit fullPage.js docs
    this.config = {

      // fullpage options
      licenseKey: '96NKK-U7RAJ-QKU57-D97J9-LCCKN',
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
      menu: '#menu',
      navigation: true,
      sectionsColor: ['#e2e5ee', '#e2e5ee', '#e2e5ee', '#e2e5ee', '#e2e5ee'],
      normalScrollElements: '#mytopapp-my3d, #ng-srollingmylist, #siteAdminAppmy3d, #mytopcarousel',
      keyboardScrolling:  false,
      // events callback
      afterLoad: (origin: any, destination: any, direction: any) => {
        // console.log(destination);
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

  getRef(fullPageRef: any) {
    this.fullpage_api = fullPageRef;
  }

  addSection() {
    // change background color
    this.config['sectionsColor'] = Array(6).fill(0).map(x => this.randomColor());

    // creating the section div
    const section = this.renderer.createElement('div');
    this.renderer.addClass(section, 'section');
    this.renderer.setProperty(section, 'innerHTML', '<h3>New Section</h3>');
    // adding section
    this.renderer.appendChild(this.fp_directive.nativeElement, section);

    this.fullpage_api.build();
  }

  removeLast() {
    const lastSection = this.fp_directive.nativeElement.lastChild;

    if (lastSection.isEqualNode(this.fullpage_api.getActiveSection().item)) {
      this.fullpage_api.moveSectionUp();
    }
    lastSection.remove();

    this.fullpage_api.build();
  }

  randomColor() {
    return '#' + Math.random().toString(16).slice(-3);
  }





}
