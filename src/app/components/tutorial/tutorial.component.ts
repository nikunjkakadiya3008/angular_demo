import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WalkthroughComponent } from 'angular-walkthrough';
import { take, timer } from 'rxjs';
import { tabMenus } from 'src/app/shared/constant';
import Swiper from 'swiper';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrl: './tutorial.component.css',
})
export class TutorialComponent implements OnInit {
  @ViewChild('intro') intro;
  @ViewChild('timer') timer;
  @ViewChild('selfie') selfie;
  @ViewChild('tutorial') tutorial;
  @ViewChild('meetup') meetup;
  @ViewChild('chat') chat;
  @ViewChild('prep') prep;
  @ViewChild('video') video;
  @ViewChild('location') location_;

  activeIndex: number = -1;
  tabMenu = tabMenus;
  swiper: Swiper;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.swiper = new Swiper('.swiper-main', {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
    });

    this.route.parent?.queryParams.subscribe((params) => {
      if (params.fromChat) {
        timer(1000)
          .pipe(take(1))
          .subscribe(() => {
            let doc = document.getElementById('chat_id');
            if (doc) {
              this.swiper.slideTo(5);
              doc.click();
            }
          });
      }
    });

    this.swiper.slides.forEach((slide, index) => {
      slide.addEventListener('click', () => {
        this.swiper.slideTo(index);
        let doc: HTMLElement;
        doc = document.getElementById(this.tabMenu[index].id);
        doc.click();
      });
    });
  }

  openWalkthrough(index: number) {
    this.activeIndex = index;
    this.swiper.slideTo(index);
    if (WalkthroughComponent.walkthroughHasShow()) {
      const button = document.querySelector('.wkt-finish-link');

      if (button) {
        const clickEvent = new Event('click');
        button.dispatchEvent(clickEvent);
      }
    }
    setTimeout(() => {
      switch (index) {
        case 0:
          this.intro.open();
          break;
        case 1:
          this.timer.open();
          break;
        case 2:
          this.selfie.open();
          break;
        case 3:
          this.video.open();
          break;
        case 4:
          this.prep.open();
          break;
        case 5:
          this.chat.open();
          break;
        case 6:
          this.meetup.open();
          break;
        case 7:
          this.tutorial.open();
          break;
        case 8:
          this.location_.open();
          break;
        default:
          break;
      }
    }, 200);
  }

  backToLast() {
    this.location.back();
  }
}
