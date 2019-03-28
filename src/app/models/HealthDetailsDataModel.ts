export class HealthDetailsDataModel {

		public activityLevel: string;
        public age: number;
        public weight:number; 
        public height: number;
        public bmi: any;
        public bmiDescription: any;
        public bmr: any;

    constructor(){
    	this.activityLevel = "";
    	this.age = null;
    	this.weight = null; 
    	this.height = null;
        this.bmi = "No data to calculate, please set health details in the profile section.";
        this.bmiDescription = "";
        this.bmr = "No data to calculate. please set health details in the profile section.";
    }

}

