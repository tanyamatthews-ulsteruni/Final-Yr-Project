webpackJsonp([19],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseUserModel; });
var FirebaseUserModel = /** @class */ (function () {
    function FirebaseUserModel() {
        this.image = "";
        this.name = "";
        this.provider = "";
    }
    return FirebaseUserModel;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HealthDetailsDataModel; });
var HealthDetailsDataModel = /** @class */ (function () {
    function HealthDetailsDataModel() {
        this.activityLevel = "";
        this.age = null;
        this.weight = null;
        this.height = null;
        this.bmi = "No data to calculate, please set health details in the profile section.";
        this.bmiDescription = "";
        this.bmr = "No data to calculate. please set health details in the profile section.";
    }
    return HealthDetailsDataModel;
}());

//# sourceMappingURL=HealthDetailsDataModel.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutStatsDataModel; });
var WorkoutStatsDataModel = /** @class */ (function () {
    function WorkoutStatsDataModel() {
        this.countOfWorkout = 0;
        this.lastWorkoutDay = '';
        this.lastWorkoutName = '';
        this.workoutLevel = '';
        this.workoutsToNextLevel = 0;
        this.lastWorkoutId = 0;
    }
    return WorkoutStatsDataModel;
}());

//# sourceMappingURL=WorkoutStatsDataModel.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_model__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.getCurrentUser = function () {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().onAuthStateChanged(function (user) {
                var userModel = new __WEBPACK_IMPORTED_MODULE_3__user_model__["a" /* FirebaseUserModel */]();
                if (user) {
                    if (user.providerData[0].providerId == 'password') {
                        //use a default image
                        userModel.image = 'http://dsi-vd.github.io/patternlab-vd/images/fpo_avatar.png';
                        userModel.name = user.displayName;
                        userModel.provider = user.providerData[0].providerId;
                        return resolve(userModel);
                    }
                    else {
                        userModel.image = user.photoURL;
                        userModel.name = user.displayName;
                        userModel.provider = user.providerData[0].providerId;
                        return resolve(userModel);
                    }
                }
                else {
                    reject('No user logged in');
                }
            });
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_user_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_chart_js__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_user_model__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_models_HealthDetailsDataModel__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_models_WorkoutStatsDataModel__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_models_GoalStatsDataModel__ = __webpack_require__(916);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//importing chart js. 

