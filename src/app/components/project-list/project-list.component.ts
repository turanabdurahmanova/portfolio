import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  allWorks: any[] = [];
  filteredWorks: any[] = [];
  skipId: number = 0;
  paginations: any;
  works: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.works = [
      {
        id: 1,
        img: './assets/imgs/3in.png',
        title: 'New Learning',
        shortDesc: 'News Exchange System',
        technologies: ['Angular 9'],
        site: 'http://3in.sinaps.az/',
      },
      {
        id: 2,
        img: './assets/imgs/esgeremektub.png',
        title: 'Əsgərə məktub',
        shortDesc: 'Asan Konulluler',
        technologies: [' HTML ', 'SASS', ' JQUERY ', ' BOOTSTRAP '],
        site: 'https://esgeremektub.az/',
      },
    ];
    this.getAllWorks();
  }

  goToWorkDetailPage(work: any) {
    this.router.navigate(['/detail', work.id]);
    this.sharedService.work = work;
  }

  getAllWorks() {
    // this.contentfulService.getWorks().then((works) => {
    //   this.allWorks = works;
    //   const paginationCount = Math.ceil(this.allWorks.length / 6);
    //   this.paginations = Array(paginationCount).fill((x, i) => i);
    //   this.generatePaginationQuery();
    // });
  }

  generatePaginationQuery() {
    this.filteredWorks = [];
    // setTimeout(() => {
    //   this.skipId = +this.route.snapshot.paramMap.get('skip');
    //   let limit;
    //   let skipVal = this.allWorks.length - 6 - (this.skipId - 1) * 6;
    //   if (this.paginations.length > 1) {
    //     if (this.skipId <= this.paginations.length && this.skipId > 0) {
    //       if (this.allWorks.length - 6 - (this.skipId - 1) * 6 < 0) {
    //         skipVal = 0;
    //         limit = this.allWorks.length % 6;
    //       } else {
    //         limit = 6;
    //       }

    //       if (this.allWorks.length > 0) {
    //         const query = {
    //           sys: { type: 'Array' },
    //           skip: skipVal,
    //           limit: limit,
    //         };

    //         this.contentfulService.getWorks(query).then((works) => {
    //           this.filteredWorks = works;
    //         });
    //       } else {
    //         this.generatePaginationQuery();
    //       }
    //     } else {
    //       this.router.navigate(['/error']);
    //     }
    //   } else {
    //     console.log(this.paginations.length);
    //   }
    // }, 200);
  }
}
