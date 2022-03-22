import { AmbulanceData } from './../models/data';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  public BASE_URL = 'http://localhost:8285/ambulnce-mngmnt/';
  private headers;

  constructor(private httpClient: HttpClient) { }

  // patientData: AmbulanceData[] = this.GetExampleJSON().ambulanceRecords;

  // GetExampleJSON() {
  //   const exampleJSON = {
  //     ambulanceRecords: [
  //       { id: 1, licensePlate: 'Rohit', vehicleModel: 'Joes', other: 'IN-3123'}
  //     ]
  //   };
  //   return exampleJSON;
  // }



  GetAmbulanceDatas() {

    return this.httpClient.get(this.BASE_URL + 'api/view-all/' , {headers: this.headers});
  }
  AddPatient(newPatient: AmbulanceData) {
    // this.patientData.push(newPatient);
  }
}
