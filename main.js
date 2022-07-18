const rainDropCount = 10
const rainDrops = []

const fallangle = 225

for (var i = 0; i < rainDropCount; i++)
{
    const drop = document.createElement("div")
    drop.classList.add("drop")
    document.body.appendChild(drop)
    drop.style.left = Math.random()*100+"%"

    rainDrops.push([drop, Math.random()*100, 0])
}

function update()
{
    for (var i = 0; i < rainDropCount; i++)
    {
        console.log("drop")
        const dropD = rainDrops[i]
        dropD[1] = (dropD[1] + .05)%100
        dropD[0].style.left = ""+100-dropD[1]+"%"
    }
    requestAnimationFrame(update)
}

update()