//models 




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, userService, authService, alertCtrl, db) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.db = db;
        this.user = new __WEBPACK_IMPORTED_MODULE_7__core_user_model__["a" /* FirebaseUserModel */]();
        this.userHealthDetail = new __WEBPACK_IMPORTED_MODULE_8__app_models_HealthDetailsDataModel__["a" /* HealthDetailsDataModel */]();
        this.workoutStats = new __WEBPACK_IMPORTED_MODULE_9__app_models_WorkoutStatsDataModel__["a" /* WorkoutStatsDataModel */]();
        this.goalStats = new __WEBPACK_IMPORTED_MODULE_10__app_models_GoalStatsDataModel__["a" /* GoalStatsDataModel */]();
        this.updatedProfile = true;
        this.weightGraphData = [];
    }
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.calculateBMI(this.userHealthDetail);
        this.userService.getCurrentUser()
            .then(function (user) {
            _this.user = user;
        }, function (err) { return console.log(err); });
        this.countWorkouts(this.workoutStats);
        this.weightGraphData = this.getWeightOverTime();
        this.barChartData = this.getWorkoutHistory();
        setTimeout(function () {
            _this.generateLineChart(_this.weightGraphData);
            _this.generateDoughnutChart(_this.workoutStats);
            _this.generateBarChart(_this.barChartData);
        }, 700);
        this.getLastWorkout(this.workoutStats);
        this.calculateBMR(this.userHealthDetail);
        this.checkForBadges(this.goalStats);
    };
    HomePage.prototype.logout = function () {
        var _this = this;
        this.authService.doLogout()
            .then(function (res) {
            _this.navCtrl.pop();
        }, function (error) {
            console.log("Logout error", error);
        });
    };
    HomePage.prototype.calculateBMI = function (userHealthDetail) {
        var user = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser;
        var userId = user.uid;
        __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref('/' + userId + '/healthDetails/').once('value').then(function (snapshot) {
            snapshot.forEach((function (childSnapshot) {
                userHealthDetail.weight = childSnapshot.val().weight;
                userHealthDetail.height = childSnapshot.val().height;
                // if height and weight populated, calculate BMI.
                if (userHealthDetail.weight != null || userHealthDetail.height != null) {
                    var heightInMeters = parseInt(userHealthDetail.height) / 100;
                    var heightSq = heightInMeters * heightInMeters;
                    //set bmi value and round to 2 decimal places. 
                    userHealthDetail.bmi = Number(parseInt(userHealthDetail.weight) / heightSq).toFixed(2);
                    var bmi = userHealthDetail.bmi;
                    if (bmi < 18.5) {
                        userHealthDetail.bmiDescription = "Underweight";
                    }
                    else if (bmi > 18.5 && bmi < 25) {
                        userHealthDetail.bmiDescription = "Normal range";
                    }
                    else if (bmi >= 25) {
                        userHealthDetail.bmiDescription = "Overweight";
                    }
                }
            }));
        });
    };
    HomePage.prototype.calculateBMR = function (userHealthDetail) {
        var user = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser;
        var userId = user.uid;
        var bmr;
        __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref('/' + userId + '/healthDetails/').once('value').then(function (snapshot) {
            snapshot.forEach((function (childSnapshot) {
                userHealthDetail.weight = childSnapshot.val().weight;
                userHealthDetail.height = childSnapshot.val().height;
                userHealthDetail.age = childSnapshot.val().age;
                userHealthDetail.activityLevel = childSnapshot.val().activityLevel;
                bmr = (10 * userHealthDetail.weight) + (6.25 * userHealthDetail.height) - (5 * userHealthDetail.age) + 5;
                bmr = bmr * userHealthDetail.activityLevel;
                userHealthDetail.bmr = Math.round(bmr);
            }));
        });
    };
    HomePage.prototype.countWorkouts = function (w) {
        var user = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser;
        var userId = user.uid;
        var count = 0;
        var workoutsToGo = 0;
        var progress = 0;
        __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref('/' + userId + '/workoutHistory/').once('value').then(function (snapshot) {
            w.countOfWorkout = snapshot.numChildren();
            count = snapshot.numChildren();
            if (count < 25) {
                w.workoutLevel = 'Beginner';
                workoutsToGo = 25 - count;
                w.workoutsToNextLevel = workoutsToGo;
            }
            else if (count >= 25 && count < 50) {
                w.workoutLevel = 'Intermediate';
                workoutsToGo = 50 - count;
                w.workoutsToNextLevel = workoutsToGo;
            }
            else if (count >= 50 && count < 100) {
                w.workoutLevel = 'Advanced';
                workoutsToGo = 100 - count;
                w.workoutsToNextLevel = workoutsToGo;
            }
        });
    };
    HomePage.prototype.getLastWorkout = function (w) {
        var user = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser;
        var userId = user.uid;
        __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref('/' + userId + '/workoutHistory/').limitToLast(1).once('value').then(function (snapshot) {
            snapshot.forEach((function (childSnapshot) {
                w.lastWorkoutDay = childSnapshot.val().date.substring(0, 15);
                w.lastWorkoutName = childSnapshot.val().name;
                w.lastWorkoutId = childSnapshot.val().id;
            }));
        });
    };
    //chart historic weight data to show progress 
    HomePage.prototype.getWeightOverTime = function () {
        var user = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser;
        var userId = user.uid;
        var healthDetails = [];
        __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref('/' + userId + '/historicHealthDetails/').once('value').then(function (snapshot) {
            snapshot.forEach((function (childSnapshot) {
                var date = childSnapshot.val().date;
                var weight = childSnapshot.val().weight;
                healthDetails.push({
                    date: date,
                    weight: weight
                });
            }));
        });
        return healthDetails;
    };
    HomePage.prototype.generateLineChart = function (w) {
        var labels = [];
        var weight = [];
        for (var i in w) {
            labels.push(w[i].date.substring(0, 15));
            weight.push(w[i].weight);
        }
        this.lineChart = new __WEBPACK_IMPORTED_MODULE_6_chart_js__["Chart"](this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: "Weight (kg)",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: weight,
                        spanGaps: false,
                    }
                ]
            }
        });
    };
    HomePage.prototype.generateDoughnutChart = function (w) {
        this.doughnutChart = new __WEBPACK_IMPORTED_MODULE_6_chart_js__["Chart"](this.doughnutCanvas.nativeElement, {
            type: 'doughnut',
            data: {
                labels: ["Workouts Completed", "Workouts Needed to Level Up"],
                datasets: [{
                        label: '# of Votes',
                        data: [w.countOfWorkout, w.workoutsToNextLevel],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56",
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ]
                    }]
            }
        });
    };
    HomePage.prototype.logLastWorkout = function (w) {
        var user = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser;
        var userId = user.uid;
        this.db.list(userId + '/workoutHistory/').push({ date: Date(), id: w.lastWorkoutId, name: w.lastWorkoutName });
        var alert = this.alertCtrl.create({
            title: "Workout logged",
            subTitle: "Great news on completing another workout, keep up the brilliant work!",
            buttons: ['OK']
        });
        alert.present();
        //update pie chart 
        this.generateDoughnutChart(w);
    };
    HomePage.prototype.getWorkoutHistory = function () {
        var dec = 0;
        var jan = 0;
        var feb = 0;
        var mar = 0;
        var apr = 0;
        var may = 0;
        var barData = [];
        var user = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser;
        var userId = user.uid;
        __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref('/' + userId + '/workoutHistory/').once('value').then(function (snapshot) {
            snapshot.forEach((function (childSnapshot) {
                var currentDate = childSnapshot.val().date;
                if (currentDate.includes('Dec')) {
                    dec = dec + 1;
                }
                else if (currentDate.includes('Jan')) {
                    jan = jan + 1;
                }
                else if (currentDate.includes('Feb')) {
                    feb = feb + 1;
                }
                else if (currentDate.includes('Mar')) {
                    mar = mar + 1;
                }
                else if (currentDate.includes('Apr')) {
                    apr = apr + 1;
                }
                else if (currentDate.includes('May')) {
                    may = may + 1;
                }
            }));
            barData.push({
                dec: dec,
                jan: jan,
                feb: feb,
                mar: mar,
                apr: apr,
                may: may
            });
        });
        return barData;
    };
    HomePage.prototype.generateBarChart = function (data) {
        this.barChart = new __WEBPACK_IMPORTED_MODULE_6_chart_js__["Chart"](this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: ["Dec", "Jan", "Feb", "Mar", "Apr", "May"],
                datasets: [{
                        label: 'Amount of Workouts',
                        data: [data[0].dec, data[0].jan, data[0].feb, data[0].mar, data[0].apr, data[0].may],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
    };
    HomePage.prototype.checkForBadges = function (g) {
        //check goal count. 
        var user = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser;
        var userId = user.uid;
        __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref('/' + userId + '/goals/otherGoals').once('value').then(function (snapshot) {
            console.log(snapshot);
            snapshot.forEach((function (childSnapshot) {
                if (childSnapshot.val().status == 'Complete') {
                    g.countOfGoals++;
                }
            }));
        });
        __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref('/' + userId + '/goals/weightGoals').once('value').then(function (snapshot) {
            console.log(snapshot);
            snapshot.forEach((function (childSnapshot) {
                if (childSnapshot.val().status == 'Complete') {
                    g.countOfGoals++;
                }
            }));
        });
        __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref('/' + userId + '/goals/workoutGoals').once('value').then(function (snapshot) {
            console.log(snapshot);
            snapshot.forEach((function (childSnapshot) {
                if (childSnapshot.val().status == 'Complete') {
                    g.countOfGoals++;
                    console.log(snapshot);
                }
            }));
        });
        console.log("GOALS = " + g.countOfGoals);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lineCanvas'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "lineCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('doughnutCanvas'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "doughnutCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvas'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "barCanvas", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    \n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content id=\'bg\' padding>\n\n  <img id=\'logo\' alt="logo" src="/assets/imgs/Logo.png" > \n\n\n  <h3>Welcome {{user.name}}</h3>\n  <h5>Your Dashboard</h5>\n\n<!--BADGES-->\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Your Badges</ion-card-title>\n    </ion-card-header>\n    <ion-card-content> \n    <p>Get active to unlock more badges!</p>\n    <ion-grid><ion-row>\n      <ion-col>\n          <div>\n            <img [ngClass]=\'{notAchievedBadge: (goalStats.countOfGoals <1), badge: (goalStats.countOfGoals >0)}\' src=\'../assets/imgs/badges/FirstGoalAchieved.png\'><p>First Goal Completed</p>\n            <img [ngClass]=\'{notAchievedBadge: (goalStats.countOfGoals <10), badge: (goalStats.countOfGoals >9)}\' src=\'../assets/imgs/badges/TenGoalsAchieved.png\'><p>Ten Goals Completed</p>\n            <img [ngClass]=\'{notAchievedBadge: (goalStats.countOfGoals <50), badge: (goalStats.countOfGoals >49)}\' src=\'../assets/imgs/badges/TenGoalsAchieved.png\'><p>Fifty Goals Completed</p>\n          </div>\n        </ion-col>\n        <ion-col>\n          <div>\n            <img [ngClass]=\'{notAchievedBadge: (workoutStats.countOfWorkout < 1), badge: (workoutStats.countOfWorkout > 0)}\' src=\'../assets/imgs/badges/FirstWorkoutAchieved.png\'><p>First Workout</p>\n            <img [ngClass]=\'{notAchievedBadge: (workoutStats.countOfWorkout < 10), badge: (workoutStats.countOfWorkout > 9)}\' src=\'../assets/imgs/badges/TenWorkoutsAchieved.png\'><p>Ten Workouts</p>\n            <img [ngClass]=\'{notAchievedBadge: (workoutStats.countOfWorkout < 50), badge: (workoutStats.countOfWorkout > 49)}\' src=\'../assets/imgs/badges/TenWorkoutsAchieved.png\'><p>Fifty Workouts</p>\n          </div>\n        </ion-col>\n        <ion-col>\n            <div>\n            <img [ngClass]=\'{notAchievedBadge: (updatedProfile == false), badge: (updatedProfile == true)}\' src=\'../assets/imgs/badges/UpdatedProfile.png\'><p>Updated details</p>\n            <img [ngClass]=\'{notAchievedBadge: (workoutStats.workoutLevel == "Beginner"), badge: (workoutStats.workoutLevel != "Beginner")}\' src=\'../assets/imgs/badges/LevelUp.png\'><p>Level up once</p>\n            <img [ngClass]=\'{notAchievedBadge: (workoutStats.workoutLevel != "Advanced"), badge: (workoutStats.workoutLevel == "Advanced")}\' src=\'../assets/imgs/badges/LevelUp.png\'><p>Level up twice</p>\n        </div>\n      </ion-col>\n    </ion-row></ion-grid>\n  </ion-card-content>\n  </ion-card>\n\n<!--Log latest workout again-->\n  <ion-card>\n    <ion-card-header>\n      Log last workout again\n    </ion-card-header>\n    <ion-card-content>\n        <h5>{{workoutStats.lastWorkoutName}}</h5>\n        <button ion-button (click)="logLastWorkout(workoutStats)">Log last workout</button>\n    </ion-card-content>\n  </ion-card>\n\n<!--Workout History Graph-->\n\n  <ion-card>\n      <ion-card-header>\n        Workout History\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #barCanvas></canvas>\n      </ion-card-content>\n    </ion-card>\n\n<!--REASONS TO WORKOUT-->\n\n  <ion-card>\n    <ion-card-header>\n      Reasons to workout\n    </ion-card-header>\n    <ion-card-content>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col><div>\n          <img class=\'dashboardImg\' src="../assets/imgs/dashboard/weight-loss.png">\n          <p>Lose body fat</p>\n          <img class=\'dashboardImg\' src="../assets/imgs/dashboard/strength.png">      \n          <p>Build muscle</p>\n      </div></ion-col>\n      <ion-col><div>\n          <img class=\'dashboardImg\' src="../assets/imgs/dashboard/moon.png">\n          <p>Improve sleep</p>\n          <img class=\'dashboardImg\' src="../assets/imgs/dashboard/meditation.png">\n          <p>Improve your mood</p>\n      </div></ion-col>\n      <ion-col><div>\n          <img class=\'dashboardImg\' src="../assets/imgs/dashboard/boy-broad-smile.png">\n          <p>To have fun</p>\n          <img class=\'dashboardImg\' src="../assets/imgs/dashboard/heart-frequency.png">\n          <p>Reduce risk of diseases</p>\n      </div></ion-col>\n    </ion-row>\n    </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n<!--Weight Graph-->\n  <ion-card>\n      <ion-card-header>\n        <ion-card-title>Weight History</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #lineCanvas></canvas>\n      </ion-card-content>\n  </ion-card>\n\n  <!--Workout Level-->\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Your workout level - {{workoutStats.workoutLevel}}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <h4><span class=\'bigger\'>{{workoutStats.workoutsToNextLevel}} more workouts </span>until you level up - keep up the great work!</h4>\n      <canvas #doughnutCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n\n  <!--BMI Data-->\n\n  <ion-card>\n    <ion-card-header>\n      BMI - Body Mass Index\n    </ion-card-header>\n    <ion-card-content>\n      <p>Weight - {{userHealthDetail.weight}}</p>\n      <p>Height - {{userHealthDetail.height}}</p>\n      <p class=\'bigger\'>BMI - {{userHealthDetail.bmi}}</p>\n      <p class=\'bigger\'>BMI Classification - {{userHealthDetail.bmiDescription}}</p>\n      <p>For more information on BMI you can visit the <a href="https://www.nhs.uk/live-well/healthy-weight/bmi-calculator/">NHS BMI site</a>.</p>\n      <p>BMI is only a guide, and may not be useful if you are of high bone density or muscle mass as this is not reflected in its scaling.</p>\n    </ion-card-content>\n  </ion-card>\n\n  <!--BMR Data-->\n\n <ion-card>\n    <ion-card-header>\n      BMR - Basal Metabolic Rate \n    </ion-card-header>\n    <ion-card-content>\n      <p class=\'bigger\'>{{userHealthDetail.bmr}} kcal</p>\n      <p>Basal metabolic rate (BMR) is the total number of calories that your body needs to perform basic, life-sustaining functions. These basal functions include circulation, breathing and sleeping.</p>\n      <p>For more information on BMR and your metabolism, visit the <a href="https://www.nhs.uk/live-well/healthy-weight/metabolism-and-weight-loss/">NHS Metabolism site</a>.</p>\n    </ion-card-content>\n  </ion-card>\n\n  <!--Workout Summary-->\n\n  <ion-card>\n    <ion-card-header>\n      Workout Summary \n    </ion-card-header>\n    <ion-card-content>\n      <p><span class=\'bigger\'>{{workoutStats.countOfWorkout}}</span> total workouts</p>\n      <p><span class=\'bigger\'>{{workoutStats.lastWorkoutName}}</span> last workout</p>\n      <p><span class=\'bigger\'>{{workoutStats.lastWorkoutDay}}</span> date of last workout</p>\n    </ion-card-content>\n  </ion-card>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__core_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_health_details_update_health_details__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__update_reminder_details_update_reminder_details__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__update_workout_details_update_workout_details__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__update_user_details_update_user_details__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_user_model__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_user_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_models_HealthDetailsDataModel__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_models_ReminderPreferencesDataModel__ = __webpack_require__(917);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_models_WorkoutPreferencesDataModel__ = __webpack_require__(502);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//page imports 




//database imports 




//data model imports 



var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, db, userService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.userService = userService;
        this.user = new __WEBPACK_IMPORTED_MODULE_6__core_user_model__["a" /* FirebaseUserModel */]();
        this.userHealthDetail = new __WEBPACK_IMPORTED_MODULE_10__app_models_HealthDetailsDataModel__["a" /* HealthDetailsDataModel */]();
        this.userReminderDetail = new __WEBPACK_IMPORTED_MODULE_11__app_models_ReminderPreferencesDataModel__["a" /* ReminderPreferencesDataModel */]();
        this.userWorkoutDetail = new __WEBPACK_IMPORTED_MODULE_12__app_models_WorkoutPreferencesDataModel__["a" /* WorkoutPreferencesDataModel */]();
    }
    ProfilePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.userService.getCurrentUser()
            .then(function (user) {
            _this.user = user;
            console.log(user);
        }, function (err) { return console.log(err); });
        this.getHealthDetails(this.userHealthDetail);
        this.getReminderDetails(this.userReminderDetail);
        this.getWorkoutDetails(this.userWorkoutDetail);
    };
    ProfilePage.prototype.getHealthDetails = function (userHealthDetail) {
        var user = __WEBPACK_IMPORTED_MODULE_9_firebase__["auth"]().currentUser;
        var userId = user.uid;
        __WEBPACK_IMPORTED_MODULE_9_firebase__["database"]().ref('/' + userId + '/healthDetails/').once('value').then(function (snapshot) {
            snapshot.forEach((function (childSnapshot) {
                userHealthDetail.age = childSnapshot.val().age;
                userHealthDetail.weight = childSnapshot.val().weight;
                userHealthDetail.height = childSnapshot.val().height;
                userHealthDetail.activityLevel = childSnapshot.val().activityLevel;
                console.log(childSnapshot.val().age);
            }));
        });
    };
    ProfilePage.prototype.getReminderDetails = function (userReminderDetail) {
        var user = __WEBPACK_IMPORTED_MODULE_9_firebase__["auth"]().currentUser;
        var userId = user.uid;
        __WEBPACK_IMPORTED_MODULE_9_firebase__["database"]().ref('/' + userId + '/reminderPreferences/').once('value').then(function (snapshot) {
            snapshot.forEach((function (childSnapshot) {
                userReminderDetail.enableReminders = childSnapshot.val().enableReminders;
                userReminderDetail.frequency = childSnapshot.val().frequency;
                userReminderDetail.time = childSnapshot.val().time;
                //this.reminderFrequency = childSnapshot.val().frequency;
            }));
        });
    };
    ProfilePage.prototype.getWorkoutDetails = function (userWorkoutDetail) {
        var user = __WEBPACK_IMPORTED_MODULE_9_firebase__["auth"]().currentUser;
        var userId = user.uid;
        __WEBPACK_IMPORTED_MODULE_9_firebase__["database"]().ref('/' + userId + '/workoutPreferences/').once('value').then(function (snapshot) {
            snapshot.forEach((function (childSnapshot) {
                userWorkoutDetail.fitnessLevel = childSnapshot.val().fitnessLevel;
                userWorkoutDetail.location = childSnapshot.val().location;
                userWorkoutDetail.type = childSnapshot.val().type;
                userWorkoutDetail.dayOfWorkout = childSnapshot.val().dayOfWorkout;
            }));
        });
    };
    ProfilePage.prototype.updateUserDetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__update_user_details_update_user_details__["a" /* UpdateUserDetailsPage */]);
    };
    ProfilePage.prototype.updateWorkoutPreferences = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__update_workout_details_update_workout_details__["a" /* UpdateWorkoutDetailsPage */]);
    };
    ProfilePage.prototype.updateReminderPreferences = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__update_reminder_details_update_reminder_details__["a" /* UpdateReminderDetailsPage */]);
    };
    ProfilePage.prototype.updateHealthDetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__update_health_details_update_health_details__["a" /* UpdateHealthDetailsPage */]);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/profile/profile.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n	<img id=\'logo\' alt="logo" src="/assets/imgs/Logo.png" > \n\n\n	<!--Personal details section. -->\n	<h3>Your Details</h3>\n		<p class=\'displayItem\'><label>Name: </label>{{user.name}}</p>\n    	<p class=\'displayItem\'><label>Email: </label>{{user.email}}</p>\n\n	<button ion-button (click)="updateUserDetails()">Update Your Details</button>\n\n	<!--Health details section. -->\n	<h3>Health Details</h3>\n\n	<p class=\'displayItem\'><label>Height: </label> {{userHealthDetail.height}}</p>\n	<p class=\'displayItem\'><label>Weight: </label> {{userHealthDetail.weight}}</p>\n	<p class=\'displayItem\'><label>Age: </label> {{userHealthDetail.age}}</p>\n	<p class=\'displayItem\'><label>Activity: </label> {{userHealthDetail.activityLevel}} </p>\n\n	<button ion-button (click)="updateHealthDetail()">Update Health Details</button>\n\n	<!--Workout preferences section. -->\n	<h3>Workout Preferences</h3>\n\n	<p class=\'displayItem\'><label>Type(s): </label> {{userWorkoutDetail.type}}</p>\n	<p class=\'displayItem\'><label>Location: </label> {{userWorkoutDetail.location}}</p>\n	<p class=\'displayItem\'><label>Fitness Level: </label> {{userWorkoutDetail.fitnessLevel}}</p>\n	<p class=\'displayItem\'><label>Day(s) of Workout: </label> {{userWorkoutDetail.dayOfWorkout}}</p>\n\n	<button ion-button (click)="updateWorkoutPreferences()">Update Workout Preferences</button>\n\n	<!--Reminder preferences section. -->\n	<h3>Reminder Preferences</h3>\n\n	<p class=\'displayItem\'><label>Enable Reminders: </label> {{userReminderDetail.enableReminders}}</p>\n	<p class=\'displayItem\'><label>Frequency: </label> {{userReminderDetail.frequency}}</p>\n	<p class=\'displayItem\'><label>Time: </label> {{userReminderDetail.time}}</p>\n\n	<button ion-button (click)="updateReminderPreferences()">Update Reminder Preferences</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_7__core_user_service__["a" /* UserService */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__workout_start_workout_start__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__workout_history_workout_history__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WorkoutDetailPage = /** @class */ (function () {
    function WorkoutDetailPage(navCtrl, navParams, restProvider, db, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.workout = [];
        this.exerciseInWorkoutDetail = [];
        this.musclesWorked = [];
        this.workout.push(navParams.get('data'));
    }
    WorkoutDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WorkoutDetailPage');
        this.workoutId = this.workout[0].id;
        this.workoutName = this.workout[0].comment;
        this.getWorkoutSpecifics(this.workout[0].id);
    };
    WorkoutDetailPage.prototype.getWorkoutSpecifics = function (id) {
        var _this = this;
        this.restProvider.getCurrentWorkoutData(id).then(function (data) {
            _this.workout = data;
            var setList = _this.workout.day_list[0].set_list;
            for (var _i = 0, setList_1 = setList; _i < setList_1.length; _i++) {
                var x = setList_1[_i];
                _this.exerciseInWorkoutDetail.push(x.exercise_list[0].obj);
            }
        });
    };
    WorkoutDetailPage.prototype.startWorkout = function (x, y) {
        //console.log("Data to pass: " + this.workoutId);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__workout_start_workout_start__["a" /* WorkoutStartPage */], {
            id: x,
            name: y
        });
    };
    WorkoutDetailPage.prototype.logWorkout = function (x, y) {
        var userId = __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid;
        console.log('Name = ' + this.workoutName);
        this.db.list(userId + '/workoutHistory/').push({ date: Date(), id: x, name: y });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__workout_history_workout_history__["a" /* WorkoutHistoryPage */]);
        var alert = this.alertCtrl.create({
            title: "Workout logged",
            subTitle: "Great news on completing another workout, keep up the brilliant work!",
            buttons: ['OK']
        });
        alert.present();
    };
    WorkoutDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-workout-detail',template:/*ion-inline-start:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/workout-detail/workout-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Workout Detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<img id=\'logo\' alt="logo" src="/assets/imgs/Logo.png" > \n\n<span id=\'centerAlign\'>\n	\n	<h2>{{workoutName}}</h2>\n\n	<h4>Workout Summary</h4>\n\n	<h6>Exercises:</h6>\n\n	<div *ngFor="let detail of exerciseInWorkoutDetail">\n		<p id=\'displayItem\'>{{detail.name}}</p>\n	</div>\n\n 	<button ion-button id=\'start\' class="circleBtn" (click)="startWorkout(workoutId, workoutName)" >Start Workout</button>\n 	<button ion-button id=\'log\' class="circleBtn" (click)="logWorkout(workoutId, workoutName)">Log Workout</button>\n 	\n 	<p><b>Top Tip:</b> You can press log workout if you have completed this without your phone already and want this workout to be recorded!</p>\n\n</span>\n</ion-content>\n'/*ion-inline-end:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/workout-detail/workout-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], WorkoutDetailPage);
    return WorkoutDetailPage;
}());

//# sourceMappingURL=workout-detail.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__password_reset_password_reset__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import page

var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, authService, formBuilder) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.errorMessage = '';
    }
    LoginPage.prototype.ionViewWillLoad = function () {
        this.loginForm = this.formBuilder.group({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
        });
    };
    //standard email & password login 
    LoginPage.prototype.tryLogin = function (value) {
        var _this = this;
        this.authService.doLogin(value)
            .then(function (res) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }, function (err) {
            console.log(err);
            _this.errorMessage = err.message;
        });
    };
    //facebook login
    LoginPage.prototype.tryFacebookLogin = function () {
        var _this = this;
        this.authService.doFacebookLogin()
            .then(function (res) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }, function (err) {
            _this.errorMessage = err.message;
        });
    };
    //google login
    LoginPage.prototype.tryGoogleLogin = function () {
        var _this = this;
        this.authService.doGoogleLogin()
            .then(function (res) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }, function (err) {
            _this.errorMessage = err.message;
        });
    };
    LoginPage.prototype.goRegisterPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.resetPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__password_reset_password_reset__["a" /* PasswordResetPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="form-content">\n\n  <img id=\'logo\' alt="logo" src="../../assets/imgs/Logo.png" >\n  <!--<h3>Fit2Me</h3>\n  <h4>Workout your way</h4>-->\n  \n  <form class="form" [formGroup]="loginForm" (ngSubmit)="tryLogin(loginForm.value)">\n\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="text" formControlName="email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" formControlName="password" class="form-controll"></ion-input>\n    </ion-item>\n\n    <button ion-button full class="submit-button" type="submit">\n      Login\n    </button>\n    <label class="error-message">{{errorMessage}}</label>\n\n    <br>\n    <div>\n      <p>Not registered yet? <a (click)="goRegisterPage()">Register</a></p>\n      <p>Forgotten password? <a (click)="resetPassword()">Reset password here</a></p>\n    </div>\n    <br>\n\n  </form>\n  <button ion-button full type="submit" class="facebook-button" (click)="tryFacebookLogin()">Facebook Login</button>\n  <button ion-button full type="submit" class="google-button"  (click)="tryGoogleLogin()">Google Login</button>\n</ion-content>\n'/*ion-inline-end:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddGoalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddGoalPage = /** @class */ (function () {
    function AddGoalPage(navCtrl, navParams, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.weightGoals = false;
        this.amountOfWorkoutsGoals = false;
        this.otherGoals = false;
    }
    AddGoalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddGoalPage');
    };
    AddGoalPage.prototype.showHideFurtherGoalInput = function (goalType) {
        if (goalType == 'gtAmountOfWorkouts') {
            this.amountOfWorkoutsGoals = true;
            this.weightGoals = false;
            this.otherGoals = false;
        }
        else if (goalType == 'gtWeight') {
            this.weightGoals = true;
            this.otherGoals = false;
            this.amountOfWorkoutsGoals = false;
        }
        else if (goalType == 'gtOther') {
            this.otherGoals = true;
            this.amountOfWorkoutsGoals = false;
            this.weightGoals = false;
        }
    };
    AddGoalPage.prototype.addGoal = function () {
        var userId = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser.uid;
        var status = 'In Progress';
        var dateAchieved = 'N/A';
        var targetDateFormatted = new Date(this.targetDate).toString();
        if (this.amountOfWorkoutsGoals) {
            this.db.list(userId + '/goals/workoutGoals/').push({ dateAdded: Date(), name: this.goalName, workoutTarget: this.gtAmountOfWorkoutsVal, targetDate: targetDateFormatted, status: status, dateAchieved: dateAchieved });
        }
        else if (this.weightGoals) {
            this.db.list(userId + '/goals/weightGoals/').push({ dateAdded: Date(), name: this.goalName, weightTarget: this.gtWeightVal, targetDate: targetDateFormatted, status: status, dateAchieved: dateAchieved });
        }
        else if (this.otherGoals) {
            this.db.list(userId + '/goals/otherGoals/').push({ dateAdded: Date(), name: this.goalName, goalDescription: this.gtOtherVal, targetDate: targetDateFormatted, status: status, dateAchieved: dateAchieved });
        }
        this.navCtrl.pop();
        //  this.reloadPage();
    };
    AddGoalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-goal',template:/*ion-inline-start:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/add-goal/add-goal.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add Goal</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<img id=\'logo\' alt="logo" src="/assets/imgs/Logo.png" > \n\n	<ion-item>\n		<ion-label>Goal type</ion-label>\n			<ion-select required multiple="false" placeholder=\'Select your goal type\' [(ngModel)]="goalType" (ionChange)=\'showHideFurtherGoalInput(goalType)\'>\n			<ion-option value="gtAmountOfWorkouts">Target amount of workouts</ion-option>\n			<ion-option value="gtWeight">Weight goal</ion-option>\n			<ion-option value=\'gtOther\'>Custom goal</ion-option>\n			</ion-select>\n	</ion-item>\n\n	<ion-item>\n		<ion-label>Goal Name</ion-label>\n			<ion-input [(ngModel)]="goalName" placeholder=\'Enter a name for your goal\' type=\'text\'></ion-input>\n	</ion-item>\n\n	<ion-item *ngIf=\'amountOfWorkoutsGoals\'>\n		<ion-label>How many workouts?</ion-label>\n		<ion-input [(ngModel)]="gtAmountOfWorkoutsVal" placeholder=\'15\' type=\'number\'></ion-input>\n	</ion-item>\n\n	<ion-item *ngIf=\'weightGoals\'>\n		<ion-label>Goal weight (kg)</ion-label>\n		<ion-input [(ngModel)]="gtWeightVal" placeholder=\'85\' type=\'number\'></ion-input>\n	</ion-item>\n\n	<ion-item  *ngIf=\'otherGoals\'>\n		<ion-label>Description</ion-label>\n		<ion-input [(ngModel)]="gtOtherVal" placeholder=\'Goal description\' type=\'text\'></ion-input>\n	</ion-item>\n\n	<ion-item>\n  		<ion-label>Date</ion-label>\n  		<ion-datetime [(ngModel)]=\'targetDate\' placeholder=\'Target date to achieve by\'></ion-datetime>\n	</ion-item>\n\n	<br/>\n	<button ion-button [disabled]="!goalName || !targetDate && !gtAmountOfWorkoutsVal && !gtWeightVal && !gtOtherVal" (click)="addGoal()">Add Goal</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/add-goal/add-goal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]])
    ], AddGoalPage);
    return AddGoalPage;
}());

