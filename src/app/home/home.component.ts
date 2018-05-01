import { Component, OnInit } from '@angular/core';
import { GitsearchService } from '../gitsearch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
}) 
export class HomeComponent implements OnInit {
   
  constructor(private gitserchService : GitsearchService){
    this.gitserchService.gitProfileData().subscribe(profile=> {
    console.log("")
    });


  }

  ngOnInit() {
  }

}
