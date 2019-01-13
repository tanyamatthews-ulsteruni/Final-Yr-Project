export class ReminderPreferencesDataModel {

	public enableReminders: string;
	public frequency: string; 
	public time: string; 

    constructor(){
    	this.enableReminders = "";
    	this.frequency = "";
    	this.time = ""; 
    }

}