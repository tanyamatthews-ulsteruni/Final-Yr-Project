export class WorkoutStatsDataModel {

	public countOfWorkout: number;
	public lastWorkoutDay: any;
	public lastWorkoutName: any;
	public workoutLevel: any;
	public workoutsToNextLevel: any;


    constructor(){
    	this.countOfWorkout = 0;
    	this.lastWorkoutDay = '';
    	this.lastWorkoutName = '';
    	this.workoutLevel = '';
    	this.workoutsToNextLevel = 0;
    }

}