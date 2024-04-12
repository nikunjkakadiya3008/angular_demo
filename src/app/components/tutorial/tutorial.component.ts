import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take, timer } from 'rxjs';
import { tabMenus } from 'src/app/shared/constant';
import Swiper from 'swiper';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrl: './tutorial.component.css',
})
export class TutorialComponent implements OnInit {
  tabMenu = tabMenus;
  hintText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius blandit dolor, sit amet
      condimentum eros vulputate sed. Aenean maximus dui a lobortis pharetra. Suspendisse potenti. Nulla facilisi.
      Suspendisse potenti. Integer porta nec arcu molestie sodales. Pellentesque et diam tellus. Quisque at nisi
      id neque tempus varius. Donec vestibulum nisi ac risus laoreet lobortis. Cras tristique et sem mollis
      vehicula. Nulla maximus urna a leo consectetur, at fringilla odio volutpat. Praesent ultricies nunc eget
      tellus convallis, non hendrerit augue semper. Maecenas elit ex, lobortis at sapien sed, fermentum volutpat
      sem.`;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const swiper = new Swiper('.swiper-main', {
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
              swiper.slideTo(5);
              doc.click();
            }
          });
      }
    });

    swiper.slides.forEach((slide, index) => {
      slide.addEventListener('click', () => {
        swiper.slideTo(index);
        let doc: HTMLElement;
        if (index == 0) {
          doc = document.getElementById('intro_id');
        } else if (index == 1) {
          doc = document.getElementById('timer_id');
        } else if (index == 2) {
          doc = document.getElementById('selfie_id');
        } else if (index == 3) {
          doc = document.getElementById('video_id');
        } else if (index == 4) {
          doc = document.getElementById('prep_id');
        } else if (index == 5) {
          doc = document.getElementById('chat_id');
        } else if (index == 6) {
          doc = document.getElementById('meetup_id');
        } else if (index == 7) {
          doc = document.getElementById('tutorial_id');
        }
        doc.click();
      });
    });
  }

  backToLast() {
    this.location.back();
  }
}
