// const greet = (name) => {
//     console.log("Good Morning " + name);
// }

// setTimeout(greet("khushab"), 5000);

// setTimeout((name) => {
//     console.log("Good Morning " + name);
// }, 5000, "Khushab");
// let i = 1
// function prin() {
//     document.write(i + ", ");
//     i++
// }

// setInterval(prin, 1000);

// greet();

const displayTime = () => {
    let time = new Date;
    let showTime = document.getElementById('time');
    showTime.innerHTML = time;
}

setInterval(displayTime, 1000);