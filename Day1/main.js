let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let width = window.innerWidth;
let height = window.innerHeight;
ctx.translate(0, height / 2); // Center the canvas
// ctx.scale(1, -1); // Flip the y-axis
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

    // let midY = canvas.height / 2;

    // for (let angle = 0; angle < Math.PI * 2; angle += 0.01) {
    //     let x = angle * 250;
    //     let y = Math.sin(angle) * 200; // just like in 2d lotting x axis is increasing linearly then y value is plotted based on the sine function
    //     ctx.fillRect(x, midY - y, 5, 5); // subtract y to flip vertically
    // }
    let w = width / 2;
    let h = height / 2;
    let amplitude = height * 0.2;  // better name and scale
    let speed = 0.01;
    let angle = 0;
    
    function render() {
        let y = amplitude * Math.sin(angle) + h; // center wave vertically
        ctx.clearRect(0, 0, width, height);
        ctx.beginPath();
        ctx.arc(w, y, 20, 0, Math.PI * 2);
        ctx.fill();
        angle += speed;
        requestAnimationFrame(render);
    }
    render();
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas(); 