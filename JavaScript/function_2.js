function lifeInWeeks(age =20) {
    
        let x=365;
        let y=52 ;
        let z=12 ;
        let cur=90-age;
        let day=cur*x;
        let weeks=y*cur;
        let months=z*cur;
        console.log("You have"+" "+day+" days,"+" "+weeks+" weeks, and"+" "+months+" months left .");
        
        
        

    }
    

    
    
    lifeInWeeks();
    