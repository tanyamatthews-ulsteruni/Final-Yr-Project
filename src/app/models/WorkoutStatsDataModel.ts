export class WorkoutStatsDataModel {

	public countOfWorkout: number;
	public lastWorkoutDay: any;
	public lastWorkoutName: any;

    constructor(){
    	this.countOfWorkout = 0;
    	this.lastWorkoutDay = '';
    	this.lastWorkoutName = '';
    }

}