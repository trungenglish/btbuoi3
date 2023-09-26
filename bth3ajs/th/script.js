function printNumbers() {
    const numberInput = document.getElementById('numberInput').value;
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    // Kiểm tra xem giá trị nhập vào có phải là số và lớn hơn 0
    if (!isNaN(numberInput) && parseInt(numberInput) > 0) {
        for (let i = 1; i <= parseInt(numberInput); i++) {
            const span = document.createElement('span');
            span.innerText = i + ' ';
            outputDiv.appendChild(span);
        }
    } else {
        outputDiv.innerText = 'Vui lòng nhập một số nguyên dương.';
    }
}
