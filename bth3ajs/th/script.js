function printNumbers() {
    const numberInput = document.getElementById('numberInput').value;
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; 
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
