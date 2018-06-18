import { Component, OnInit } from '@angular/core';
import {SearchService} from '../services/search.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    private profile: any[];
    private repos: any[];
    username: string;

    constructor(private profileService: SearchService) {
    }

    findProfile() {
        this.profileService.updateProfile(this.username);
        this.profileService.getProfileInfo().subscribe(profile => {
            // console.log(profile);
            this.profile = profile;
        });
        this.profileService.getProfileRepos().subscribe(repos => {
            console.log(repos);
            this.repos = repos;
        });
    }

    ngOnInit() {
    }


}
