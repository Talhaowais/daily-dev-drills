setTimeout(function () {
    console.log("This is a timmer");
}, 5000);

function x(y) {
    console.log("x");
    y();
};

x(function y() {
    console.log(y);
    
});