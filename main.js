var task_id,  task_name,  duration,  start_date,  finish_date;
task_id=1;

let tasks =[];
let resources=[];


//var d = new Date();

//var today=d.getDate()  + '-'+(d.getMonth()+1)+'-' +d.getFullYear();
//var today= new Date();

document.querySelector('#t1').style.display='none';
document.querySelector('#addb').style.display='none';
document.querySelector('#t2').style.display='none';
document.querySelector('#tr').style.display='none';
document.querySelector('#button21').style.display='none';
document.querySelector('#addrt').style.display='none';
document.querySelector('#table4').style.display='none';
document.querySelector('#table5').style.display='none';
document.querySelector('#table6').style.display='none';









var d=document.getElementById("t1");

var d5=document.getElementById("t2");

document.querySelector('#button1').addEventListener('click',function () {
    if(d.style.display == 'none'){
    document.querySelector('#t1').style.display='unset';
    document.querySelector('#addb').style.display='unset';
   document.getElementById("tid").value=task_id;}
    else {
        document.querySelector('#t1').style.display='none';
        document.querySelector('#addb').style.display='none';
    }
  //document.getElementById("sd").value=today;

   // duration=document.getElementById("du").value;
    document.getElementById("sd").addEventListener('change',function () {
        duration=document.getElementById("du").value;

        var chooseDate=new Date(this.value);
        chooseDate.setDate(chooseDate.getUTCDate()+1);
        var futureDate = chooseDate.getFullYear()+'-'+('0'+(chooseDate.getMonth()+1)).slice(-2)+'-'+('0'+(chooseDate.getDate())).slice(-2);
        document.getElementById("fd").value=futureDate;

    })
    
})



function add_task_hide_table(){

    // increase the id
    document.getElementById("tid").value=task_id++;

    // save the valus in the array
    let task ={
        taskid: document.getElementById("tid").value,
        taskname:document.getElementById("tn").value,
        tduration:document.getElementById("du").value,
        startdate :document.getElementById("sd").value,
        finshdate: document.getElementById("fd").value,

    }
    tasks.push(task);
    addrows("t2");
    addrows2("table4");
    // document.getElementById("tid").value=++task_id;
    // task_name=document.getElementById("tn").value;
    // duration=document.getElementById("du").value;
    // start_date=document.getElementById("sd").value;
    // finish_date=document.getElementById("fd").value;
    document.querySelector('#t1').style.display='none';
    document.querySelector('#addb').style.display='none';
}

document.querySelector('#addb').addEventListener('click',add_task_hide_table);







/////////////add resource
var d4=document.getElementById("tr");
document.querySelector('#button2').addEventListener('click',function () {
    if (d4.style.display=='none'){
    document.querySelector('#tr').style.display='unset';
    document.querySelector('#button21').style.display='unset';}
    else {
        document.querySelector('#tr').style.display='none';
      document.querySelector('#button21').style.display='none';
    }
    })
document.querySelector('#button21').addEventListener('click',function () {
    let resource ={
        resourcename: document.getElementById("rname").value,
        type:document.getElementById("type").value,
        material:document.getElementById("mat").value,
        max :document.getElementById("max").value,
        rate: document.getElementById("st").value,
        ovt: document.getElementById("ovt").value,
        cost: document.getElementById("cost").value,

    }
    resources.push(resource);

    addrows3("table5")



    document.querySelector('#tr').style.display='none';
    document.querySelector('#button21').style.display='none';

})









////////// add recource to the task
document.querySelector('#m4').addEventListener('click',function () {
    if (d5.style.display=='none'){
        document.querySelector('#t2').style.display='unset';
        document.querySelector('#addrt').style.display='unset';}
    else {
        document.querySelector('#t2').style.display='none';
        document.querySelector('#addrt').style.display='none';
    }



    



   // document.querySelector('#t2').style.display='unset';
   //  document.getElementById("fd2").textContent=tasks[0].finshdate;
   //  document.querySelector('#tid2').textContent=tasks[0].taskid;
   //  document.querySelector('#tn2').textContent=tasks[0].taskname;
   //  document.querySelector('#du2').textContent=tasks[0].tduration;
   //  document.querySelector('#sd2').textContent=tasks[0].startdate;


})























//display all th tasks
var d6=document.getElementById("table4");

document.querySelector('#button4').addEventListener('click',function () {
    if (d6.style.display=='none'){
        document.querySelector('#table4').style.display='unset';
       }
    else {
        document.querySelector('#table4').style.display='none';
    }
})



//display all resources
var d7=document.getElementById("table5");

document.querySelector('#button5').addEventListener('click',function () {
    if (d7.style.display=='none'){
        document.querySelector('#table5').style.display='unset';
    }
    else {
        document.querySelector('#table5').style.display='none';
    }
})







//display all tasks and resources
var d8=document.getElementById("table6");

document.querySelector('#button6').addEventListener('click',function () {
    if (d8.style.display=='none'){
        document.querySelector('#table6').style.display='unset';
    }
    else {
        document.querySelector('#table6').style.display='none';
    }
})







function addrows( d) {
    
    // var x= document.getElementById("res1");
    // var option =document.createElement("option");
    // option.text=document.getElementById("rname").value;
    // x.add(option);


    var table = document.getElementById(d);
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    row.insertCell(0).innerHTML=document.getElementById("tid").value;
    row.insertCell(1).innerHTML= document.getElementById("tn").value;
    row.insertCell(2).innerHTML= document.getElementById("du").value;
    row.insertCell(3).innerHTML= document.getElementById("sd").value;
    row.insertCell(4).innerHTML= document.getElementById("fd").value;
    row.insertCell(5).innerHTML;

}

// add row to the table 4
function addrows2( d) {
    var table = document.getElementById(d);

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    row.insertCell(0).innerHTML=document.getElementById("tid").value;
    row.insertCell(1).innerHTML= document.getElementById("tn").value;
    row.insertCell(2).innerHTML= document.getElementById("du").value;
    row.insertCell(3).innerHTML= document.getElementById("sd").value;
    row.insertCell(4).innerHTML= document.getElementById("fd").value;


}
function addrows3(d) {
    var table = document.getElementById(d);

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    row.insertCell(0).innerHTML=document.getElementById("rname").value;
    row.insertCell(1).innerHTML= document.getElementById("type").value;
    row.insertCell(2).innerHTML= document.getElementById("mat").value;
    row.insertCell(3).innerHTML= document.getElementById("max").value;
    row.insertCell(4).innerHTML= document.getElementById("st").value;
    row.insertCell(5).innerHTML= document.getElementById("ovt").value;
    row.insertCell(6).innerHTML= document.getElementById("cost").value;



}



// ADD Resource


// document.querySelector('#button2').addEventListener('click',function () {
//     if(d2.style.display == 'none'){
//         document.querySelector('#t2').style.display='unset';
//         document.querySelector('#addr').style.display='unset';
//         }
//     else {
//         document.querySelector('#t2').style.display='none';
//         document.querySelector('#addr').style.display='none';
//     }
