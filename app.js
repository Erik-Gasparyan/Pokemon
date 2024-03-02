let container = document.querySelector('section')

fetch('data.json')
.then(res => res.json())
.then(temp => 
    temp.forEach(el => {
        if(el.url) {
            let block = document.createElement('div')
            block.innerHTML = `
               <img src=${el.url} alt="">
               <p> name: ${el.name}</p>
               <p> id: ${el.id}</p>
               <p> height: ${el.height}</p>
               <p> weight: ${el.weight}</p>
               <p> best-attack: ${el['best-attack']}</p>
            `
            container.append(block)
        }
    }))