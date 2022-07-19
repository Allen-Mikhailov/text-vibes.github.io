const rainDropCount = 200
const rainDrops = []

const fallangle = 225

for (var i = 0; i < rainDropCount; i++)
{
    const drop = document.createElement("div")
    drop.classList.add("drop")
    document.body.appendChild(drop)
    drop.style.left = Math.random()*200+"%"
    drop.style.top = "-20px"
    drop.style.animationDelay = Math.random()*5 + "s"
}