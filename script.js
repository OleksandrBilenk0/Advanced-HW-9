// #1 Зродіть 25 квадратів розміру 50х50 пікселів кожен, зафарбовані у випадковий колір.Квадрати мають розташовуватись по 5 в ряд.

function generateBlocks() {
    const ctx = document.getElementById('canvas').getContext('2d');
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            ctx.fillStyle = 'rgb(' + (Math.random() * 256) + ',0' + (Math.random() * 256 ) + ',' + (Math.random() * 256 ) + ',1)';
            ctx.fillRect(j * 50, i * 50, 50, 50);
        }
    }
}

// #2 Advanced зробіть так, щоб квадрати змінювали колір раз на секунду.

setInterval(()=> generateBlocks(), 1000);



