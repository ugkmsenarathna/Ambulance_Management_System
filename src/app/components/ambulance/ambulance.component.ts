import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AmbulanceData } from '../../models/data';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-patient',
  templateUrl: './ambulance.component.html',
  styleUrls: ['./ambulance.component.css']
})
export class AmbulanceComponent implements OnInit {
  constructor(private dataService: DataService, private formBuilder: FormBuilder) { }
  public ambulance: AmbulanceData[];
  ambulanceForm: FormGroup;
  modalMod: string;
  openedAmbulance: AmbulanceData;

  ngOnInit(): void {

    this.dataService.GetAmbulanceDatas().subscribe(

      (result: any ) => {
        this.ambulance = result;
        console.log(this.ambulance);
       });
    this.ambulanceForm = this.formBuilder.group({
      licensePlate: '',
      vehicleModel: '',
      other: ''
    });
  }

  AddPatientButton() {
    this.modalMod = 'add';
    this.ClearPatientForm();
  }
  AddUpdatePatient() {
    switch (this.modalMod) {
      case 'add':
        this.ambulanceForm.value.id = this.dataService.GetAmbulanceDatas().subscribe();
        this.dataService.AddPatient(this.ambulanceForm.value, 'add');
        this.ClearPatientForm();
        break;
      case 'update':
        this.ambulanceForm.value.id = this.dataService.GetAmbulanceDatas().subscribe();
        this.dataService.AddPatient(this.ambulanceForm.value, 'update');
        break;
    }
  }
  RemovePatient(patient: AmbulanceData) {
    this.dataService.removeRecord(patient).subscribe();
  }
  ClearPatientForm() {
    this.ControlSetValueLoop(undefined);
  }
  EditOpenModal(pati: AmbulanceData) {
    this.modalMod = 'update';
    this.openedAmbulance = pati;
    this.ControlSetValueLoop(pati);
  }
  ControlSetValueLoop(pati: AmbulanceData) {
    const patientControls = this.ambulanceForm.controls;
    for (const key in patientControls) {
      if (patientControls.hasOwnProperty(key)) {
        const control = patientControls[key];
        if (pati === undefined) {
          control.setValue('');
        } else {
          control.setValue(pati[key]);
        }
      }
    }
  }
}
