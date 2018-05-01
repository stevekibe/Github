import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class GitsearchService {
  updateProfile(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  private username:string;
  private clientid ='bd8f2833719c1973852b';
  private clientsecret='522cfeb88cded237daafcefc36a15acaf1ccbbf5';

  constructor(private http:Http) {
    console.log("service is working");
    this.username = 'stevekibe';
   }

   getProfileData(){
     return this.http.get("https://api.github.com/users/stevekibe ", + "?client_id="+ this.clientid + "&client_secret"+ this.clientsecret).map(res => res.json());
   };

   getProfileRepos(){
     return this.http.get("https://api.github.com/users/stevekibe/repos ", + "?client_id="+ this.clientid + "&client_secret"+ this.clientsecret).map(res => res.json());

   };

   


}
