
function players() {
    const container = document.getElementById('container');
    Players.map((p) => {

        const newDiv = document.createElement('div');
        newDiv.classList.add(`bg-gray-700`)
        newDiv.classList.add(`shadow-lg`)
        newDiv.classList.add(`rounded-md`)
        newDiv.classList.add(`p-3`)
        newDiv.classList.add(`flex`)
        newDiv.classList.add(`flex-col`)
        newDiv.innerHTML = `

        <div>
        <img class="md:h-48" src="${p.img}" alt="playerImage">
        <h2 class="text-2xl name mb-3">Name :${p.name}</h2>
        
            <div>
                <p>Category :${p.category}</p>
            </div>
            <div>
            <p>Bolwing :${p.Bowler}</p>
            
            </div>
      
        <p>Wickets :${p.Wicket}</p>
        <p class="text-xl font-medium">Price :<span class="text-pink-600">${p.price}</span></p>

        </div>
         
        <button  onclick="playerInfo(${p.id})" class="mt-auto bg-gradient-to-r from-pink-500 bg-indigo-500 shadow-2xl btn px-12 py-2 w-full rounded-lg text-lg  font-medium">Select</button>
                            
        `;
        container.appendChild(newDiv);

    })
};
let count = 1;
let totalPrice = 0;
function playerInfo(id) {
    const playerList = document.getElementById('playerList');


    Players.map((item) => {

        const addMax = playerList.childNodes.length;

        if (addMax <= 5) {
            if (id === item.id) {
                
                const newDiv = document.createElement('div');
                newDiv.innerHTML = ` <h3 class="text-2xl pl-3 font-medium mb-3">${count++} . ${item.name}</h3>`;
                playerList.appendChild(newDiv);

                
                totalPrice = totalPrice + item.price;
                console.log(totalPrice);
                const div = document.getElementById('div');
                const newEle = document.createElement('div');
                div.innerHTML = `
               <h3 class="text-2xl pl-3 font-medium mb-3">Total Price : <span id="price">${totalPrice}</span></h3>
               `

                div.appendChild(newEle)
            }

        }


    });

}

players()
