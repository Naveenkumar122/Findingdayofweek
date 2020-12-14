//utility funtion to convert date string to day
function dToD(dateArray){
    let weekday = ['Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'][new Date(dateArray[0],parseInt(dateArray[1])-1,dateArray[2]).getDay()];
     return weekday;
}
//utillity function to return the mean for next day and previous day
function solutionUtil(arr,i){
    //if there is both next day and prev day present in the string 
    if(arr[i+1]!=0 && arr[i-1]!=0){
        return (arr[i+1]+arr[i-1])/2;
    }
    //if there is no previous day 
    else if(arr[i+1]!=0 && arr[i+2]!=0){
        return (2*arr[i+1])-arr[i+2];
    }
    //if there is no next day 
    else if(arr[i-1]!=0&&arr[i-2]!=0){
        return (2*arr[i-1])-arr[i-2];
    }
    //default
    else{
        return 0;
    }
}
function solution(d){
    //day dictionary 
    res = {"Mon":0,"Tue":0,"Wed":0,"Thu":0,"Fri":0,"Sat":0,"Sun":0};
    //split function is used split the date string into year,month and day
    //Then it is converted into day and the value of added in res dictionary
    for (var key in d) { 
        res[dToD(key.split('-'))] +=d[key];
    }
    //Array is implemented to handle the missing days
    Arr=[];
    for(var key in res){
        Arr.push(res[key]);
    }
    //if Array element is 0 then mean value of prev and next day is assigned
    for(var i=0;i<Arr.length;i++){
       if(Arr[i]==0){
          Arr[i]=solutionUtil(Arr,i);
       }
    }
    //Then adding the array elements to their corresponding day in res dictionary
    index = 0;
    for(var key in res){
        res[key] =Arr[index++];
    }
    //printing the resultant dictionary
    console.log(res);
}
//input dictionary with all the days in the week
dict={"2020-01-01":4,"2020-01-02":4,"2020-01-03":6,"2020-01-04":8,"2020-01-05":2,"2020-01-06":-6,"2020-01-07":2,"2020-01-08":-2}
//input dictionary with some missing days of the week
dict1={"2020-01-01":6,"2020-01-04":12,"2020-01-05":14,"2020-01-06":2,"2020-01-07":4}

//solution function for testing with input dictionary
solution(dict);
solution(dict1);

/*   output of the soltion function called with the value 
{ Mon: -6, Tue: 2, Wed: 2, Thu: 4, Fri: 6, Sat: 8, Sun: 2 }
{ Mon: 2, Tue: 4, Wed: 6, Thu: 8, Fri: 10, Sat: 12, Sun: 14 }
*/