//# sourceMappingURL=add-goal.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciseDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExerciseDetailPage = /** @class */ (function () {
    function ExerciseDetailPage(navCtrl, navParams, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.ex = navParams.get('data');
        this.getExerciseDetail();
    }
    ExerciseDetailPage.prototype.ionViewDidLoad = function () {
        this.getImage();
        this.getExerciseDetail();
    };
    ExerciseDetailPage.prototype.getImage = function () {
        var _this = this;
        console.log("DA ID " + this.ex.id);
        this.restProvider.getExerciseImage(this.ex.id).then(function (data) {
            _this.exerciseImageData = data.results;
        });
    };
    ExerciseDetailPage.prototype.getExerciseDetail = function () {
        var _this = this;
        console.log("ID = " + this.ex.id);
        this.restProvider.getExerciseMoreData(this.ex.id).then(function (data) {
            _this.exercises = data;
            _this.muscles = data.muscles;
            _this.second_muscles = data.secondary_muscles;
            _this.equipment = data.equipment;
        });
    };
    ExerciseDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-exercise-detail',template:/*ion-inline-start:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/exercise-detail/exercise-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Exercise Detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<h2>{{ex.name}}</h2>\n	<h5>Description:</h5>\n    <p>{{ex.description}}</p>\n\n\n	<h5>Category:</h5> \n	<p>{{ex.category.name}}</p>\n\n	<h5>Muscles worked:</h5> \n	<ul *ngFor="let m of muscles">\n		<li>{{m.name}}</li>\n    </ul>\n\n	<h6>Secondary muscles worked:</h6>\n\n	<ul *ngFor="let m of second_muscles">\n		<li>{{sm.name}}</li>\n	</ul>\n\n	<h6>Equipment:</h6>\n\n	<ul *ngFor="let e of equipment">\n		<li>{{e.name}}</li>\n	</ul>\n\n	<div *ngFor="let img of exerciseImageData">\n		<img src={{img.image}}>\n	</div>	\n	\n</ion-content>\n'/*ion-inline-end:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/exercise-detail/exercise-detail.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]) === "function" && _c || Object])
    ], ExerciseDetailPage);
    return ExerciseDetailPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=exercise-detail.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciseListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_exercise_detail_exercise_detail__ = __webpack_require__(186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExerciseListPage = /** @class */ (function () {
    function ExerciseListPage(navCtrl, restProvider) {
        this.navCtrl = navCtrl;
        this.restProvider = restProvider;
        this.getExercises();
    }
    ExerciseListPage.prototype.getExercises = function () {
        var _this = this;
        this.restProvider.getExercises()
            .then(function (data) {
            if (data.hasOwnProperty('results')) {
                _this.exercises = data.results;
                for (var _i = 0, _a = _this.exercises; _i < _a.length; _i++) {
                    var ex = _a[_i];
                    ex.description = ex.description.toString().replace(/<\/?[^>]+(>|$)/g, "");
                }
            }
        });
    };
    ExerciseListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExercisesPage');
    };
    ExerciseListPage.prototype.clearFilter = function () {
        //clear fields.
        this.exEquipment = null;
        this.exType = null;
        //get basic exercise list with no features. 
        this.getExercises();
    };
    ExerciseListPage.prototype.applyFilter = function () {
        var _this = this;
        this.restProvider.getExercisesWithFilter(this.exType, this.exEquipment).then(function (data) {
            _this.exercises = data.results;
            for (var _i = 0, _a = _this.exercises; _i < _a.length; _i++) {
                var ex = _a[_i];
                ex.description = ex.description.toString().replace(/<\/?[^>]+(>|$)/g, "");
            }
        });
    };
    ExerciseListPage.prototype.viewMoreDetail = function (ex) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_exercise_detail_exercise_detail__["a" /* ExerciseDetailPage */], {
            data: ex
        });
    };
    ExerciseListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-exercise-list',template:/*ion-inline-start:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/exercise-list/exercise-list.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Exercise List</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<ion-content>\n\n  <img id=\'logo\' alt="logo" src="/assets/imgs/Logo.png" > \n\n<h3>Filter Exercises</h3>\n\n<ion-item>\n  <ion-label>Exercise Type</ion-label>\n  <ion-select  multiple="false" [(ngModel)]="exType">\n    <ion-option value="10">Abs</ion-option>\n    <ion-option value="8">Arms</ion-option>\n    <ion-option value="12">Back</ion-option>\n    <ion-option value="11">Chest</ion-option>\n    <ion-option value="13">Shoulders</ion-option>\n    <ion-option value="9">Legs</ion-option>\n    <ion-option value="14">Calves</ion-option>\n  </ion-select>\n</ion-item>\n\n<ion-item>\n  <ion-label>Equipment</ion-label>\n  <ion-select  multiple="false" [(ngModel)]="exEquipment">\n    <ion-option value="4">Gym mat</ion-option>\n    <ion-option value="1">Barbell</ion-option>\n    <ion-option value="8">Bench</ion-option>\n    <ion-option value="3">Dumbbell</ion-option>\n    <ion-option value="10">Kettlebell</ion-option>\n    <ion-option value="5">Swiss Ball</ion-option>\n    <ion-option value="6">Pull-up Bar</ion-option>\n    <ion-option value="5">Incline Bench</ion-option>\n    <ion-option value="2">SZ-Bar</ion-option>\n  </ion-select>\n</ion-item>\n\n	<ion-item>\n		<button ion-button (click)="applyFilter()">Apply Filter</button>\n\n		<button ion-button (click)="clearFilter()">Clear Filter</button>\n	</ion-item>\n\n  	<ion-list inset>\n    <ion-item *ngFor="let ex of exercises">\n      <h2>{{ex.name}}</h2>\n      <p>{{ex.description}}</p>\n      <button ion-button item-right (click)="viewMoreDetail(ex)">View</button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n</ion-content>'/*ion-inline-end:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/exercise-list/exercise-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
    ], ExerciseListPage);
    return ExerciseListPage;
}());

//# sourceMappingURL=exercise-list.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoalGraphedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_user_model__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_models_HealthDetailsDataModel__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_models_WorkoutStatsDataModel__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import chart js for charting. 



//models 



var GoalGraphedPage = /** @class */ (function () {
    function GoalGraphedPage(navCtrl, navParams, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.user = new __WEBPACK_IMPORTED_MODULE_5__core_user_model__["a" /* FirebaseUserModel */]();
        this.userHealthDetail = new __WEBPACK_IMPORTED_MODULE_6__app_models_HealthDetailsDataModel__["a" /* HealthDetailsDataModel */]();
        this.workoutStats = new __WEBPACK_IMPORTED_MODULE_7__app_models_WorkoutStatsDataModel__["a" /* WorkoutStatsDataModel */]();
        this.weightGraphData = [];
    }
    GoalGraphedPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad GoalGraphedPage');
        this.weightGraphData = this.getWeightOverTime();
        this.barChartData = this.getWorkoutHistory();
        this.countWorkouts(this.workoutStats);
        setTimeout(function () {
            _this.generateLineChart(_this.weightGraphData);
            _this.generateDoughnutChart(_this.workoutStats);
            _this.generateBarChart(_this.barChartData);
        }, 900);
    };
    GoalGraphedPage.prototype.getWeightOverTime = function () {
        var user = __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser;
        var userId = user.uid;
        var healthDetails = [];
        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('/' + userId + '/historicHealthDetails/').once('value').then(function (snapshot) {
            snapshot.forEach((function (childSnapshot) {
                var date = childSnapshot.val().date;
                var weight = childSnapshot.val().weight;
                healthDetails.push({
                    date: date,
                    weight: weight
                });
            }));
        });
        return healthDetails;
        //this.generateLineChart(healthDetails);
    };
    GoalGraphedPage.prototype.generateLineChart = function (w) {
        var labels = [];
        var weight = [];
        for (var i in w) {
            labels.push(w[i].date.substring(0, 15));
            weight.push(w[i].weight);
        }
        this.lineChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: "Weight (kg)",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: weight,
                        spanGaps: false,
                    }
                ]
            }
        });
    };
    GoalGraphedPage.prototype.getWorkoutHistory = function () {
        var dec = 0;
        var jan = 0;
        var feb = 0;
        var mar = 0;
        var apr = 0;
        var may = 0;
        var barData = [];
        var user = __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser;
        var userId = user.uid;
        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('/' + userId + '/workoutHistory/').once('value').then(function (snapshot) {
            //console.log(snapshot);
            snapshot.forEach((function (childSnapshot) {
                var currentDate = childSnapshot.val().date;
                if (currentDate.includes('Dec')) {
                    dec++;
                }
                else if (currentDate.includes('Jan')) {
                    jan++;
                }
                else if (currentDate.includes('Feb')) {
                    feb++;
                }
                else if (currentDate.includes('Mar')) {
                    mar++;
                }
                else if (currentDate.includes('Apr')) {
                    apr++;
                }
                else if (currentDate.includes('May')) {
                    may++;
                }
            }));
            barData.push({
                dec: dec,
                jan: jan,
                feb: feb,
                mar: mar,
                apr: apr,
                may: may
            });
        });
        return barData;
    };
    GoalGraphedPage.prototype.generateBarChart = function (data) {
        this.barChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: ["Dec", "Jan", "Feb", "Mar", "Apr", "May"],
                datasets: [{
                        label: 'Amount of Workouts',
                        data: [data[0].dec, data[0].jan, data[0].feb, data[0].mar, data[0].apr, data[0].may],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
    };
    GoalGraphedPage.prototype.countWorkouts = function (w) {
        var user = __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser;
        var userId = user.uid;
        var count = 0;
        var workoutsToGo = 0;
        var progress = 0;
        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('/' + userId + '/workoutHistory/').once('value').then(function (snapshot) {
            w.countOfWorkout = snapshot.numChildren();
            count = snapshot.numChildren();
            if (count < 25) {
                w.workoutLevel = 'Beginner';
                workoutsToGo = 25 - count;
                w.workoutsToNextLevel = workoutsToGo;
            }
            else if (count >= 25 && count < 50) {
                w.workoutLevel = 'Intermediate';
                workoutsToGo = 50 - count;
                w.workoutsToNextLevel = workoutsToGo;
            }
            else if (count >= 50 && count < 100) {
                w.workoutLevel = 'Advanced';
                workoutsToGo = 100 - count;
                w.workoutsToNextLevel = workoutsToGo;
            }
        });
    };
    GoalGraphedPage.prototype.generateDoughnutChart = function (w) {
        this.doughnutChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.doughnutCanvas.nativeElement, {
            type: 'doughnut',
            data: {
                labels: ["Workouts Completed", "Workouts Needed to Level Up"],
                datasets: [{
                        label: '# of Votes',
                        data: [w.countOfWorkout, w.workoutsToNextLevel],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56",
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ]
                    }]
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvas'),
        __metadata("design:type", Object)
    ], GoalGraphedPage.prototype, "barCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lineCanvas'),
        __metadata("design:type", Object)
    ], GoalGraphedPage.prototype, "lineCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('doughnutCanvas'),
        __metadata("design:type", Object)
    ], GoalGraphedPage.prototype, "doughnutCanvas", void 0);
    GoalGraphedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-goal-graphed',template:/*ion-inline-start:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/goal-graphed/goal-graphed.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Progress Charts</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <img id=\'logo\' alt="logo" src="/assets/imgs/Logo.png" > \n\n    <ion-card>\n      <ion-card-header>\n        Workout History\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #barCanvas></canvas>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        Workout Level\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #doughnutCanvas></canvas>\n      </ion-card-content>\n    </ion-card> \n\n    <ion-card>\n      <ion-card-header>\n        Weight History\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #lineCanvas></canvas>\n      </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/goal-graphed/goal-graphed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"]])
    ], GoalGraphedPage);
    return GoalGraphedPage;
}());

//# sourceMappingURL=goal-graphed.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoalsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_goal_add_goal__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_models_HealthDetailsDataModel__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_models_WorkoutStatsDataModel__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//models

