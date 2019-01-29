import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Service aka provider for API calls. 

@Injectable()
export class RestProvider {

	apiUrl = "https://jsonplaceholder.typicode.com";
	baseExerciseUrl = "https://wger.de/api/v2/exercise/";
	//?muscles=1&equipment=3 - barbells for triceps


	constructor(public http: HttpClient) {
  		console.log('Hello RestServiceProvider Provider');
	}


getUsers() {
  return new Promise(resolve => {
    this.http.get(this.apiUrl+'/users').subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}

getExercises(){
  return new Promise(resolve => {
    this.http.get(this.baseExerciseUrl + "?format=json" + "&language=2").subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });}

}