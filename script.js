// let celcius = document.getElementById('celcius');
// let fahrenhiet = document.getElementById('fahrenhiet');
// let button = button.getElementById('button');

// celcius.oninput=() =>{
//     let output=(parseFloat(celcius.value)*9)/5+32;
//     fahrenhiet.value= parseFloat(output.toFixed(2));


// };
// fahrenhiet.oninput=()=>{
//     let output=(parseFloat(fahrenhiet.value)-32)*5/9;
//     celcius.value=parseFloa  t(output.toFixed(2));
// };
// button.onclick=()=>{
//     let output=(parseFloat(fahrenhiet.value)-32)*5/9;
//     celcius.value=parseFloat(output.toFixed(2));
// };
const change=()=>{
    // let output=(parseFloat(fahrenhiet.value)-32)*5/9;
    // celcius.value=parseFloat(output.toFixed(2));
    // if(InputEvent){
        
    // }
    const fv=document.getElementById('celcius').value;
    let newfahrenhiet=(fv*9/5)+32;
    document.getElementById('fahrenhiet').value=newfahrenhiet;


    // const cv=document.getElementById('fahrenhiet').value;
    // let newcelcius=(fv-32)*5/9;
    // document.getElementById('celcius').value=newcelcius;

    
}



