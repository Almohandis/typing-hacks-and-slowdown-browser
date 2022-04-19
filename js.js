let div = document.getElementById('abdo');
div.innerHTML = '[';
for (let i = 0; i <= 1; i += 0.1) {
    div.innerHTML += `[${i.toFixed(2)},0], `;
}
for (let i = 0; i <= 1; i += 0.1) {
    div.innerHTML += `[${i.toFixed(2)},1], `;
}
for (let i = 0; i <= 1; i += 0.1) {
    div.innerHTML += `[0,${i.toFixed(2)}], `;
}
for (let i = 0; i <= 1; i += 0.1) {
    div.innerHTML += `[1,${i.toFixed(2)}], `;
}
div.innerHTML += ']';