var GoalsPage = /** @class */ (function () {
    function GoalsPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.workoutStats = new __WEBPACK_IMPORTED_MODULE_5__app_models_WorkoutStatsDataModel__["a" /* WorkoutStatsDataModel */]();
        this.userHealthDetail = new __WEBPACK_IMPORTED_MODULE_4__app_models_HealthDetailsDataModel__["a" /* HealthDetailsDataModel */]();
        this.weightGoalData = [];
        this.workoutGoalData = [];
        this.otherGoalData = [];
        this.weightGoalDataCompleted = [];
        this.workoutGoalDataCompleted = [];
        this.otherGoalDataCompleted = [];
        this.weightGoalDataComplete = [];
        this.workoutGoalDataComplete = [];
        this.otherGoalDataComplete = [];
    }
    GoalsPage.prototype.ionViewDidEnter = function () {
        this.weightGoalData = this.getWeightGoals();
        this.workoutGoalData = this.getWorkoutGoals();
        this.otherGoalData = this.getOtherGoals();
        this.workoutGoalDataComplete = this.getCompleteWorkoutGoals();
        this.weightGoalDataComplete = this.getCompleteWeightGoals();
        this.otherGoalDataComplete = this.getCompleteOtherGoals();
        this.getCurrentWorkoutCount(this.workoutStats);
        this.getWeight(this.userHealthDetail);
        this.autoCheckForCompleteWeightGoal(this.alertCtrl, this.navCtrl);
        this.autoCheckForCompleteWorkoutGoal(this.alertCtrl, this.navCtrl);
    };
    GoalsPage.prototype.presentAlert = function (titleTxt, subtitleTxt) {
        var alert = this.alertCtrl.create({
            title: titleTxt,
            subTitle: subtitleTxt,
            buttons: ['OK']
        });
        alert.present();
    };
    GoalsPage.prototype.reloadPage = function () {
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
    };
    GoalsPage.prototype.getCurrentWorkoutCount = function (w) {
        var user = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser;
        var userId = user.uid;
        var count;
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('/' + userId + '/workoutHistory/').once('value').then(function (snapshot) {
            count = snapshot.numChildren();
            w.countOfWorkout = snapshot.numChildren();
        });
    };
    GoalsPage.prototype.getWeight = function (userHealthDetail) {
        var user = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser;
        var userId = user.uid;
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('/' + userId + '/healthDetails/').once('value').then(function (snapshot) {
            snapshot.forEach((function (childSnapshot) {
                userHealthDetail.weight = childSnapshot.val().weight;
            }));
        });
    };
    GoalsPage.prototype.setGoal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_goal_add_goal__["a" /* AddGoalPage */]);
    };
    GoalsPage.prototype.getWeightGoals = function () {
        var user = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser;
        var userId = user.uid;
        var weightGoals = [];
        var ref;
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('/' + userId + '/goals/weightGoals/').once('value').then(function (snapshot) {
            snapshot.forEach((function (childSnapshot) {
                ref = childSnapshot.key;
                if (childSnapshot.val().status == 'In Progress') {
                    var name_1 = childSnapshot.val().name;
                    var dateAdded = childSnapshot.val().dateAdded.substring(0, 15);
                    var targetDate = childSnapshot.val().targetDate.substring(0, 15);
                    var weightTarget = childSnapshot.val().weightTarget;
                    weightGoals.push({
                        name: name_1,
                        dateAdded: dateAdded,
                        targetDate: targetDate,
                        weightTarget: weightTarget,
                        directPath: ref
                    });
                }
            }));
        });
        return weightGoals;
    };
    GoalsPage.prototype.getWorkoutGoals = function () {
        var user = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser;
        var userId = user.uid;
        var workoutGoals = [];
        var ref;
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('/' + userId + '/goals/workoutGoals/').once('value').then(function (snapshot) {
            snapshot.forEach((function (childSnapshot) {
                ref = childSnapshot.key;
                if (childSnapshot.val().status == 'In Progress') {
                    var name_2 = childSnapshot.val().name;
                    var dateAdded = childSnapshot.val().dateAdded.substring(0, 15);
                    var targetDate = childSnapshot.val().targetDate.substring(0, 15);
                    var workoutTarget = childSnapshot.val().workoutTarget;
                    workoutGoals.push({
                        name: name_2,
                        dateAdded: dateAdded,
                        targetDate: targetDate,
                        workoutTarget: workoutTarget,
                        directPath: ref
                    });
                }
            }));
        });
        return workoutGoals;
    };
    GoalsPage.prototype.getOtherGoals = function () {
        var user = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser;
        var userId = user.uid;
        var otherGoals = [];
        var ref;
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('/' + userId + '/goals/otherGoals/').once('value').then(function (snapshot) {
            snapshot.forEach((function (childSnapshot) {
                ref = childSnapshot.key;
                if (childSnapshot.val().status == 'In Progress') {
                    var name_3 = childSnapshot.val().name;
                    var dateAdded = childSnapshot.val().dateAdded.substring(0, 15);
                    var targetDate = childSnapshot.val().targetDate;
                    var goalDescription = childSnapshot.val().goalDescription;
                    otherGoals.push({
                        name: name_3,
                        dateAdded: dateAdded,
                        targetDate: targetDate,
                        goalDescription: goalDescription,
                        directPath: ref
                    });
                }
            }));
        });
        return otherGoals;
    };
    GoalsPage.prototype.getCompleteWorkoutGoals = function () {
        var user = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser;
        var userId = user.uid;
        var workoutGoalsComplete = [];
        var ref;
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('/' + userId + '/goals/workoutGoals/').once('value').then(function (snapshot) {
            snapshot.forEach((function (childSnapshot) {
                ref = childSnapshot.key;
                if (childSnapshot.val().status == 'Complete') {
                    var name_4 = childSnapshot.val().name;
                    var dateAdded = childSnapshot.val().dateAdded.substring(0, 15);
                    var targetDate = childSnapshot.val().targetDate.substring(0, 15);
                    var goalDescription = childSnapshot.val().goalDescription;
                    var dateAchieved = childSnapshot.val().dateAchieved.substring(0, 15);
                    var workoutTarget = childSnapshot.val().workoutTarget;
                    workoutGoalsComplete.push({
                        name: name_4,
                        dateAdded: dateAdded,
                        targetDate: targetDate,
                        goalDescription: goalDescription,
                        directPath: ref,
                        dateAchieved: dateAchieved,
                        workoutTarget: workoutTarget
                    });
                }
            }));
        });
        return workoutGoalsComplete;
    };
    GoalsPage.prototype.getCompleteWeightGoals = function () {
        var user = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser;
        var userId = user.uid;
        var weightGoalsComplete = [];
        var ref;
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('/' + userId + '/goals/weightGoals/').once('value').then(function (snapshot) {
            snapshot.forEach((function (childSnapshot) {
                ref = childSnapshot.key;
                if (childSnapshot.val().status == 'Complete') {
                    var name_5 = childSnapshot.val().name;
                    var dateAdded = childSnapshot.val().dateAdded.substring(0, 15);
                    var targetDate = childSnapshot.val().targetDate.substring(0, 15);
                    var goalDescription = childSnapshot.val().goalDescription;
                    var dateAchieved = childSnapshot.val().dateAchieved.substring(0, 15);
                    var weightTarget = childSnapshot.val().weightTarget;
                    weightGoalsComplete.push({
                        name: name_5,
                        dateAdded: dateAdded,
                        targetDate: targetDate,
                        goalDescription: goalDescription,
                        directPath: ref,
                        dateAchieved: dateAchieved,
                        weightTarget: weightTarget
                    });
                }
            }));
        });
        return weightGoalsComplete;
    };
    GoalsPage.prototype.getCompleteOtherGoals = function () {
        var user = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser;
        var userId = user.uid;
        var otherGoalsComplete = [];
        var ref;
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('/' + userId + '/goals/otherGoals/').once('value').then(function (snapshot) {
            snapshot.forEach((function (childSnapshot) {
                ref = childSnapshot.key;
                if (childSnapshot.val().status == 'Complete') {
                    var name_6 = childSnapshot.val().name;
                    var dateAdded = childSnapshot.val().dateAdded.substring(0, 15);
                    var targetDate = childSnapshot.val().targetDate.substring(0, 15);
                    var goalDescription = childSnapshot.val().goalDescription;
                    var dateAchieved = childSnapshot.val().dateAchieved.substring(0, 15);
                    otherGoalsComplete.push({
                        name: name_6,
                        dateAdded: dateAdded,
                        targetDate: targetDate,
                        goalDescription: goalDescription,
                        directPath: ref,
                        dateAchieved: dateAchieved
                    });
                }
            }));
        });
        return otherGoalsComplete;
    };
    /*
     
     **** NO LONGER REQUIRED *****
   
     For the weight and workout goals, these are based on metrics recorded in the app so user shouldn't be able to mark them complete.
     App will detect if completed.
   
     markWeightGoalComplete(snapshot){
       var userId = firebase.auth().currentUser.uid;
       firebase.database().ref('/' + userId + '/goals/weightGoals/' + snapshot + '/').update({status: 'Complete', dateAchieved: Date()});
       this.reloadPage();
       this.presentAlert("Weight goal achieved!", "Awesome work! You just completed your weight goal, keep up the great work.");
     }
   
     markWorkoutGoalComplete(snapshot){
       var userId = firebase.auth().currentUser.uid;
       firebase.database().ref('/' + userId + '/goals/workoutGoals/' + snapshot + '/').update({status: 'Complete', dateAchieved: Date()});
       this.reloadPage();
       this.presentAlert("Workout goal achieved!", "Awesome work! You just completed your workout goal, keep up the great work.");
     } */
    GoalsPage.prototype.markOtherGoalComplete = function (snapshot) {
        var userId = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser.uid;
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('/' + userId + '/goals/otherGoals/' + snapshot + '/').update({ status: 'Complete', dateAchieved: Date() });
        this.reloadPage();
        this.presentAlert("Custom goal achieved!", "Awesome work! You just completed your custom goal, keep up the great work.");
    };
    GoalsPage.prototype.deleteWeightGoal = function (path) {
        var user = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser;
        var userId = user.uid;
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('/' + userId + '/goals/weightGoals/' + path).remove();
        this.reloadPage();
    };
    GoalsPage.prototype.deleteWorkoutGoal = function (path) {
        var user = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser;
        var userId = user.uid;
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('/' + userId + '/goals/workoutGoals/' + path).remove();
        this.reloadPage();
    };
    GoalsPage.prototype.deleteOtherGoal = function (path) {
        var user = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser;
        var userId = user.uid;
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('/' + userId + '/goals/otherGoals/' + path).remove();
        this.reloadPage();
    };
    GoalsPage.prototype.autoCheckForCompleteWeightGoal = function (alt, nav) {
        var user = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser;
        var userId = user.uid;
        //initialise vars.
        var ref;
        var currentWeight;
        var weightTarget;
        //get weight target goal
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('/' + userId + '/goals/weightGoals/').once('value').then(function (snapshot) {
            snapshot.forEach((function (childSnapshot) {
                ref = childSnapshot.key;
                if (childSnapshot.val().status == 'In Progress') {
                    weightTarget = childSnapshot.val().weightTarget;
                    //get current weight. 
                    __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('/' + userId + '/healthDetails/').once('value').then(function (snapshot) {
                        snapshot.forEach((function (childSnapshot) {
                            currentWeight = childSnapshot.val().weight;
                            if (currentWeight == weightTarget) {
                                //target weight and current weight match, so goal is complete!. 
                                __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('/' + userId + '/goals/weightGoals/' + ref + '/').update({ status: 'Complete', dateAchieved: Date() });
                                var alert_1 = alt.create({
                                    title: "Weight goal achieved!",
                                    subTitle: "Awesome work! You just completed your weight goal, keep up the great work. You reached your target weight of " + weightTarget + "kg.",
                                    buttons: ['OK']
                                });
                                alert_1.present();
                                nav.setRoot(nav.getActive().component);
                            }
                        }));
                    });
                }
            }));
        });
    };
    GoalsPage.prototype.autoCheckForCompleteWorkoutGoal = function (alt, nav) {
        var user = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser;
        var userId = user.uid;
        //initialise vars.
        var ref;
        var count;
        var workoutTarget;
        //get workout target goal
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('/' + userId + '/goals/workoutGoals/').once('value').then(function (snapshot) {
            snapshot.forEach((function (childSnapshot) {
                ref = childSnapshot.key;
                if (childSnapshot.val().status == 'In Progress') {
                    workoutTarget = childSnapshot.val().workoutTarget;
                    //get current count of workouts.
                    __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('/' + userId + '/workoutHistory/').once('value').then(function (snapshot) {
                        count = snapshot.numChildren();
                        if (count == workoutTarget || count > workoutTarget) {
                            //target weight and current weight match, so goal is complete!. 
                            __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('/' + userId + '/goals/workoutGoals/' + ref + '/').update({ status: 'Complete', dateAchieved: Date() });
                            var alert_2 = alt.create({
                                title: "Workout goal achieved!",
                                subTitle: "Awesome work! You just completed your workout goal, keep up the great work. You completed " + workoutTarget + " workouts.",
                                buttons: ['OK']
                            });
                            alert_2.present();
                            nav.setRoot(nav.getActive().component);
                        }
                    });
                }
            }));
        });
    };
    GoalsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-goals',template:/*ion-inline-start:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/goals/goals.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Goals</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <img id=\'logo\' alt="logo" src="/assets/imgs/Logo.png" > \n\n<h2 class=\'center\'>Goals in progress</h2>\n\n<button class=\'center\' ion-button (click)="setGoal()">Add New Goal</button>\n\n\n  <div *ngFor="let x of weightGoalData">\n\n  <ion-card class=\'active\'>\n      <ion-card-header>\n        <ion-card-title>{{x.name}} - Reach target weight {{x.weightTarget}} kg</ion-card-title>\n     </ion-card-header>\n      <ion-card-content>\n        <p><b>Goal Weight: </b> {{x.weightTarget}}kg</p>\n        <p><b>Current Weight:</b> {{userHealthDetail.weight}}kg</p>\n        <p><b>Date Added:</b> {{x.dateAdded}}</p>\n        <p><b>Target Completion Date:</b> {{x.targetDate}}</p>\n        <!--User should no longer be able to mark this complete as this is based on a metric within the app!-->\n        <!--<button ion-button (click)="markWeightGoalComplete(x.directPath)">Mark complete</button>-->\n        <button ion-button (click)="deleteWeightGoal(x.directPath)">Delete goal</button>\n        <br/>\n        <span class=\'tag\' id=\'tagActive\'>Weight Goal</span>\n      </ion-card-content>\n    </ion-card>\n\n  </div>\n\n  <div *ngFor="let x of workoutGoalData">\n  	\n  <ion-card class=\'active\'>\n    <ion-card-header>\n      <ion-card-title>{{x.name}} - Complete {{x.workoutTarget}} workouts</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n\n      <p><b>Status:</b> {{workoutStats.countOfWorkout}} / {{x.workoutTarget}} complete</p>\n    	<p><b>Date Added:</b> {{x.dateAdded}}</p>\n    	<p><b>Target Completion Date:</b> {{x.targetDate}}</p>\n      <!--User should no longer be able to mark this complete as this is based on a metric within the app!-->\n      <!--<button ion-button (click)="markWorkoutGoalComplete(x.directPath)">Mark complete</button>-->\n      <button ion-button (click)="deleteWorkoutGoal(x.directPath)">Delete goal</button>\n      <br/>\n      <span class=\'tag\' id=\'tagActive\'>Workout Goal</span>\n    </ion-card-content>\n  </ion-card>\n\n  </div>\n\n  <div *ngFor="let x of otherGoalData">\n  <ion-card class=\'active\'>\n    <ion-card-header>\n      <ion-card-title>{{x.name}} - {{x.goalDescription}}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n\n      <p><b>Date Added:</b> {{x.dateAdded}}</p>\n      <p><b>Target Completion Date:</b> {{x.targetDate}} </p>\n\n      <button ion-button (click)="markOtherGoalComplete(x.directPath)">Mark complete</button>\n      <button ion-button (click)="deleteOtherGoal(x.directPath)">Delete goal</button>\n      <br/>\n      <span class=\'tag\' id=\'tagActive\'>Custom Goal</span>\n    </ion-card-content>\n  </ion-card>\n\n  </div>\n\n  <h2 class=\'center\'>Completed Goals</h2>\n\n  <!--COMPLETED GO DOWN HERE AT BOTTOM-->\n\n  <!--Weight goals-->\n\n  <div *ngFor="let x of weightGoalDataComplete">\n\n  <ion-card class=\'complete\'>\n      <ion-card-header>\n        <ion-card-title>{{x.name}} - Reach target weight {{x.weightTarget}}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <p><b>Goal Weight: </b> {{x.weightTarget}}kg</p>\n        <p><b>Date Added:</b> {{x.dateAdded}}</p>\n        <p><b>Target Completion Date:</b> {{x.targetDate}}</p>\n        <p><b>Date achieved: </b>{{x.dateAchieved}}</p>\n        <br/>\n        <span class=\'tag\' id=\'tagInactive\'>Weight Goal</span>\n      </ion-card-content>\n    </ion-card>\n\n  </div>\n\n  <!--Workout goals-->\n\n  <div *ngFor=\'let x of workoutGoalDataComplete\'>\n    <ion-card class=\'complete\'>\n      <ion-card-header>\n       <ion-card-title>{{x.name}} - Complete {{x.workoutTarget}} workouts</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <p><b>Target workouts:</b> {{x.workoutTarget}}</p>\n        <p><b>Date Added:</b> {{x.dateAdded}}</p>\n        <p><b>Target Completion Date:</b> {{x.targetDate}}</p>\n        <p><b>Date achieved: </b>{{x.dateAchieved}}</p>\n        <br/>\n        <span class=\'tag\' id=\'tagInactive\'>Workout Goal</span>\n\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <!--Other goals-->\n\n  <div *ngFor="let x of otherGoalDataComplete">\n    \n  <ion-card class=\'complete\'>\n    <ion-card-header>\n    <ion-card-title>{{x.name}} - {{x.goalDescription}}</ion-card-title>\n  </ion-card-header>\n    <ion-card-content>\n      <p><b>Description:</b> {{x.goalDescription}}</p>\n      <p><b>Date Added:</b> {{x.dateAdded}}</p>\n      <p><b>Target Completion Date:</b> {{x.targetDate}}</p>\n      <p><b>Date achieved: </b>{{x.dateAchieved}}</p>\n      <br/>\n      <span class=\'tag\' id=\'tagInactive\'>Custom Goal</span>\n    </ion-card-content>\n  </ion-card>\n\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/goals/goals.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], GoalsPage);
    return GoalsPage;
}());

