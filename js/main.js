var boxTracker=1;
var openBox= (varr,boxTrackerData)=>{
    if(boxTracker!==boxTrackerData){
        
        document.getElementById("hiddenBox"+boxTrackerData).classList.remove("hidden");
        document.getElementById("hiddenBox"+boxTracker).classList.add("hidden");
        console.log(boxTrackerData);

        document.getElementById("sign"+boxTracker).classList.remove("fa-minus");
        document.getElementById("sign"+boxTracker).classList.add("fa-plus");
        document.getElementById("sign"+boxTrackerData).classList.remove("fa-plus");
        document.getElementById("sign"+boxTrackerData).classList.add("fa-minus");
        boxTracker=boxTrackerData;
    }
    
}