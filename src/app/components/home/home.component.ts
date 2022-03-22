import { DataService } from './../../services/data.service';
import { AmbulanceData } from './../../models/data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  patients: AmbulanceData[];
  count: number;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    let ambulances: AmbulanceData[] = [];
    this.dataService.GetAmbulanceDatas().subscribe(
      (data: AmbulanceData) => {
        ambulances.push(data);
       });
    this.count = ambulances.length;
  }
}