//# sourceMappingURL=goals.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordResetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PasswordResetPage = /** @class */ (function () {
    function PasswordResetPage(navCtrl, navParams, db, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.alertCtrl = alertCtrl;
    }
    PasswordResetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PasswordResetPage');
    };
    PasswordResetPage.prototype.sendPasswordLink = function (userEmail) {
        this.db.list('userNeedPasswordReset/').push({ email: userEmail });
        var alert = this.alertCtrl.create({
            title: "Password reset link sent",
            subTitle: "Please check your emails for details on how to reset your password. Please allow some time for this action.",
            buttons: ['OK']
        });
        alert.present();
        this.navCtrl.pop();
    };
    PasswordResetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-password-reset',template:/*ion-inline-start:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/password-reset/password-reset.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Reset Password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <img id=\'logo\' alt="logo" src="/assets/imgs/Logo.png" > \n\n  <p>Please provide your email, and we will send you a link to reset your password.</p>\n\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input [(ngModel)]="email" type="text"></ion-input>\n    </ion-item>\n\n    <button ion-button (click)="sendPasswordLink(email)">Send Password Reset Link</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/password-reset/password-reset.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PasswordResetPage);
    return PasswordResetPage;
}());

//# sourceMappingURL=password-reset.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterDisclaimerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterDisclaimerPage = /** @class */ (function () {
    function RegisterDisclaimerPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    RegisterDisclaimerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterDisclaimerPage');
    };
    RegisterDisclaimerPage.prototype.completeRegistration = function () {
        var accepted = this.accept;
        if (accepted) {
            this.navCtrl.push('OnboardingPage');
        }
    };
    RegisterDisclaimerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register-disclaimer',template:/*ion-inline-start:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/register-disclaimer/register-disclaimer.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Registration Disclaimer</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n	<img id=\'logo\' alt="logo" src="/assets/imgs/Logo.png" > \n\n	<h5>Please read the following before completing registration.</h5>\n\n	<h6>Health & Wellbeing</h6>\n\n	<p>Fit2Me advises that you consult with your doctor before beginning any exercise program.</p>\n	<p>You should be in good physical condition and be able to participate in the exercise.</p>\n	<p>Fit2Me is not a licensed medical care provider and represents that it has no expertise in diagnosing, examining, or treating medical conditions of any kind, or in determining the effect of any specific exercise on a medical condition.</p>\n\n	<p>Fit2Me advises that you consult with your doctor before beginning any exercise program.</p>\n	<p>You should be in good physical condition and be able to participate in the exercise.</p>\n	<p>Fit2Me is not a licensed medical care provider and represents that it has no expertise in diagnosing, examining, or treating medical conditions of any kind, or in determining the effect of any specific exercise on a medical condition.</p>\n\n	<h6>Your data</h6>\n\n	<p>Here at Fit 2 Me, we take your privacy seriously and will only use your personal information to administer your account.</p>\n	<p>Your data will not be shared with anyone, nor will it be passed onto third party services for marketing purposes.</p> \n\n	<ion-item>\n	    <ion-label>I accept</ion-label>\n	    <ion-toggle [(ngModel)]="accept"></ion-toggle>\n    </ion-item>\n\n    <!--Should this message be left in or does this seem bias? -->\n\n    <p>Please note you cannot register unless you agree to this disclaimer.</p>\n    <button ion-button class="submit-btn" full type="submit"  [disabled]="!accept" (click)="completeRegistration()">Complete Registration</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/register-disclaimer/register-disclaimer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RegisterDisclaimerPage);
    return RegisterDisclaimerPage;
}());

//# sourceMappingURL=register-disclaimer.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateHealthDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// db imports


var UpdateHealthDetailsPage = /** @class */ (function () {
    function UpdateHealthDetailsPage(navCtrl, navParams, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
    }
    UpdateHealthDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpdateHealthDetailsPage');
    };
    //TODO NEED TO UPDATE ACITIVITY LEVEL 
    // **** NEEDS UPDATED
    UpdateHealthDetailsPage.prototype.changeDetails = function (age, weight, height) {
        var userId = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser.uid;
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('/' + userId + '/healthDetails/').once('value').then(function (snapshot) {
            snapshot.forEach((function (childSnapshot) {
                console.log('/' + userId + '/healthDetails/' + childSnapshot.key);
                __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('/' + userId + '/healthDetails/' + childSnapshot.key).update({ age: age, height: height, weight: weight }); //, age: this.age, height: this.height ,  weight: this.weight});
            }));
        });
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('/' + userId + '/historicHealthDetails/').push({ age: age, height: height, weight: weight, date: Date() });
        //return to previous page 
        this.navCtrl.pop();
    };
    UpdateHealthDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-update-health-details',template:/*ion-inline-start:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/update-health-details/update-health-details.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Update Health Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<img id=\'logo\' alt="logo" src="/assets/imgs/Logo.png" > \n\n	<h3>Set Health Details</h3>\n			<p>These details will be used to calculate your body mass index (BMI) and basal metabolic rate (BMR). Don\'t worry - we\'ll explain this more later.\n			<ion-item>\n				<ion-label>Weight</ion-label>\n    			<ion-input [(ngModel)]="weight" type="number" placeholder="kg"></ion-input>\n  			</ion-item>\n			<ion-item>\n				<ion-label>Height</ion-label>\n    			<ion-input [(ngModel)]="height" type="number" placeholder="cm"></ion-input>\n  			</ion-item>\n  			<ion-item>\n				<ion-label>Age</ion-label>\n    			<ion-input [(ngModel)]="age" type="number" placeholder="years"></ion-input>\n  			</ion-item>\n\n  			<ion-item>\n				<ion-label>Activity level</ion-label>\n				<ion-select [(ngModel)]="activityLevel">\n					<ion-option value="1.2"> Sedentary</ion-option>\n					<ion-option value="1.375">Lightly active (light exercise/sports 1-3 days/week)</ion-option>\n					<ion-option value="1.55">Moderately active</ion-option>\n					<ion-option value="1.725">Very active</ion-option>\n					<ion-option value="1.9">Extra active</ion-option>\n				</ion-select>\n			</ion-item>\n			<button [disabled]="!weight || !height || !age" ion-button (click)="changeDetails(age, weight, height)">Update</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/update-health-details/update-health-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]])
    ], UpdateHealthDetailsPage);
    return UpdateHealthDetailsPage;
}());

//# sourceMappingURL=update-health-details.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateReminderDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// db imports


var UpdateReminderDetailsPage = /** @class */ (function () {
    function UpdateReminderDetailsPage(navCtrl, navParams, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
    }
    UpdateReminderDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpdateReminderDetailsPage');
    };
    UpdateReminderDetailsPage.prototype.update = function (remindersEnabled, reminderFrequency, reminderTime) {
        if (!remindersEnabled) {
            remindersEnabled = false;
        }
        if (!reminderFrequency) {
            reminderFrequency = "";
        }
        if (!reminderTime) {
            reminderTime = "";
        }
        var userId = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser.uid;
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('/' + userId + '/reminderPreferences/').once('value').then(function (snapshot) {
            snapshot.forEach((function (childSnapshot) {
                console.log('/' + userId + '/reminderPreferences/' + childSnapshot.key);
                __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('/' + userId + '/reminderPreferences/' + childSnapshot.key).update({ enableReminders: remindersEnabled, frequency: reminderFrequency, time: reminderTime }); //, age: this.age, height: this.height ,  weight: this.weight});
            }));
        });
        //return to previous page 
        this.navCtrl.pop();
    };
    UpdateReminderDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-update-reminder-details',template:/*ion-inline-start:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/update-reminder-details/update-reminder-details.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Update Reminder Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<img id=\'logo\' alt="logo" src="/assets/imgs/Logo.png" > \n\n		<h3>Set Reminder Preferences</h3>\n			<p>Reminders will help to motivate you towards reaching you goal.</p>\n\n			<ion-item>\n			    <ion-label>Enable reminders</ion-label>\n			    <ion-toggle [(ngModel)]="remindersEnabled"></ion-toggle>\n 			</ion-item>\n 			<ion-item>\n 				<ion-label>Frequency</ion-label>\n 				<ion-select multiple="false" [(ngModel)]="reminderFrequency">\n 					<ion-option value="Every day">Every day</ion-option>\n 					<ion-option value="Every weekday">Every weekday</ion-option>\n 					<ion-option value="Once a week">Once a week</ion-option>\n 				</ion-select>\n 			</ion-item>\n\n 			<ion-item>\n			  <ion-label>Time</ion-label>\n			  <ion-datetime displayFormat="HH:mm" [(ngModel)]="reminderTime"></ion-datetime>\n			</ion-item>\n			<button ion-button (click)="update(remindersEnabled, reminderFrequency, reminderTime)">Update</button>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/update-reminder-details/update-reminder-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]])
    ], UpdateReminderDetailsPage);
    return UpdateReminderDetailsPage;
}());

//# sourceMappingURL=update-reminder-details.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateWorkoutDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// db imports


var UpdateWorkoutDetailsPage = /** @class */ (function () {
    function UpdateWorkoutDetailsPage(navCtrl, navParams, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
    }
    UpdateWorkoutDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpdateWorkoutDetailsPage');
    };
    UpdateWorkoutDetailsPage.prototype.update = function (workoutTypes, workoutLocation, workoutLevel, workoutDay) {
        var userId = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser.uid;
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('/' + userId + '/workoutPreferences/').once('value').then(function (snapshot) {
            snapshot.forEach((function (childSnapshot) {
                console.log('/' + userId + '/workoutPreferences/' + childSnapshot.key);
                __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('/' + userId + '/workoutPreferences/' + childSnapshot.key).update({ dayOfWorkout: workoutDay, fitnessLevel: workoutLevel, location: workoutLocation, type: workoutTypes });
            }));
        });
        //return to previous page 
        this.navCtrl.pop();
    };
    UpdateWorkoutDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-update-workout-details',template:/*ion-inline-start:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/update-workout-details/update-workout-details.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Update Workout Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<img id=\'logo\' alt="logo" src="/assets/imgs/Logo.png" > \n\n\n	<h3>Set Workout Preferences</h3>\n				<p>These will be use to help tailor your workouts.</p>\n				<ion-item>\n				  <ion-label>Workout types</ion-label>\n				  <ion-select required multiple="false" [(ngModel)]="workoutTypes">\n				    <ion-option value="Cardio">Cardio</ion-option>\n				    <ion-option value="Strength">Strength</ion-option>\n				  </ion-select>\n				</ion-item>\n				<ion-item>\n				  <ion-label>Workout Location</ion-label>\n				  <ion-select required multiple="false" [(ngModel)]="workoutLocation">\n				    <ion-option value="Home">Home</ion-option>\n				    <ion-option value="Gym">Gym</ion-option>\n				  </ion-select>\n				</ion-item>\n				<ion-item>\n					<ion-label>Fitness level</ion-label>\n					<ion-select required multiple="false" [(ngModel)]="workoutLevel">\n						<ion-option value="Beginner">Beginner</ion-option>\n						<ion-option value="Intermediate">Intermediate</ion-option>\n						<ion-option value="Advanced">Advanced</ion-option>\n					</ion-select>\n				</ion-item>\n				<ion-item>\n				  <ion-label>Preferred Day</ion-label>\n				  <ion-select required multiple="true" [(ngModel)]="workoutDay">\n				    <ion-option value="Monday">Monday</ion-option>\n				    <ion-option value="Tuesday">Tuesday</ion-option>\n				    <ion-option value="Tuesday">Wednesday</ion-option>\n				    <ion-option value="Tuesday">Thursday</ion-option>\n				    <ion-option value="Tuesday">Friday</ion-option>\n				    <ion-option value="Tuesday">Saturday</ion-option>\n				    <ion-option value="Tuesday">Sunday</ion-option>\n				  </ion-select>\n				</ion-item>\n				<button [disabled]="!workoutLevel || !workoutLocation || !workoutTypes" ion-button (click)="update(workoutTypes, workoutLocation, workoutLevel, workoutDay)">Update</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/update-workout-details/update-workout-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]])
    ], UpdateWorkoutDetailsPage);
    return UpdateWorkoutDetailsPage;
}());

