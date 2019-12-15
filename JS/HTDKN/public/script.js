window.onload = function() {

    updateValue();

    function updateValue() {
        $.ajax({
            url: '/update',
            method: 'GET',
            dataType: "json",
            success: function(data) {

                var scale = document.getElementById('temp').innerHTML;
                //console.log(typeof scale); 
                var gram = 0;

                if (scale === '20'){
                    gram = (data.value/42)*0.02;
                    gram = Math.round(gram * 100) / 100;
                } else {
                    gram = (data.value/17)*0.02;
                    gram = Math.round(gram * 100) / 100;
                }
                
                if (gram > 1000) {
                    gram = 0;
                }

                document.getElementById('display-value').innerHTML = gram.toString();
            }
        })

        setTimeout(function(){updateValue()}, 20);
    }
}

function calib() {
    $.ajax({
        url: '/calib',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log(data);
        }
    })
}

function changeScale() {
    var scale = document.getElementById('temp').innerHTML;
    if (scale === '20'){
        document.getElementById('temp').innerHTML = '40';
    } else {
        document.getElementById('temp').innerHTML = '20';
    }
}