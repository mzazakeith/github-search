import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../users';
import {Repos} from '../repos';

@Injectable()
export class GithubrequestService {
    users: User;
    repos: Repos;


    constructor(private http: HttpClient ) {
        this.users = new User ('', '', '', '', 0, new Date(), 0, 0);
        this.repos = new Repos('', '', '', new Date());
    }

    gitUser(searchName) {
        interface ApiResponse {
            name: string;
            login: string;
            avatar_url: string;
            html_url: string;
            public_repos: number;
            created_at: Date;
            followers: number;
            following: number;
        }
        let promise = new Promise((resolve, reject) => {
            this.http.get<ApiResponse>('https://api.github.com/users/' + searchName + '?access_token=' + environment.myApi).toPromise().then(getResponse => {
                this.users.name = getResponse.name;
                this.users.login = getResponse.login;
                this.users.avatar_url = getResponse.avatar_url;
                this.users.html_url = getResponse.html_url;
                this.users.public_repos = getResponse.public_repos;
                this.users.created_at = getResponse.created_at;
                this.users.followers = getResponse.followers;
                this.users.following = getResponse.following;
                resolve();
            });
        });
        return promise;
    }
    getUserRepos(searchName) {
        interface ApiResponse {
            name: string;
            html_url: string;
            description: string;
            created_at: Date;
        }

        let myPromise = new Promise((resolve, reject) => {
            this.http.get<ApiResponse>('https://api.github.com/users/' + searchName + '/repos?order=created&sort=asc?access_token=' + environment.myApi).toPromise().then(getRepoResponse => {
                this.newRepo = getRepoResponse;
                resolve();
            });
        });
        return myPromise;
    }
    gitRepos(searchName, toShow) {
        interface ApiResponse {
            items:any;
        }
        let promise = new Promise((resolve, reject) => {
            this.http.get<ApiResponse>('https://api.github.com/search/repositories?q=' + searchName + '&per_page=' + toShow + '&sort=forks&order=asc?access_token=' + environment.myApi).toPromise().then(getRepoResponse => {
                this.searchRepo = getRepoResponse.items;
                resolve();
            });
        });
        return promise;
    }
}
