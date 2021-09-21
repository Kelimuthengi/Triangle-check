
var button = document.getElementById('check');

button.addEventListener('click', function() {


    var value1 = document.getElementById('valueA').value;
    var value2 = document.getElementById('valueB').value;
    var value3 = document.getElementById('valueC').value;
    var result = document.getElementById('result');
    result.style.color = 'white'

    if(value1 === value2 && value2 === value3 && value3 === value1) {
        result.innerHTML = 'This is an Equilateral Triangle'
    }

    else if (value1 !== value2 && value3 && value2 !== value1 && value3) {
        result.innerHTML = 'This is a scalene Triangle'
    }

    else {
        result.innerHTML = 'This is an Isosceles Triangle'
    }
})