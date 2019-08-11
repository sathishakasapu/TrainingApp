import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';  
import { Training } from '../training'; 
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { Messages } from '../messages';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.less']
})
export class TrainingComponent implements OnInit {

  dataSaved = false;  
  trainingForm: any;  
  trainingIdUpdate = null;  
  message = null;  
  
  constructor(private formbulider: FormBuilder, private trainingService: TrainingService) { }  
  
  ngOnInit() {  
    this.trainingForm = this.formbulider.group({  
      Name: ['', [Validators.required]],  
      StartDate: ['', [Validators.required]],  
      EndDate: ['', [Validators.required]],  
    }, {validator: this.dateLessThan('StartDate', 'EndDate')} );  
  }

  dateLessThan(from: string, to: string) {
    return (group: FormGroup): {[key: string]: any} => {
      let f = group.controls[from];
      let t = group.controls[to];

      if ((f.value && t.value) &&  (f.value > t.value)) {
        return {
          dates: Messages.DateValidationMessage
        };
      }
      return {};
    }
}

  onFormSubmit() {  
    this.dataSaved = false;  
    const training = this.trainingForm.value;  
    this.CreateTraining(training);  
    this.trainingForm.reset();  
  }  

  CreateTraining(training: Training) {  
    if (this.trainingIdUpdate == null) {  
      this.trainingService.createTraining(training).subscribe(  
        () => {  
          this.dataSaved = true;  
          this.message = training.Name + ' ' + Messages.SuccessMessage + ' ' + this.calculateDateDiff(training.StartDate, training.EndDate);  
          this.trainingIdUpdate = null;  
          this.trainingForm.reset();  
        }  
      );  
    }  
  }
  
  calculateDateDiff(date1, date2){
      let diffc = new Date(date1).getTime() - new Date(date2).getTime();
      let days = Math.round(Math.abs(diffc/(1000*60*60*24)));
      return days;
    }

  resetForm() {  
    this.trainingForm.reset();  
    this.message = null;  
    this.dataSaved = false;  
  }  

}
