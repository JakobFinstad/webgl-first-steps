var VSHADER_SOURCE = `
attribute vec4 a_Position;
void main() {
gl_Position = a_Position;
gl_PointSize = 10.0;
}
`;

var FSHADER_SOURCE = `
void main() {
gl_FragColor = vec4(0.0, 0.2, 0.9, 1.0);
}`;


const points = []


function main() {

    let canvas = document.getElementById('canvas');
    if (!canvas) {
        console.log('Failed to retrieve canvas element')
        return
    }
    var gl = getWebGLContext(canvas)


    if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        console.log("something went wrong")
    }

    var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    if (a_Position < 0) {
        console.log("Error, failed shit")
        return
    }


    gl.clearColor(0.8, 0.6, 1.0, 1.0); // Set the clear color (values between 0 and 1)
    gl.clear(gl.COLOR_BUFFER_BIT);

    canvas.onmousedown = function (ev) {
        click(ev, canvas, gl, a_Position)
    }
}


function click(ev, canvas, gl, a_Position) {

    var x = ev.clientX;
    var y = ev.clientY;

    var rect = ev.target.getBoundingClientRect()

    x = ((x - rect.left) - canvas.height / 2) / (canvas.height / 2)
    y = ((canvas.width / 2 - (y - rect.top)) / (canvas.width / 2))

    points.push([x, y])


    gl.clearColor(0.8, 0.6, 1.0, 1.0); // Set the clear color (values between 0 and 1)
    gl.clear(gl.COLOR_BUFFER_BIT);

    for (let point of points) {
        gl.vertexAttrib3f(a_Position, point[0], point[1], 0.0)
        gl.drawArrays(gl.POINTS, 0, 1)
    }

    return
}

main()

