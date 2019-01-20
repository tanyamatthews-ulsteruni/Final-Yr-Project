export class WorkoutPreferencesDataModel {

	public fitnessLevel: string;
    public location: string;
    public type: string;
    public dayOfWorkout: string;
    
    constructor(){
    	this.fitnessLevel = ""; 
    	this.location = ""; 
    	this.type = "";
    	this.dayOfWorkout = "";
    }

}