function a(){
    let a = [];
    for (let b =0;b<4;b++) {
            a.push(b);
    }
    console.log(a);
    let e=a.length;
    for (let x=0;x<e;x++){

        let c = parseInt(Math.random()*(a.length));

        console.log(a[c]);

        a.splice(c,1);
        console.log(a);
    }



}
