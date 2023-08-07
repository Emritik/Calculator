let data = " ";

//function for clear the value.

function onclearvalue(){
    data = " ";
    console.log("clear");
    document.getElementById('text').value='';
}

// function for append the value.

function onappendvalue(val){
    data += val;
    console.log('append'+ val);
    document.getElementById('text').value = data
}

//To clear the  input which is taken by the user
function oncleardigit(data){
    const data1 = document.getElementById('text').value;
    data = data1.substring(0, data1.length - 1);
    console.log(data);
    
    document.getElementById('text').value = data;

}

//To calculate the result of the expression.
function oncalulate(){
    try{
        data = eval(data).toString();
        console.log(data);
        document.getElementById('text').value = data;
    }
    catch(error){
        document.getElementById('text').value = "error";
    }
}

