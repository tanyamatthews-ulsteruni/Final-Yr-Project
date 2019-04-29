import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Service aka provider for API calls. 

@Injectable()
export class RestProvider {

	apiUrl = "https://jsonplaceholder.typicode.com";
  format = "format=json&language=2";
	exerciseUrl = "http://wger.de/api/v2/exercise?format=json&language=2&limit=150&status=2"; //limited to 150 to reduce load times on poor networks.
  exerciseMoreInfoUrl = "http://wger.de/api/v2/exerciseinfo/"
  exerciseImgUrl = "http://wger.de/api/v2/exerciseimage/?exercise=";
  url = "";

  apiKey = 'fad7d1a9f71113d3e08ae7af891f7ec0051217bb';
  workoutUrl = "http://wger.de/api/v2/workout";
  workoutsDetailExtension = "/canonical_representation/";

	constructor(public http: HttpClient) {
      this.getExercises();
	}

ionViewDidLoad(){
  this.getExercises();
}

getExercises(){
  return new Promise(resolve => {
    this.http.get(this.exerciseUrl).subscribe(data => {
      resolve(data);
      //get exercise data content.
    }, err => {
      console.log(err);
      //print error if data content can not accessed.
    });
  });}

getExercisesWithFilter(type: String, equipment: String){
  //build url based on parameter values supplied
  if(equipment != undefined && type != undefined){
  //if both equipment and type parameter provided, add these to URL.
    this.url = this.exerciseUrl + "&equipment=" + equipment + "&muscles=" + type;
  }else if(equipment == undefined && type != ""){
  //if both type parameter provided, add this to URL.
    this.url = this.exerciseUrl + "&muscles=" + type;
  }else if(equipment != "" && type == undefined){
  //if equipment parameter provided, add this to URL.
    this.url = this.exerciseUrl + "&equipment=" + equipment;
  }else if(equipment == undefined && type == undefined){
  //if neither equipment nor type parameter provided, don't add these to URL. Keep basic URL.
    this.url = this.exerciseUrl;
  }

  return new Promise(resolve => {
    this.http.get(this.url).subscribe(data => {
      resolve(data);
      //get exercise data content.
    }, err => {
      console.log(err);
      //print error if data content can not accessed.
    });
  });}

  getExerciseImage(id: any){
    //get image for exercise id
    this.url = this.exerciseImgUrl + id + "&" + this.format;
    //build url 
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
        'Authorization': 'Token fad7d1a9f71113d3e08ae7af891f7ec0051217bb'
      })
    }
    return new Promise(resolve => {
    this.http.get('http://wger.de/api/v2/workout/', httpOptions).subscribe(data => { 
      resolve(data);
    }, err => {
      console.log(err);
    });
  });}

 

  getCurrentWorkoutData(id:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token fad7d1a9f71113d3e08ae7af891f7ec0051217bb'
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