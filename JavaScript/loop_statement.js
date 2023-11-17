function loop_num(){
    let i=1;

    for(i;i<=n;i++){
    
        console.log(i);
    }

    
}

function loop_two(){
    let j=1;

    while(j<=n){
        console.log(j);
        j++;
    }
}

function loop_three(){
    let j=1;

    do{
        console.log(j);
        j++;
    }while(j<=n)
}


loop_three(n=5);
loop_two(n=10);
loop_num(n=10);