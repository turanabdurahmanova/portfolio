import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {
  persons: any;
  searchedWorks = '';
  // profileImgs: Entry<any>[] = [];
  opened: boolean = false;
  education: boolean = false;
  experience: boolean = false;
  contacts: boolean = false;
  skills: boolean = true;
  constructor(private router: Router) {}

  ngOnInit() {
    this.persons = ['education', 'skills', 'experience', 'contacts'];

    // this.contentfulService
    //   .getProfileImgs()
    //   .then((profileImgs) => (this.profileImgs = profileImgs));

    this.opened = true;
  }

  getChosenSpeciality(chosenSpeciality?: string) {
    this.education = false;
    this.experience = false;
    this.contacts = false;
    this.skills = false;
    if (chosenSpeciality == 'education') {
      this.education = true;
    } else if (chosenSpeciality == 'experience') {
      this.experience = true;
    } else if (chosenSpeciality == 'contacts') {
      this.contacts = true;
    } else if (chosenSpeciality == 'skills') {
      this.skills = true;
    }
  }

  isHidden() {
    return this.router.url.includes('search');
  }

  search(searchForm: NgForm) {
    this.opened = false;
    this.router.navigate(['/search', this.searchedWorks, '1']);
  }

  isActive(activated: string, current: string) {
    return activated === current;
  }

  isMenuOpen() {
    this.opened = !this.opened;
  }
}
