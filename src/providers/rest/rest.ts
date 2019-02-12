import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Service aka provider for API calls. 

@Injectable()
export class RestProvider {

	apiUrl = "https://jsonplaceholder.typicode.com";
  format = "format=json&language=2";
	exerciseUrl = "https://wger.de/api/v2/exercise?format=json&language=2&limit=150&status=2"; //limited to 150 to reduce load times on poor networks.
  exerciseMoreInfoUrl = "https://wger.de/api/v2/exerciseinfo/"
  exerciseImgUrl = "https://wger.de/api/v2/exerciseimage/?exercise=";
  url = "";

  apiKey = 'ce3f97690a6d06c2ac2d5adb22128a1b6f4e64e4';
  workoutUrl = "https://wger.de/api/v2/workout";
  workoutsDetailExtension = "/canonical_representation/";

	constructor(public http: HttpClient) {
  		console.log('Hello RestServiceProvider Provider');
      this.getExercises();
	}

ionViewDidLoad(){
  this.getExercises();
}

getExercises(){
  return new Promise(resolve => {
    this.http.get(this.exerciseUrl).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });}

getExercisesWithFilter(type: String, equipment: String){
  //build url based on parameter values
  if(equipment != undefined && type != undefined){
    this.url = this.exerciseUrl + "&equipment=" + equipment + "&muscles=" + type;
  }else if(equipment == undefined && type != ""){
    this.url = this.exerciseUrl + "&muscles=" + type;
  }else if(equipment != "" && type == undefined){
    this.url = this.exerciseUrl + "&equipment=" + equipment;
  }else if(equipment == undefined && type == undefined){
    this.url = this.exerciseUrl;
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
    this.url = this.exerciseImgUrl + id + "&" + this.format;
    console.log(this.url);
    return new Promise(resolve => {
    this.http.get(this.url).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });}

  getExerciseMoreData(id:any){
    this.url = this.exerciseMoreInfoUrl + id + "/?" + this.format;
    return new Promise(resolve => {
    this.http.get(this.url).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });}

  getAllWorkoutData(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token ce3f97690a6d06c2ac2d5adb22128a1b6f4e64e4'
      })
    }
    return new Promise(resolve => {
    this.http.get('https://wger.de/api/v2/workout/', httpOptions).subscribe(data => { 
      resolve(data);
    }, err => {
      console.log(err);
    });
  });}

  getCurrentWorkoutData(id:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token ce3f97690a6d06c2ac2d5adb22128a1b6f4e64e4'
      })
    }
    this.url = this.workoutUrl + '/' + id + this.workoutsDetailExtension + "?" + this.format;
        return new Promise(resolve => {
    this.http.get(this.url, httpOptions).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
  }

}