import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  works: any[] = [];
  constructor() {}

  ngOnInit() {
    this.works = [
      {
        id: 1,
        img: './assets/imgs/3in-logo.svg',
        title: 'New Learning',
        shortDesc:
          'Psixoloji konsultasiyalar, kouçinq konsultasiyası, korporativ analizlər, təlim xidmətləri.',
        technologies: ['Angular 9'],
        site: 'http://3in.sinaps.az/',
      },
      {
        id: 2,
        img: './assets/imgs/esgeremektub-2.svg',
        title: 'Əsgərə məktub',
        shortDesc:
          '"ASAN Könüllüləri" Təşkilatının "Əsgərə Məktub" layihəsi çərçivəsində könüllülərimiz və xidmət almağa gələn vətəndaşlarımız igid əsgərlərimizə öz məktublarını ünvanlayırlar.',
        technologies: ['SASS', ' JQUERY ', ' BOOTSTRAP '],
        site: 'https://esgeremektub.az/',
      },
      {
        id: 3,
        img: './assets/imgs/logo-white.png',
        title: 'Asan Learning',
        shortDesc:
          '“İnnovasiyalar Mərkəzi” MMC tərəfindən yüksək ixtisaslı mütəxəssislərin hazırlanması, kadrların karyera inkişafının planlanmasının dəstəklənməsi, bacarıqlarının inkişaf etdirilməsi, kadr potensialının gücləndirilməsi məqsədi ilə dövlət və özəl qurumların ehtiyaclarına uyğun yaradıcı mühit yaratmaqla multi-funksional, fəal və interaktiv təlimlər keçirilməkdədir.          Təlimlərimizin əsas istiqamətlərini şəxsi inkişaf, idarəetmə, keyfiyyət və davamlı təkmilləşmə və yüksək texnologiyalara aid mövzular təşkil edir.',
        technologies: ['Angular 8 '],
        site: 'https://asanlearning.az/',
      },
      {
        id: 4,
        img: './assets/imgs/techland.svg',
        title: 'Techland',
        shortDesc: 'Xəbər saytı',
        technologies: ['Angular 8 '],
        site: 'https://techland.az/',
      },
      {
        id: 5,
        img: './assets/imgs/intransco.svg',
        title: 'İntransco',
        shortDesc: 'Yük daşıma saytı',
        technologies: ['SASS', ' JQUERY ', ' BOOTSTRAP '],
        site: 'https://intransco.rahmanov.info/',
      },
    ];
  }
}
