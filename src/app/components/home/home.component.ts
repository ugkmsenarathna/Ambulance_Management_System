import { DataService } from './../../services/data.service';
import { AmbulanceData } from './../../models/data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ambulance: AmbulanceData[] = [];
  count: number;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.GetAmbulanceDatas().subscribe(
      x => this.ambulance.push(new AmbulanceData(x)));
  }
}

