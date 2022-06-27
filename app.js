
const getdata =()=>{
    console.log("collecting data")
}

const dosomemagic =function(fn ,d){
    let timer;
    return function(){
        let context=this,
        args=arguments;
        clearTimeout(timer);
        timer= setTimeout(() => {
           getdata.apply(context,args) 
        }, d);

    }
}

const betterfunction=dosomemagic(getdata,300);