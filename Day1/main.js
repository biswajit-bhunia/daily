let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let width = window.innerWidth;
let height = window.innerHeight;


function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw(); 
}

function draw() {
    // for (let i = 0; i < 100; i++) {
    //     let x = Math.random() * width;
    //     let y = Math.random() * height;
    //     let radius = Math.random() * 50 + 10;
    //     let color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    //     ctx.beginPath();
    //     ctx.arc(x, y, radius, 0, Math.PI * 2);
    //     ctx.fillStyle = color;
    //     ctx.fill();

    //     ctx.beginPath();        
    //     ctx.moveTo(x + 50, y + 50);      
    //     ctx.lineTo(x + 300, y + 150); 
    //     ctx.stroke()
    // }

    for (let i = 0; i < 100; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;

        ctx.beginPath();        
        ctx.moveTo(x + 50, y + 50);      
        ctx.lineTo(x + 300, y + 150); 
        ctx.stroke()
    }
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas(); 