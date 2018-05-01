import { Component, OnInit } from '@angular/core';
import { GitsearchService } from '../gitsearch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
}) 
export class HomeComponent implements OnInit {

   profile:any[];
   repos: any[];
   username: string;
   
  constructor(private gitserchService : GitsearchService){

  

  this.gitserchService.getProfileData().subscribe(profile => {
    console.log(profile);
    this.profile = profile;

    });
    this.gitserchService.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this.repos =repos;
    })


  }
  

  ngOnInit() {
  }

}
