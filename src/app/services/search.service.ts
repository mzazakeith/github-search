import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable()
export class SearchService {
    private username: string;
    private clientid = 'ab51d69caa86e6369538';
    private clientsecret = '796506b309482f7eac7b8aaec91a8cb37da113e5';

    constructor(private http: Http) {
        console.log('Service is now ready');
        this.username = 'mzazakeith';
    }

    getProfileInfo() {
        return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret).pipe(map(res => res.json()));
    }

    getProfileRepos() {
        return this.http.get(' https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret).pipe(map(res => res.json()));
    }
    updateProfile(username:string){
        this.username = username;
    }


}
