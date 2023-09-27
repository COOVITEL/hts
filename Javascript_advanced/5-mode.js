function changeMode(size, weight, transform, background, color) {
    document.documentElement.style.fontSize = size + 'px';
    document.documentElement.style.fontWeight = weight;
    document.documentElement.style.textTransform = transform;
    document.documentElement.style.background = background;
    document.documentElement.style.color = color;
}

function main() {
    const spooky = () => changeMode(9, "bold", "uppercase", "pink", "green")
    const darkMode = () => changeMode(12, "bold", "capiralize", "black", "white")
    const screamMode = () => changeMode(12, "normal", "lowercase", "white", "black")

    const body = document.querySelector('body')
    const text = document.createElement('p')
    text.textContent = 'Welcome Holberton!'

    const Spooky = document.createElement('button')
    Spooky.type = 'button'
    Spooky.textContent = 'Spooky'
    Spooky.onclick = spooky

    const Dark = document.createElement('button')
    Dark.type = 'button'
    Dark.textContent = 'Dark Mode'
    Dark.onclick = darkMode

    const Scream = document.createElement('button')
    Scream.type = 'button'
    Scream.textContent = 'Spooky'
    Scream.onclick = screamMode

    body.appendChild(text)
    body.appendChild(Spooky)
    body.appendChild(Dark)
    body.appendChild(Scream)
}
