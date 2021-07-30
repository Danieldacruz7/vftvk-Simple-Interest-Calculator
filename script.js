function showMessage() {
    document.getElementById("result").style.display = "block";
};

function compute()
{
    p = document.getElementById("principal").value;
    if((parseInt(p) < 1) || (!p)){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById("deposit").innerHTML = ""+principal;
    document.getElementById("interest").innerHTML = ""+rate;
    document.getElementById("amount").innerHTML = ""+interest;
    const sum = parseInt(2021) + parseInt(years)
    document.getElementById("year").innerHTML = ""+sum;
    showMessage();

    return false;
    
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function showRange() {
    var rate = document.getElementById("rate").value;
    document.getElementById("value_rate").innerHTML = rate;
}