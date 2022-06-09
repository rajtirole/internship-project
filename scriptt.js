const changes=()=>{
    // let output=(parseFloat(fahrenhiet.value)-32)*5/9;
    // celcius.value=parseFloat(output.toFixed(2));
    // if(InputEvent){
        
    // }
    // const fv=document.getElementById('celcius').value;
    // let newfahrenhiet=(fv*9/5)+32;
    // document.getElementById('fahrenhiet').value=newfahrenhiet;


    const cv=document.getElementById('fahrenhiet').value;
    let newcelcius=(cv-32)*5/9;
    document.getElementById('celcius').value=newcelcius;

    
}