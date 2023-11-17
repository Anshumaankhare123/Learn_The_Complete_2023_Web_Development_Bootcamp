function even_odd(n=3){
    if(n%2==0){
        console.log("the number is even:-"+n);
    }
    else{
        console.log("the number is odd :- "+n)
    }
}

function grater_num(a=10,b=21,c=3333){
    if(a>b){
        console.log("a is grater then b ="+a);
    }
    else if(b>c){
        console.log("b is grater then c ="+b);

    }
    else {
        console.log("c is grater then a,b ="+c);
    }
}

grater_num();

even_odd();