function changeColors() {
    const boxes = document.getElementsByClassName('box');

    for (let i = 0; i < boxes.length; i++) {
        if (i % 2 === 0) {
            boxes[i].style.backgroundColor = 'red';
        } else {
            boxes[i].style.backgroundColor = 'blue';
        }
    }
}
