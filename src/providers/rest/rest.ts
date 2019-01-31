import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Service aka provider for API calls. 

@Injectable()
export class RestProvider {

	apiUrl = "https://jsonplaceholder.typicode.com";
	baseExerciseUrl = "https://wger.de/api/v2/exercise/?format=json&language=2";
  url = "";
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
    this.http.get(this.baseExerciseUrl).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });}


getExercisesWithFilter(type: String, equipment: String){
  //build url based on parameter values

  console.log(equipment);
  console.log(type);

  if(equipment != undefined && type != undefined){
    this.url = this.baseExerciseUrl + "&equipment=" + equipment + "&muscles=" + type;
  }else if(equipment == undefined && type != ""){
    this.url = this.baseExerciseUrl + "&muscles=" + type;
  }else if(equipment != "" && type == undefined){
    this.url = this.baseExerciseUrl + "&equipment=" + equipment;
  }else if(equipment == undefined && type == undefined){
    this.url = this.baseExerciseUrl;
  }

  console.log(this.url);

return new Promise(resolve => {
    this.http.get(this.url).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });}

}