//# sourceMappingURL=update-workout-details.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutStartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__workout_history_workout_history__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var WorkoutStartPage = /** @class */ (function () {
    function WorkoutStartPage(navCtrl, navParams, restProvider, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.db = db;
        this.exerciseInWorkoutDetail = [];
        this.exData = [];
        this.exerciseCount = 0;
        this.numDone = 0;
        this.buttonClicked = false;
        this.addHideWeightText = "Add Exercise Weight";
        this.workoutId = navParams.get('id');
        this.workoutName = navParams.get('name');
    }
    WorkoutStartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WorkoutStartPage');
        this.getWorkoutSpecifics(this.workoutId);
        this.slides.lockSwipes(true);
    };
    WorkoutStartPage.prototype.nextSlide = function () {
        this.slides.lockSwipes(false);
        var currentIndex = this.slides.getActiveIndex();
        console.log('Current index is', currentIndex);
        var nextSlide = currentIndex + 1;
        this.slides.slideTo(nextSlide, 500);
        //reset count of sets
        this.numDone = 0;
        //disable next page button.
        this.isEnabled = false;
        //lock swipes so user can't swipe themselves
        this.slides.lockSwipes(true);
        this.resetNextSlide();
    };
    WorkoutStartPage.prototype.resetNextSlide = function () {
        if (this.addHideWeightText == 'Remove Weight') {
            this.buttonClicked = !this.buttonClicked;
            this.addHideWeightText = 'Add Exercise Weight';
            this.weight = null;
        }
    };
    WorkoutStartPage.prototype.getWorkoutSpecifics = function (id) {
        var _this = this;
        this.restProvider.getCurrentWorkoutData(id).then(function (data) {
            _this.workout = data;
            var setList = _this.workout.day_list[0].set_list;
            for (var _i = 0, setList_1 = setList; _i < setList_1.length; _i++) {
                var x = setList_1[_i];
                _this.exerciseInWorkoutDetail.push(x);
                _this.exerciseCount = _this.exerciseCount + 1;
                x.exercise_list[0].obj.description = x.exercise_list[0].obj.description.toString().replace(/<\/?[^>]+(>|$)/g, "");
            }
        });
    };
    WorkoutStartPage.prototype.setComplete = function (set) {
        var totalSets = set.obj.sets;
        if (this.numDone == totalSets - 1) {
            this.numDone = this.numDone + 1;
            this.isEnabled = true;
        }
        else if (this.numDone == totalSets) {
            this.isEnabled = true;
        }
        else if (this.numDone !== totalSets) {
            this.numDone = this.numDone + 1;
        }
    };
    WorkoutStartPage.prototype.showWeightInput = function () {
        this.buttonClicked = !this.buttonClicked;
        if (this.addHideWeightText == 'Add Weight') {
            this.addHideWeightText = 'Remove Weight';
            this.weight = null;
        }
        else {
            this.addHideWeightText = 'Add Weight';
        }
    };
    WorkoutStartPage.prototype.saveWorkoutForUser = function () {
        var userId = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid;
        console.log('Name = ' + this.workoutName);
        this.db.list(userId + '/workoutHistory/').push({ date: Date(), id: this.workoutId, name: this.workoutName });
    };
    WorkoutStartPage.prototype.goToHistory = function () {
        this.saveWorkoutForUser();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__workout_history_workout_history__["a" /* WorkoutHistoryPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
    ], WorkoutStartPage.prototype, "slides", void 0);
    WorkoutStartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-workout-start',template:/*ion-inline-start:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/workout-start/workout-start.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Workout</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<img id=\'logo\' alt="logo" src="/assets/imgs/Logo.png" > \n\n	<ion-slides #exerciseSlider pager=false>\n\n		<ion-slide *ngFor="let ex of exerciseInWorkoutDetail; let i = index let odd = odd"\n      [class.odd]="odd">\n\n			<h6>Exercises {{i+1}} of {{exerciseCount}}</h6>\n			\n			<h5>{{ex.exercise_list[0].obj.name}}</h5>\n\n			<p>{{ex.exercise_list[0].obj.description}}</p>\n\n			<button id=\'showWeightInput\' ion-button (click)="showWeightInput()">{{addHideWeightText}}</button>\n			<br>\n			<ion-input id=\'weight\' [(ngModel)]="weight" *ngIf="buttonClicked" type="number" value=""></ion-input>\n\n			<p>{{ex.exercise_list[0].repetition_units[0].name}}: {{ex.exercise_list[0].setting_obj_list[0].reps}}</p>\n			<p>Sets: {{numDone}} of {{ex.obj.sets}}</p>\n			<button ion-button (click)="setComplete(ex)">Mark set complete</button>\n			<p><i>Please note you can\'t go to the next exercise until you mark your sets as complete!</i></p>\n			<button ion-button [disabled]="!isEnabled" (click)="nextSlide()">Next Exercise</button>\n\n\n	    </ion-slide>\n\n	    <ion-slide>\n	    	<h6>Workout Complete!</h6>\n	    	<p>Great job, you did brilliant completing your workout. We\'re proud of you and you should be of yourself. Keep the awesome work up</p>\n	    	<p>Fit2Me</p>\n	    	<button ion-button (click)="goToHistory()">Workout History</button>\n	    </ion-slide>\n\n	  \n	</ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/workout-start/workout-start.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"]])
    ], WorkoutStartPage);
    return WorkoutStartPage;
}());

//# sourceMappingURL=workout-start.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutPlanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_models_WorkoutPreferencesDataModel__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__workout_detail_workout_detail__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WorkoutPlanPage = /** @class */ (function () {
    function WorkoutPlanPage(navCtrl, navParams, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.userWorkoutDetail = new __WEBPACK_IMPORTED_MODULE_3__app_models_WorkoutPreferencesDataModel__["a" /* WorkoutPreferencesDataModel */]();
        this.preferredWorkoutsName = [];
    }
    WorkoutPlanPage.prototype.ionViewDidEnter = function () {
        this.getWorkoutPreferencesForUser(this.userWorkoutDetail);
        this.numWorkoutsEachWeek(this.userWorkoutDetail);
        this.getPreferredWorkouts(this.userWorkoutDetail);
    };
    WorkoutPlanPage.prototype.getWorkoutPreferencesForUser = function (userWorkoutDetail) {
        var user = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser;
        var userId = user.uid;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('/' + userId + '/workoutPreferences/').once('value').then(function (snapshot) {
            snapshot.forEach((function (childSnapshot) {
                userWorkoutDetail.setLocation(childSnapshot.val().location);
                userWorkoutDetail.setFitnessLevel(childSnapshot.val().fitnessLevel);
                userWorkoutDetail.setType(childSnapshot.val().type);
                userWorkoutDetail.setDayOfWorkout(childSnapshot.val().dayOfWorkout);
            }));
        });
    };
    WorkoutPlanPage.prototype.numWorkoutsEachWeek = function (userWorkoutDetail) {
        var user = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser;
        var userId = user.uid;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('/' + userId + '/workoutPreferences/').once('value').then(function (snapshot) {
            snapshot.forEach((function (childSnapshot) {
                userWorkoutDetail.setDayOfWorkout(childSnapshot.val().dayOfWorkout);
            }));
        });
    };
    WorkoutPlanPage.prototype.getProfilePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
    };
    WorkoutPlanPage.prototype.viewMoreDetail = function (workout) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__workout_detail_workout_detail__["a" /* WorkoutDetailPage */], {
            data: workout
        });
    };
    //filter workouts based on user preference
    WorkoutPlanPage.prototype.getPreferredWorkouts = function (workout) {
        var _this = this;
        //clear array on reload of page, sometimes this can cache e.g. if updating profile and then the array is added too. 
        this.preferredWorkoutsName = [];
        var locationMatchString;
        var typeMatchString;
        this.restProvider.getAllWorkoutData()
            .then(function (data) {
            if (data.hasOwnProperty('results')) {
                var location_1 = workout.getLocation();
                var type = workout.getType();
                if (location_1 == 'Home') {
                    locationMatchString = '#NoEquipment';
                }
                else {
                    locationMatchString = '#Equipment';
                }
                if (type == 'Strength') {
                    typeMatchString = '#Strength';
                }
                else {
                    typeMatchString = '#Cardio';
                }
                _this.workouts = data.results;
                for (var _i = 0, _a = _this.workouts; _i < _a.length; _i++) {
                    var w = _a[_i];
                    //pushing workout into array. Here you can access id through 'id' and name using 'comment.'
                    if (w.comment.includes(locationMatchString) && w.comment.includes(typeMatchString)) {
                        //checking if name contains preference. 
                        _this.preferredWorkoutsName.push(w);
                        console.log(w);
                    }
                }
            }
        });
    };
    WorkoutPlanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-workout-plan',template:/*ion-inline-start:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/workout-plan/workout-plan.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Workout Plan</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n	<img id=\'logo\' alt="logo" src="/assets/imgs/Logo.png" > \n\n	<ion-card class=\'cardTop\'>\n		<ion-card-title>Your Preferences</ion-card-title>\n		<ion-card-content>\n			<p><label>Type(s): </label> {{userWorkoutDetail.type}}</p>\n			<p><label>Location: </label> {{userWorkoutDetail.location}}</p>\n			<p><label>Day(s) of Workout: </label> {{userWorkoutDetail.dayOfWorkout}}</p>\n		</ion-card-content>\n	</ion-card>\n\n	<button ion-button (click)="getProfilePage()">Update preferences</button>\n\n\n	<h5>Your suggested workouts</h5>\n\n	<div>\n	<ion-list inset>\n    	<ion-item *ngFor="let w of preferredWorkoutsName">\n\n\n	    	<h2>{{w.comment}}</h2>\n     		<button ion-button item-right (click)="viewMoreDetail(w)">View</button>\n    	</ion-item>\n  	</ion-list>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/workout-plan/workout-plan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__["a" /* RestProvider */]])
    ], WorkoutPlanPage);
    return WorkoutPlanPage;
}());

//# sourceMappingURL=workout-plan.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__workout_detail_workout_detail__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WorkoutsPage = /** @class */ (function () {
    function WorkoutsPage(navCtrl, navParams, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.workoutNames = [];
    }
    WorkoutsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WorkoutsPage');
        this.getWorkouts();
    };
    WorkoutsPage.prototype.getWorkouts = function () {
        var _this = this;
        this.workoutNames = [];
        this.restProvider.getAllWorkoutData()
            .then(function (data) {
            if (data.hasOwnProperty('results')) {
                _this.workouts = data.results;
                for (var _i = 0, _a = _this.workouts; _i < _a.length; _i++) {
                    var w = _a[_i];
                    //pushing workout into array. Here you can access id through 'id' and name using 'comment.'
                    _this.workoutNames.push(w);
                }
            }
        });
    };
    WorkoutsPage.prototype.viewMoreDetail = function (workout) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__workout_detail_workout_detail__["a" /* WorkoutDetailPage */], {
            data: workout
        });
    };
    WorkoutsPage.prototype.clearFilter = function () {
        //clear fields.
        this.workoutTypeFilter = null;
        this.equipFilter = false;
        //get basic exercise list with no features. 
        this.getWorkouts();
    };
    WorkoutsPage.prototype.applyFilter = function () {
        var _this = this;
        this.workoutNames = [];
        var equipment;
        if (this.equipFilter == true) {
            equipment = '#Equipment';
        }
        else {
            equipment = '#NoEquipment';
        }
        this.restProvider.getAllWorkoutData().then(function (data) {
            _this.exercises = data.results;
            console.log(_this.workoutTypeFilter);
            console.log(equipment);
            if (data.hasOwnProperty('results')) {
                for (var _i = 0, _a = _this.workouts; _i < _a.length; _i++) {
                    var w = _a[_i];
                    if (w.comment.includes(_this.workoutTypeFilter) && w.comment.includes(equipment)) {
                        _this.workoutNames.push(w);
                    }
                }
            }
        });
    };
    WorkoutsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-workouts',template:/*ion-inline-start:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/workouts/workouts.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Workouts</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<img id=\'logo\' alt="logo" src="/assets/imgs/Logo.png" > \n\n	<h3>Filter Workouts</h3>\n\n		<ion-item>\n		  <ion-label>Workout Type</ion-label>\n		  <ion-select  multiple="false" [(ngModel)]="workoutTypeFilter">\n		    <ion-option value="#Strength">Strength</ion-option>\n		    <ion-option value="#Cardio">Cardio</ion-option>\n		  </ion-select>\n		</ion-item>\n\n		<ion-item>\n	    	<ion-label>Equipment</ion-label>\n	    	<ion-toggle [(ngModel)]="equipFilter"></ion-toggle>\n	  	</ion-item>\n\n	<ion-item>\n		<button [disabled]=\'!workoutTypeFilter\' ion-button (click)="applyFilter()">Apply Filter</button>\n\n		<button ion-button (click)="clearFilter()">Clear Filter</button>\n	</ion-item>\n\n\n    	<ion-list inset>\n    		<ion-item *ngFor="let w of workoutNames">\n		    	<h2>{{w.comment}}</h2>\n      			<button ion-button item-right (click)="viewMoreDetail(w)">View</button>\n    		</ion-item>\n  		</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/workouts/workouts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
    ], WorkoutsPage);
    return WorkoutsPage;
}());

//# sourceMappingURL=workouts.js.map

/***/ }),

