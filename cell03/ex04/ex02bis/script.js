$(document).ready(function () {

    function calculate() {
        const leftOperand = $('#leftOperand').val();
        const rightOperand = $('#rightOperand').val();
        const operator = $('#operator').val();

        if (!isPositiveInteger(leftOperand) || !isPositiveInteger(rightOperand)) {
            alert("Error :(");
            console.error("Error :(");
            return;
        }

        const num1 = parseInt(leftOperand);
        const num2 = parseInt(rightOperand);
        let result;

        try {
            switch (operator) {
                case '+': result = num1 + num2; break;
                case '-': result = num1 - num2; break;
                case '*': result = num1 * num2; break;
                case '/':
                case '%':
                    if (num2 === 0) {
                        alert("It's over 9000!");
                        console.error("It's over 9000!");
                        return;
                    }
                    result = operator === '/' ? num1 / num2 : num1 % num2;
                    break;
                default: throw new Error("Invalid Operator");
            }

            alert(`Result: ${result}`);
            console.log(`Result: ${result}`);
        } catch (e) {
            alert("Error :(");
            console.error("Error :(");
        }
    }

    // ตรวจสอบว่าค่าที่ใส่มาเป็นเลขจำนวนเต็มบวก
    function isPositiveInteger(value) {
        return /^\d+$/.test(value);
    }

    // ผูก event handler ให้กับปุ่มกด
    $('#calculateButton').click(function () {
        calculate();
    });

    // แจ้งเตือนทุก 30 วินาที
    setInterval(() => {
        alert("Please, use me...");
    }, 30000);
});