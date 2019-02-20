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

    setLocation(val){
        this.location = val;
    }

    getLocation(){
        return this.location;
    }


    getFitnessLevel(){
        return this.fitnessLevel;
    }

    setFitnessLevel(val){
        this.fitnessLevel = val;
    }

    getType(){
        return this.type;
    }

    setType(val){
        this.type = val;
    }

    getDayOfWorkout(){
        return this.dayOfWorkout;
    }

    setDayOfWorkout(val){
        this.dayOfWorkout = val;
    }

}