/***/ 208:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 208;

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-goal/add-goal.module": [
		938,
		18
	],
	"../pages/exercise-detail/exercise-detail.module": [
		939,
		17
	],
	"../pages/exercise-list/exercise-list.module": [
		940,
		16
	],
	"../pages/goal-graphed/goal-graphed.module": [
		941,
		15
	],
	"../pages/goals/goals.module": [
		942,
		14
	],
	"../pages/home/home.module": [
		943,
		13
	],
	"../pages/onboarding/onboarding.module": [
		945,
		12
	],
	"../pages/password-reset/password-reset.module": [
		944,
		11
	],
	"../pages/profile/profile.module": [
		946,
		10
	],
	"../pages/register-disclaimer/register-disclaimer.module": [
		947,
		9
	],
	"../pages/update-health-details/update-health-details.module": [
		948,
		8
	],
	"../pages/update-reminder-details/update-reminder-details.module": [
		949,
		7
	],
	"../pages/update-user-details/update-user-details.module": [
		950,
		6
	],
	"../pages/update-workout-details/update-workout-details.module": [
		951,
		5
	],
	"../pages/workout-detail/workout-detail.module": [
		952,
		4
	],
	"../pages/workout-history/workout-history.module": [
		953,
		3
	],
	"../pages/workout-plan/workout-plan.module": [
		954,
		2
	],
	"../pages/workout-start/workout-start.module": [
		955,
		1
	],
	"../pages/workouts/workouts.module": [
		956,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 252;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
//firebase authentication environment settings 
var environment = {
    production: false,
    // fbAppId: 186848361921511,
    googleWebClientId: '401245627689-ke4oci7bc8440anmpo4dms1od5keoome.apps.googleusercontent.com',
    firebase: {
        apiKey: "AIzaSyBP0X8X4o8dvCCUabEGpaE9deU2l0OYZr8",
        authDomain: "fit2me.firebaseapp.com",
        databaseURL: "https://fit2me.firebaseio.com",
        projectId: "fit2me",
        storageBucket: "fit2me.appspot.com",
        messagingSenderId: "397202573635"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_user_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_disclaimer_register_disclaimer__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__onboarding_onboarding__ = __webpack_require__(544);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, authService, formBuilder, userService) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.errorMessage = '';
        this.successMessage = '';
    }
    RegisterPage.prototype.ionViewWillLoad = function () {
        this.registerForm = this.formBuilder.group({
            fullname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]()
        });
    };
    RegisterPage.prototype.tryRegister = function (value) {
        var _this = this;
        this.authService.doRegister(value)
            .then(function (res) {
            _this.errorMessage = "";
            console.log(value.email);
            var user = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser;
            user.updateProfile({
                displayName: value.fullname,
                photoURL: ""
            });
            user.updateEmail(value.email).then(function () {
                //success 
                console.log('Email updated successfully');
            }).catch(function (error) {
                //error
                console.log('Error updating email.');
            });
            //push to disclaimer page to accept disclaimer
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__register_disclaimer_register_disclaimer__["a" /* RegisterDisclaimerPage */]);
            console.log(res);
        }, function (err) {
            _this.errorMessage = err.message;
            _this.successMessage = "";
        });
    };
    RegisterPage.prototype.tryFacebookLogin = function () {
        var _this = this;
        this.authService.doFacebookLogin()
            .then(function (res) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__onboarding_onboarding__["a" /* OnboardingPage */]);
        }, function (err) {
            _this.errorMessage = err.message;
        });
    };
    RegisterPage.prototype.tryGoogleLogin = function () {
        var _this = this;
        this.authService.doGoogleLogin()
            .then(function (res) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__onboarding_onboarding__["a" /* OnboardingPage */]);
        }, function (err) {
            _this.errorMessage = err.message;
        });
    };
    RegisterPage.prototype.goLoginPage = function () {
        this.navCtrl.pop();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/register/register.html"*/'<ion-header>\n  <ion-navbar swipeBackEnabled="false">\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="form-content">\n\n  <img id=\'logo\' alt="logo" src="/assets/imgs/Logo.png" > \n  \n  <form class="form" [formGroup]="registerForm" (ngSubmit)="tryRegister(registerForm.value)">\n\n    <ion-item>\n      <ion-label floating>Full Name</ion-label>\n      <ion-input type="text" formControlName="fullname"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="text" formControlName="email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" formControlName="password" class="form-controll"></ion-input>\n    </ion-item>\n\n    <button ion-button block class="submit-button" type="submit">Register</button>\n    <label class="error-message">{{errorMessage}}</label>\n    <label class="success-message">{{successMessage}}</label>\n    <br>\n    <div>\n      <p>Already registered? <a (click)="goLoginPage()">Try to Log in</a></p>\n    </div>\n    <br>\n  </form>\n  <button ion-button block type="submit" class="facebook-button" (click)="tryFacebookLogin()">Register with Facebook</button>\n  <button ion-button block type="submit" class="google-button"  (click)="tryGoogleLogin()">Register with Google</button>\n</ion-content>\n'/*ion-inline-end:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/register/register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__core_user_service__["a" /* UserService */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutPreferencesDataModel; });
var WorkoutPreferencesDataModel = /** @class */ (function () {
    function WorkoutPreferencesDataModel() {
        this.fitnessLevel = "";
        this.location = "";
        this.type = "";
        this.dayOfWorkout = "";
    }
    WorkoutPreferencesDataModel.prototype.setLocation = function (val) {
        this.location = val;
    };
    WorkoutPreferencesDataModel.prototype.getLocation = function () {
        return this.location;
    };
    WorkoutPreferencesDataModel.prototype.getFitnessLevel = function () {
        return this.fitnessLevel;
    };
    WorkoutPreferencesDataModel.prototype.setFitnessLevel = function (val) {
        this.fitnessLevel = val;
    };
    WorkoutPreferencesDataModel.prototype.getType = function () {
        return this.type;
    };
    WorkoutPreferencesDataModel.prototype.setType = function (val) {
        this.type = val;
    };
    WorkoutPreferencesDataModel.prototype.getDayOfWorkout = function () {
        return this.dayOfWorkout;
    };
    WorkoutPreferencesDataModel.prototype.setDayOfWorkout = function (val) {
        this.dayOfWorkout = val;
    };
    return WorkoutPreferencesDataModel;
}());

//# sourceMappingURL=WorkoutPreferencesDataModel.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Service aka provider for API calls. 
var RestProvider = /** @class */ (function () {
    function RestProvider(http) {
        this.http = http;
        this.apiUrl = "https://jsonplaceholder.typicode.com";
        this.format = "format=json&language=2";
        this.exerciseUrl = "https://wger.de/api/v2/exercise?format=json&language=2&limit=150&status=2"; //limited to 150 to reduce load times on poor networks.
        this.exerciseMoreInfoUrl = "https://wger.de/api/v2/exerciseinfo/";
        this.exerciseImgUrl = "https://wger.de/api/v2/exerciseimage/?exercise=";
        this.url = "";
        this.apiKey = 'fad7d1a9f71113d3e08ae7af891f7ec0051217bb';
        this.workoutUrl = "https://wger.de/api/v2/workout";
        this.workoutsDetailExtension = "/canonical_representation/";
        console.log('Hello RestServiceProvider Provider');
        this.getExercises();
    }
    RestProvider.prototype.ionViewDidLoad = function () {
        this.getExercises();
    };
    RestProvider.prototype.getExercises = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.exerciseUrl).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getExercisesWithFilter = function (type, equipment) {
        var _this = this;
        //build url based on parameter values
        if (equipment != undefined && type != undefined) {
            this.url = this.exerciseUrl + "&equipment=" + equipment + "&muscles=" + type;
        }
        else if (equipment == undefined && type != "") {
            this.url = this.exerciseUrl + "&muscles=" + type;
        }
        else if (equipment != "" && type == undefined) {
            this.url = this.exerciseUrl + "&equipment=" + equipment;
        }
        else if (equipment == undefined && type == undefined) {
            this.url = this.exerciseUrl;
        }
        console.log(this.url);
        return new Promise(function (resolve) {
            _this.http.get(_this.url).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getExerciseImage = function (id) {
        var _this = this;
        //get image for exercise id
        console.log(id);
        this.url = this.exerciseImgUrl + id + "&" + this.format;
        console.log(this.url);
        return new Promise(function (resolve) {
            _this.http.get(_this.url).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getExerciseMoreData = function (id) {
        var _this = this;
        this.url = this.exerciseMoreInfoUrl + id + "/?" + this.format;
        return new Promise(function (resolve) {
            _this.http.get(_this.url).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getAllWorkoutData = function () {
        var _this = this;
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Authorization': 'Token fad7d1a9f71113d3e08ae7af891f7ec0051217bb'
            })
        };
        return new Promise(function (resolve) {
            _this.http.get('https://wger.de/api/v2/workout/', httpOptions).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getCurrentWorkoutData = function (id) {
        var _this = this;
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Authorization': 'Token fad7d1a9f71113d3e08ae7af891f7ec0051217bb'
            })
        };
        this.url = this.workoutUrl + '/' + id + this.workoutsDetailExtension + "?" + this.format;
        return new Promise(function (resolve) {
            _this.http.get(_this.url, httpOptions).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnboardingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OnboardingPage = /** @class */ (function () {
    function OnboardingPage(navCtrl, navParams, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
    }
    OnboardingPage.prototype.nextSlide = function () {
        var currentIndex = this.slides.getActiveIndex();
        console.log('Current index is', currentIndex);
        var nextSlide = currentIndex + 1;
        this.slides.slideTo(nextSlide, 500);
    };
    OnboardingPage.prototype.storeOnboardingDetails = function () {
        //get user id to store details under
        var userId = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser.uid;
        this.db.list(userId + '/workoutPreferences/').push({ type: this.workoutTypes, location: this.workoutLocation, fitnessLevel: this.workoutLevel, dayOfWorkout: this.workoutDay });
        this.db.list(userId + '/healthDetails/').push({ weight: this.weight, height: this.height, age: this.age, activityLevel: this.activityLevel });
        if (this.remindersEnabled) {
            this.db.list(userId + '/reminderPreferences/').push({ enableReminders: this.remindersEnabled, frequency: this.reminderFrequency, time: this.reminderTime });
        }
        else {
            this.db.list(userId + '/reminderPreferences/').push({ enableReminders: this.remindersEnabled, frequency: "", time: "" });
        }
    };
    OnboardingPage.prototype.onboardingDone = function () {
        //store data on submit of onboarding page. 
        this.storeOnboardingDetails();
        //set root ensures that the menu icon is not hidden. 
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
    ], OnboardingPage.prototype, "slides", void 0);
    OnboardingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-onboarding',template:/*ion-inline-start:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/onboarding/onboarding.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton="true">\n    <ion-title>Profile setup</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n	<img id=\'logo\' alt="logo" src="/assets/imgs/Logo.png" > \n\n	<ion-slides #mySlider pager=false>\n		<ion-slide>\n				<h3>Set Workout Preferences</h3>\n				<p>These will be use to help tailor your workouts.</p>\n				<ion-item>\n				  <ion-label>Workout types</ion-label>\n				  <ion-select required multiple="false" [(ngModel)]="workoutTypes">\n				    <ion-option value="Cardio">Cardio</ion-option>\n				    <ion-option value="Strength">Strength</ion-option>\n				  </ion-select>\n				</ion-item>\n				<ion-item>\n				  <ion-label>Workout Location</ion-label>\n				  <ion-select required multiple="false" [(ngModel)]="workoutLocation">\n				    <ion-option value="Home">Home</ion-option>\n				    <ion-option value="Gym">Gym</ion-option>\n				  </ion-select>\n				</ion-item>\n				<ion-item>\n					<ion-label>Fitness level</ion-label>\n					<ion-select required multiple="false" [(ngModel)]="workoutLevel">\n						<ion-option value="Beginner">Beginner</ion-option>\n						<ion-option value="Intermediate">Intermediate</ion-option>\n						<ion-option value="Advanced">Advanced</ion-option>\n					</ion-select>\n				</ion-item>\n				<ion-item>\n				  <ion-label>Preferred Day</ion-label>\n				  <ion-select required multiple="true" [(ngModel)]="workoutDay">\n				    <ion-option value="Monday">Monday</ion-option>\n				    <ion-option value="Tuesday">Tuesday</ion-option>\n				    <ion-option value="Tuesday">Wednesday</ion-option>\n				    <ion-option value="Tuesday">Thursday</ion-option>\n				    <ion-option value="Tuesday">Friday</ion-option>\n				    <ion-option value="Tuesday">Saturday</ion-option>\n				    <ion-option value="Tuesday">Sunday</ion-option>\n				  </ion-select>\n				</ion-item>\n				<button [disabled]="!workoutLevel || !workoutLocation || !workoutTypes" ion-button (click)="nextSlide()">Next</button>\n		</ion-slide>\n\n		<ion-slide>\n			<h3>Set Health Details</h3>\n			<p>These details will be used to calculate your body mass index (BMI) and basal metabolic rate (BMR). Don\'t worry - we\'ll explain this more later.\n			<ion-item>\n				<ion-label>Weight</ion-label>\n    			<ion-input [(ngModel)]="weight" type="number" placeholder="kg"></ion-input>\n  			</ion-item>\n			<ion-item>\n				<ion-label>Height</ion-label>\n    			<ion-input [(ngModel)]="height" type="number" placeholder="cm"></ion-input>\n  			</ion-item>\n  			<ion-item>\n				<ion-label>Age</ion-label>\n    			<ion-input [(ngModel)]="age" type="number" placeholder="years"></ion-input>\n  			</ion-item>\n\n  			<ion-item>\n					<ion-label>Activity level</ion-label>\n				<ion-select multiple="false" [(ngModel)]="activityLevel">\n					<ion-option value="1.2"> Sedentary</ion-option>\n					<ion-option value="1.375">Lightly active (light exercise/sports 1-3 days/week)</ion-option>\n					<ion-option value="1.55">Moderately active</ion-option>\n					<ion-option value="1.725">Very active</ion-option>\n					<ion-option value="1.9">Extra active</ion-option>\n				</ion-select>\n			</ion-item>\n\n			<button [disabled]="!weight || !height || !age || !activityLevel" ion-button (click)="nextSlide()">Next</button>\n		</ion-slide>\n\n		<ion-slide>\n			<h3>Set Reminder Preferences</h3>\n			<p>Reminders will help to motivate you towards reaching you goal.</p>\n\n			<ion-item>\n			    <ion-label>Enable reminders</ion-label>\n			    <ion-toggle [(ngModel)]="remindersEnabled"></ion-toggle>\n 			</ion-item>\n 			<ion-item>\n 				<ion-label>Frequency</ion-label>\n 				<ion-select multiple="false" [(ngModel)]="reminderFrequency">\n 					<ion-option value="Every day">Every day</ion-option>\n 					<ion-option value="Every weekday">Every weekday</ion-option>\n 					<ion-option value="Once a week">Once a week</ion-option>\n 				</ion-select>\n 			</ion-item>\n\n 			<ion-item>\n			  <ion-label>Time</ion-label>\n			  <ion-datetime displayFormat="HH:mm" [(ngModel)]="reminderTime"></ion-datetime>\n			</ion-item>\n			<button ion-button (click)="onboardingDone()">Finish setup</button>\n\n		</ion-slide>\n\n	</ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/onboarding/onboarding.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]])
    ], OnboardingPage);
    return OnboardingPage;
}());

//# sourceMappingURL=onboarding.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateUserDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// db imports


var UpdateUserDetailsPage = /** @class */ (function () {
    function UpdateUserDetailsPage(navCtrl, navParams, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
    }
    UpdateUserDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpdateUserDetailsPage');
    };
    UpdateUserDetailsPage.prototype.update = function (fullname, email) {
        var user = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser;
        user.updateProfile({
            displayName: fullname,
            photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(function () {
            // Update successful.
        }).catch(function (error) {
            // An error happened.
        });
        //return to previous page 
        this.navCtrl.pop();
    };
    UpdateUserDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-update-user-details',template:/*ion-inline-start:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/update-user-details/update-user-details.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Update User Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <img id=\'logo\' alt="logo" src="/assets/imgs/Logo.png" > \n\n	<ion-item>\n      <ion-label floating>Full Name</ion-label>\n      <ion-input type="text" formControlName="fullname" (ngModel)="fullname"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="text" formControlName="email" (ngModel)="email"></ion-input>\n    </ion-item>\n\n    <button [disabled]="!email || !fullname ion-button (click)="update(fullname, email)">Update</button>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/update-user-details/update-user-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]])
    ], UpdateUserDetailsPage);
    return UpdateUserDetailsPage;
}());

//# sourceMappingURL=update-user-details.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(551);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(935);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_register__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_register_disclaimer_register_disclaimer__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_update_health_details_update_health_details__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_update_reminder_details_update_reminder_details__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_update_workout_details_update_workout_details__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_exercise_list_exercise_list__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_exercise_detail_exercise_detail__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_workout_plan_workout_plan__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_workouts_workouts__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_workout_detail_workout_detail__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_workout_start_workout_start__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_workout_history_workout_history__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_add_goal_add_goal__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_goals_goals__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_goal_graphed_goal_graphed__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_password_reset_password_reset__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_core_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_core_user_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angularfire2__ = __webpack_require__(936);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angularfire2_auth__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__environment_environment__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_facebook__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_google_plus__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_twitter_connect__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_http__ = __webpack_require__(937);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__angular_common_http__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_rest_rest__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//page imports 



















//service imports


//modular imports




//imports for alternative login using facebook etc. 






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_disclaimer_register_disclaimer__["a" /* RegisterDisclaimerPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_update_reminder_details_update_reminder_details__["a" /* UpdateReminderDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_update_workout_details_update_workout_details__["a" /* UpdateWorkoutDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_update_health_details_update_health_details__["a" /* UpdateHealthDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_exercise_list_exercise_list__["a" /* ExerciseListPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_exercise_detail_exercise_detail__["a" /* ExerciseDetailPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_workouts_workouts__["a" /* WorkoutsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_workout_plan_workout_plan__["a" /* WorkoutPlanPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_workout_detail_workout_detail__["a" /* WorkoutDetailPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_workout_start_workout_start__["a" /* WorkoutStartPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_workout_history_workout_history__["a" /* WorkoutHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_goals_goals__["a" /* GoalsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_add_goal_add_goal__["a" /* AddGoalPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_goal_graphed_goal_graphed__["a" /* GoalGraphedPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_password_reset_password_reset__["a" /* PasswordResetPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-goal/add-goal.module#AddGoalPageModule', name: 'AddGoalPage', segment: 'add-goal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/exercise-detail/exercise-detail.module#ExerciseDetailPageModule', name: 'ExerciseDetailPage', segment: 'exercise-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/exercise-list/exercise-list.module#ExerciseListPageModule', name: 'ExerciseListPage', segment: 'exercise-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/goal-graphed/goal-graphed.module#GoalGraphedPageModule', name: 'GoalGraphedPage', segment: 'goal-graphed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/goals/goals.module#GoalsPageModule', name: 'GoalsPage', segment: 'goals', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/password-reset/password-reset.module#PasswordResetPageModule', name: 'PasswordResetPage', segment: 'password-reset', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding/onboarding.module#OnboardingPageModule', name: 'OnboardingPage', segment: 'onboarding', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register-disclaimer/register-disclaimer.module#RegisterDisclaimerPageModule', name: 'RegisterDisclaimerPage', segment: 'register-disclaimer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/update-health-details/update-health-details.module#UpdateHealthDetailsPageModule', name: 'UpdateHealthDetailsPage', segment: 'update-health-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/update-reminder-details/update-reminder-details.module#UpdateReminderDetailsPageModule', name: 'UpdateReminderDetailsPage', segment: 'update-reminder-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/update-user-details/update-user-details.module#UpdateUserDetailsPageModule', name: 'UpdateUserDetailsPage', segment: 'update-user-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/update-workout-details/update-workout-details.module#UpdateWorkoutDetailsPageModule', name: 'UpdateWorkoutDetailsPage', segment: 'update-workout-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/workout-detail/workout-detail.module#WorkoutDetailPageModule', name: 'WorkoutDetailPage', segment: 'workout-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/workout-history/workout-history.module#WorkoutHistoryPageModule', name: 'WorkoutHistoryPage', segment: 'workout-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/workout-plan/workout-plan.module#WorkoutPlanPageModule', name: 'WorkoutPlanPage', segment: 'workout-plan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/workout-start/workout-start.module#WorkoutStartPageModule', name: 'WorkoutStartPage', segment: 'workout-start', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/workouts/workouts.module#WorkoutsPageModule', name: 'WorkoutsPage', segment: 'workouts', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_28_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_31__environment_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_30_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_29_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_35__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_36__angular_common_http__["b" /* HttpClientModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_disclaimer_register_disclaimer__["a" /* RegisterDisclaimerPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_update_reminder_details_update_reminder_details__["a" /* UpdateReminderDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_update_workout_details_update_workout_details__["a" /* UpdateWorkoutDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_update_health_details_update_health_details__["a" /* UpdateHealthDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_exercise_list_exercise_list__["a" /* ExerciseListPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_exercise_detail_exercise_detail__["a" /* ExerciseDetailPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_workouts_workouts__["a" /* WorkoutsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_workout_plan_workout_plan__["a" /* WorkoutPlanPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_workout_detail_workout_detail__["a" /* WorkoutDetailPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_workout_start_workout_start__["a" /* WorkoutStartPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_workout_history_workout_history__["a" /* WorkoutHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_goals_goals__["a" /* GoalsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_add_goal_add_goal__["a" /* AddGoalPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_goal_graphed_goal_graphed__["a" /* GoalGraphedPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_password_reset_password_reset__["a" /* PasswordResetPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_26__pages_core_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_twitter_connect__["a" /* TwitterConnect */],
                __WEBPACK_IMPORTED_MODULE_27__pages_core_user_service__["a" /* UserService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_37__providers_rest_rest__["a" /* RestProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_twitter_connect__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environment_environment__ = __webpack_require__(500);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AuthService = /** @class */ (function () {
    function AuthService(afAuth, fb, googlePlus, tw, platform) {
        this.afAuth = afAuth;
        this.fb = fb;
        this.googlePlus = googlePlus;
        this.tw = tw;
        this.platform = platform;
    }
    AuthService.prototype.doRegister = function (value) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().createUserWithEmailAndPassword(value.email, value.password)
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.doLogin = function (value) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().signInWithEmailAndPassword(value.email, value.password)
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.doLogout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (__WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().currentUser) {
                _this.afAuth.auth.signOut();
                resolve();
            }
            else {
                reject();
            }
        });
    };
    AuthService.prototype.doGoogleLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.platform.is('cordova')) {
                _this.googlePlus.login({
                    'scopes': '',
                    'webClientId': __WEBPACK_IMPORTED_MODULE_8__environment_environment__["a" /* environment */].googleWebClientId,
                    'offline': true
                }).then(function (response) {
                    var googleCredential = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].GoogleAuthProvider.credential(response.idToken);
                    __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().signInWithCredential(googleCredential)
                        .then(function (user) {
                        resolve();
                    });
                }, function (err) {
                    reject(err);
                });
            }
            else {
                _this.afAuth.auth
                    .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].GoogleAuthProvider())
                    .then(function (user) {
                    resolve();
                }, function (err) {
                    reject(err);
                });
            }
        });
    };
    AuthService.prototype.doFacebookLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.platform.is('cordova')) {
                //["public_profile"] is the array of permissions, you can add more if you need
                _this.fb.login(["public_profile"])
                    .then(function (response) {
                    var facebookCredential = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].FacebookAuthProvider.credential(response.authResponse.accessToken);
                    __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().signInWithCredential(facebookCredential)
                        .then(function (user) { return resolve(); });
                }, function (err) { return reject(err); });
            }
            else {
                _this.afAuth.auth
                    .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].FacebookAuthProvider())
                    .then(function (result) {
                    //Default facebook img is too small and we need a bigger image
                    var bigImgUrl = "https://graph.facebook.com/" + result.additionalUserInfo.profile + "/picture?height=500";
                    // update profile to save the big fb profile img.
                    __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().currentUser.updateProfile({
                        displayName: result.user.displayName,
                        photoURL: bigImgUrl
                    }).then(function (res) { return resolve(); }, function (err) {
                        reject(err);
                    });
                }, function (err) {
                    reject(err);
                });
            }
        });
    };
    AuthService.prototype.doTwitterLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // if we are in a mobile device we use the twitter native plugin
            if (_this.platform.is('cordova')) {
                _this.tw.login()
                    .then(function (response) {
                    var twitterCredential = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].TwitterAuthProvider.credential(response.token, response.secret);
                    __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().signInWithCredential(twitterCredential)
                        .then(function (user) { return resolve(); }, function (error) { return reject(error); });
                }, function (err) {
                    console.log(err);
                    reject(err);
                });
            }
            else {
                _this.afAuth.auth
                    .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].TwitterAuthProvider())
                    .then(function (result) {
                    //Default twitter img is just 48x48px and we need a bigger image https://developer.twitter.com/en/docs/accounts-and-users/user-profile-images-and-banners
                    var bigImgUrl = (result.user.photoURL).replace('_normal', '_400x400');
                    // update profile to save the big tw profile img.
                    __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().currentUser.updateProfile({
                        displayName: result.user.displayName,
                        photoURL: bigImgUrl
                    }).then(function (res) { return resolve(); }, function (err) {
                        reject(err);
                    });
                }, function (err) {
                    reject(err);
                });
            }
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_twitter_connect__["a" /* TwitterConnect */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_models_WorkoutStatsDataModel__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WorkoutHistoryPage = /** @class */ (function () {
    function WorkoutHistoryPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.workoutStats = new __WEBPACK_IMPORTED_MODULE_3__app_models_WorkoutStatsDataModel__["a" /* WorkoutStatsDataModel */]();
        this.workoutName = [];
    }
    WorkoutHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WorkoutHistoryPage');
        this.viewCtrl.showBackButton(false);
        this.workoutName = this.getWorkoutHistory();
        this.countWorkouts(this.workoutStats);
        this.getLastWorkout(this.workoutStats);
    };
    WorkoutHistoryPage.prototype.getWorkoutHistory = function () {
        var user = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser;
        var userId = user.uid;
        var data = [];
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('/' + userId + '/workoutHistory/').once('value').then(function (snapshot) {
            snapshot.forEach((function (childSnapshot) {
                var wId = childSnapshot.val().id;
                var wName = childSnapshot.val().name;
                var i = childSnapshot.val().date.indexOf('GMT');
                var wDate = childSnapshot.val().date.substring(0, i);
                data.push({
                    id: wId,
                    name: wName,
                    date: wDate
                });
            }));
        });
        return data;
    };
    WorkoutHistoryPage.prototype.countWorkouts = function (w) {
        var user = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser;
        var userId = user.uid;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('/' + userId + '/workoutHistory/').once('value').then(function (snapshot) {
            w.countOfWorkout = snapshot.numChildren();
        });
    };
    WorkoutHistoryPage.prototype.getLastWorkout = function (w) {
        var user = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser;
        var userId = user.uid;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('/' + userId + '/workoutHistory/').limitToLast(1).once('value').then(function (snapshot) {
            console.log(snapshot);
            snapshot.forEach((function (childSnapshot) {
                var i = childSnapshot.val().date.indexOf('GMT');
                w.lastWorkoutDay = childSnapshot.val().date.substring(0, i);
            }));
        });
    };
    WorkoutHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-workout-history',template:/*ion-inline-start:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/workout-history/workout-history.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Workout History</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <img id=\'logo\' alt="logo" src="/assets/imgs/Logo.png" > \n\n	<ion-card>\n		<ion-card-header>\n			<ion-card-title>Your Statistics</ion-card-title>\n		</ion-card-header>\n		<ion-card-content>\n			<p><b>Total Workouts:</b> {{workoutStats.countOfWorkout}}</p>\n 			<p><b>Date of Last Workout:</b> {{workoutStats.lastWorkoutDay}}</p>\n		</ion-card-content>\n	</ion-card>\n\n\n <h3>Your Workout History</h3>\n\n  <div *ngFor="let w of workoutName">\n\n  	<ion-card>\n  		<ion-card-header>\n  			<ion-card-title>{{w.name}}</ion-card-title>\n  		</ion-card-header>\n  		<ion-card-content>\n  			<p><b>Date completed:</b> {{w.date}}</p>\n  		</ion-card-content>\n  	</ion-card>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/pages/workout-history/workout-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], WorkoutHistoryPage);
    return WorkoutHistoryPage;
}());

