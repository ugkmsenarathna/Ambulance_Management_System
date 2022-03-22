import { DataService } from './../../services/data.service';
import { AmbulanceData } from './../../models/data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public ambulance: AmbulanceData[];
  count: number;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.GetAmbulanceDatas().subscribe(
      (result: any ) => {
        // this.ambulance = result[1];
        console.log(result);
      });
    this.count = this.ambulance.length;
  }
}

