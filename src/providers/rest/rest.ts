import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Service aka provider for API calls. 

@Injectable()
export class RestProvider {

	apiUrl = "https://jsonplaceholder.typicode.com";
	baseExerciseUrl = "https://wger.de/api/v2/exercise/info?format=json&language=2";
  baseExerciseImgUrl = "https://wger.de/api/v2/exerciseimage/";
  url = "";

	constructor(public http: HttpClient) {
  		console.log('Hello RestServiceProvider Provider');
      this.getExercises();
	}

ionViewDidLoad(){
  this.getExercises();
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

  getExerciseImage(id: any){
    //get image for exercise id
    console.log(id);
    this.url = this.baseExerciseImgUrl + id + "/";
    console.log(this.url);
    return new Promise(resolve => {
    this.http.get(this.url).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });}
}