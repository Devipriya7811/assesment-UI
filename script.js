function calcAmt() {
    var a = document.getElementById("amount").value;
    var b = document.getElementById("people").value;
    if (isNaN(a) || isNaN(b) || b <= 0) {
        document.getElementById("rupee-per-person").innerHTML = "Invalid input";
    } else {
        var result = a / b;
        var formattedResult = result % 1 === 0 ? result.toFixed(0) : result.toFixed(2);
        document.getElementById("rupee-per-person").innerHTML = `rupee per person is ₹ ${formattedResult}`;
    
        document.getElementById("amount").value = " ";
        document.getElementById("people").value = " ";
    
        return false;
    }
    }
    function resetFields() {
        document.getElementById("amount").value = "";
        document.getElementById("people").value = "";
        document.getElementById("rupee-per-person").textContent = "Please Enter the Amount";
    }
    