//# sourceMappingURL=workout-history.js.map

/***/ }),

/***/ 890:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 367,
	"./af.js": 367,
	"./ar": 368,
	"./ar-dz": 369,
	"./ar-dz.js": 369,
	"./ar-kw": 370,
	"./ar-kw.js": 370,
	"./ar-ly": 371,
	"./ar-ly.js": 371,
	"./ar-ma": 372,
	"./ar-ma.js": 372,
	"./ar-sa": 373,
	"./ar-sa.js": 373,
	"./ar-tn": 374,
	"./ar-tn.js": 374,
	"./ar.js": 368,
	"./az": 375,
	"./az.js": 375,
	"./be": 376,
	"./be.js": 376,
	"./bg": 377,
	"./bg.js": 377,
	"./bm": 378,
	"./bm.js": 378,
	"./bn": 379,
	"./bn.js": 379,
	"./bo": 380,
	"./bo.js": 380,
	"./br": 381,
	"./br.js": 381,
	"./bs": 382,
	"./bs.js": 382,
	"./ca": 383,
	"./ca.js": 383,
	"./cs": 384,
	"./cs.js": 384,
	"./cv": 385,
	"./cv.js": 385,
	"./cy": 386,
	"./cy.js": 386,
	"./da": 387,
	"./da.js": 387,
	"./de": 388,
	"./de-at": 389,
	"./de-at.js": 389,
	"./de-ch": 390,
	"./de-ch.js": 390,
	"./de.js": 388,
	"./dv": 391,
	"./dv.js": 391,
	"./el": 392,
	"./el.js": 392,
	"./en-SG": 393,
	"./en-SG.js": 393,
	"./en-au": 394,
	"./en-au.js": 394,
	"./en-ca": 395,
	"./en-ca.js": 395,
	"./en-gb": 396,
	"./en-gb.js": 396,
	"./en-ie": 397,
	"./en-ie.js": 397,
	"./en-il": 398,
	"./en-il.js": 398,
	"./en-nz": 399,
	"./en-nz.js": 399,
	"./eo": 400,
	"./eo.js": 400,
	"./es": 401,
	"./es-do": 402,
	"./es-do.js": 402,
	"./es-us": 403,
	"./es-us.js": 403,
	"./es.js": 401,
	"./et": 404,
	"./et.js": 404,
	"./eu": 405,
	"./eu.js": 405,
	"./fa": 406,
	"./fa.js": 406,
	"./fi": 407,
	"./fi.js": 407,
	"./fo": 408,
	"./fo.js": 408,
	"./fr": 409,
	"./fr-ca": 410,
	"./fr-ca.js": 410,
	"./fr-ch": 411,
	"./fr-ch.js": 411,
	"./fr.js": 409,
	"./fy": 412,
	"./fy.js": 412,
	"./ga": 413,
	"./ga.js": 413,
	"./gd": 414,
	"./gd.js": 414,
	"./gl": 415,
	"./gl.js": 415,
	"./gom-latn": 416,
	"./gom-latn.js": 416,
	"./gu": 417,
	"./gu.js": 417,
	"./he": 418,
	"./he.js": 418,
	"./hi": 419,
	"./hi.js": 419,
	"./hr": 420,
	"./hr.js": 420,
	"./hu": 421,
	"./hu.js": 421,
	"./hy-am": 422,
	"./hy-am.js": 422,
	"./id": 423,
	"./id.js": 423,
	"./is": 424,
	"./is.js": 424,
	"./it": 425,
	"./it-ch": 426,
	"./it-ch.js": 426,
	"./it.js": 425,
	"./ja": 427,
	"./ja.js": 427,
	"./jv": 428,
	"./jv.js": 428,
	"./ka": 429,
	"./ka.js": 429,
	"./kk": 430,
	"./kk.js": 430,
	"./km": 431,
	"./km.js": 431,
	"./kn": 432,
	"./kn.js": 432,
	"./ko": 433,
	"./ko.js": 433,
	"./ku": 434,
	"./ku.js": 434,
	"./ky": 435,
	"./ky.js": 435,
	"./lb": 436,
	"./lb.js": 436,
	"./lo": 437,
	"./lo.js": 437,
	"./lt": 438,
	"./lt.js": 438,
	"./lv": 439,
	"./lv.js": 439,
	"./me": 440,
	"./me.js": 440,
	"./mi": 441,
	"./mi.js": 441,
	"./mk": 442,
	"./mk.js": 442,
	"./ml": 443,
	"./ml.js": 443,
	"./mn": 444,
	"./mn.js": 444,
	"./mr": 445,
	"./mr.js": 445,
	"./ms": 446,
	"./ms-my": 447,
	"./ms-my.js": 447,
	"./ms.js": 446,
	"./mt": 448,
	"./mt.js": 448,
	"./my": 449,
	"./my.js": 449,
	"./nb": 450,
	"./nb.js": 450,
	"./ne": 451,
	"./ne.js": 451,
	"./nl": 452,
	"./nl-be": 453,
	"./nl-be.js": 453,
	"./nl.js": 452,
	"./nn": 454,
	"./nn.js": 454,
	"./pa-in": 455,
	"./pa-in.js": 455,
	"./pl": 456,
	"./pl.js": 456,
	"./pt": 457,
	"./pt-br": 458,
	"./pt-br.js": 458,
	"./pt.js": 457,
	"./ro": 459,
	"./ro.js": 459,
	"./ru": 460,
	"./ru.js": 460,
	"./sd": 461,
	"./sd.js": 461,
	"./se": 462,
	"./se.js": 462,
	"./si": 463,
	"./si.js": 463,
	"./sk": 464,
	"./sk.js": 464,
	"./sl": 465,
	"./sl.js": 465,
	"./sq": 466,
	"./sq.js": 466,
	"./sr": 467,
	"./sr-cyrl": 468,
	"./sr-cyrl.js": 468,
	"./sr.js": 467,
	"./ss": 469,
	"./ss.js": 469,
	"./sv": 470,
	"./sv.js": 470,
	"./sw": 471,
	"./sw.js": 471,
	"./ta": 472,
	"./ta.js": 472,
	"./te": 473,
	"./te.js": 473,
	"./tet": 474,
	"./tet.js": 474,
	"./tg": 475,
	"./tg.js": 475,
	"./th": 476,
	"./th.js": 476,
	"./tl-ph": 477,
	"./tl-ph.js": 477,
	"./tlh": 478,
	"./tlh.js": 478,
	"./tr": 479,
	"./tr.js": 479,
	"./tzl": 480,
	"./tzl.js": 480,
	"./tzm": 481,
	"./tzm-latn": 482,
	"./tzm-latn.js": 482,
	"./tzm.js": 481,
	"./ug-cn": 483,
	"./ug-cn.js": 483,
	"./uk": 484,
	"./uk.js": 484,
	"./ur": 485,
	"./ur.js": 485,
	"./uz": 486,
	"./uz-latn": 487,
	"./uz-latn.js": 487,
	"./uz.js": 486,
	"./vi": 488,
	"./vi.js": 488,
	"./x-pseudo": 489,
	"./x-pseudo.js": 489,
	"./yo": 490,
	"./yo.js": 490,
	"./zh-cn": 491,
	"./zh-cn.js": 491,
	"./zh-hk": 492,
	"./zh-hk.js": 492,
	"./zh-tw": 493,
	"./zh-tw.js": 493
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 890;

/***/ }),

/***/ 916:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoalStatsDataModel; });
var GoalStatsDataModel = /** @class */ (function () {
    function GoalStatsDataModel() {
        this.countOfGoals = 0;
    }
    return GoalStatsDataModel;
}());

//# sourceMappingURL=GoalStatsDataModel.js.map

/***/ }),

/***/ 917:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReminderPreferencesDataModel; });
var ReminderPreferencesDataModel = /** @class */ (function () {
    function ReminderPreferencesDataModel() {
        this.enableReminders = "";
        this.frequency = "";
        this.time = "";
    }
    return ReminderPreferencesDataModel;
}());

//# sourceMappingURL=ReminderPreferencesDataModel.js.map

/***/ }),

/***/ 935:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_workouts_workouts__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_workout_plan_workout_plan__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_exercise_list_exercise_list__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_workout_history_workout_history__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_goals_goals__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_goal_graphed_goal_graphed__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_core_auth_service__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//page imports










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, auth //,
        //public navCtrl: NavController
    ) {
        this.auth = auth; //,
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            setTimeout(function () {
                statusBar.backgroundColorByHexString("#6279AE");
            }, 40000);
        });
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */] },
            { title: 'Profile', component: __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__["a" /* ProfilePage */] },
            { title: 'Workout Plan', component: __WEBPACK_IMPORTED_MODULE_8__pages_workout_plan_workout_plan__["a" /* WorkoutPlanPage */] },
            { title: 'All Workouts', component: __WEBPACK_IMPORTED_MODULE_7__pages_workouts_workouts__["a" /* WorkoutsPage */] },
            { title: 'Workout History', component: __WEBPACK_IMPORTED_MODULE_10__pages_workout_history_workout_history__["a" /* WorkoutHistoryPage */] },
            { title: 'Exercise List', component: __WEBPACK_IMPORTED_MODULE_9__pages_exercise_list_exercise_list__["a" /* ExerciseListPage */] },
            { title: 'Goals', component: __WEBPACK_IMPORTED_MODULE_11__pages_goals_goals__["a" /* GoalsPage */] },
            { title: 'Progress', component: __WEBPACK_IMPORTED_MODULE_12__pages_goal_graphed_goal_graphed__["a" /* GoalGraphedPage */] }
        ];
    }
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        this.auth.doLogout().then(function (res) {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n\n       <ion-item menuClose (click)="logout()">Logout</ion-item>\n    </ion-list>\n\n    <img id=\'logoMenu\' alt="logo" src="/assets/imgs/Logo.png" > \n\n  </ion-content>\n  \n\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/tanyam/Documents/GitHub/final-yr-proj/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_13__pages_core_auth_service__["a" /* AuthService */] //,
            //public navCtrl: NavController
        ])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[546]);
//# sourceMappingURL=main.js.map