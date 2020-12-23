import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  work: any;
  skipId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.work = this.sharedService.work;
    console.log(this.work, 'workkk');

    // const workId = this.route.snapshot.paramMap.get('id');
    // this.skipId = this.route.snapshot.paramMap.get('skip');
    // const pageType = this.router.url.substring(9, 10);
    // if (pageType === 'l') {
    //   this.contentfulService.getWork(workId).then((work) => {
    //     this.work = work;
    //   });
    // } else if (pageType === 'o') {
    //   this.contentfulService.getOtherWork(workId).then((work) => {
    //     this.work = work;
    //   });
    // }
  }

  isNumber() {
    const key: number = +this.skipId;
    return key;
  }

  goToProjects() {
    this.location.back();
  }
}
