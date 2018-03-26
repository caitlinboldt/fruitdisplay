
function Fruit(name, color, seeds, src) {
    this.name = name;
    this.color = color;
    this.seeds = seeds;
    this.src = src;
    this.multiply = function mul() {
        return 9 * 9
     }
}



var Banana = new Fruit("Banana", "yellow", "no", "https://images-na.ssl-images-amazon.com/images/I/71gI-IUNUkL._SL1500_.jpg")

var Raspberry = new Fruit("Raspberry", "burgundy", "no", "https://www.eliquidukstore.com/wp-content/uploads/2014/03/raspberry-e-liquid.jpg")

var Apple = new Fruit("Apple", "red", "yes", "http://juliandance.org/wp-content/uploads/2016/01/RedApple.jpg")

var moreFruit = [Banana, Raspberry, Apple];

const div = document.createElement("div");
div.className = "container-fluid text-center";
document.body.appendChild(div)

const row = document.createElement("div");
row.className = "row"
div.appendChild(row);


for(var i = 0; i < moreFruit.length; i++) {


    const col = document.createElement("div");
    col.className = "col-md-4";
    row.appendChild(col);

    //Fruit Name
    const h1 = document.createElement("h1");
    h1.textContent = moreFruit[i].name
    col.appendChild(h1);
    
    
    //Fruit Color
    const p = document.createElement("p");
    const textColor = document.createTextNode("Colour: " + moreFruit[i].color);
    col.appendChild(p);
    p.appendChild(textColor);

    //Fruit Seeds
    const p1 = document.createElement("p");
    const textSeeds = document.createTextNode("Contains seeds: " + moreFruit[i].seeds);
    col.appendChild(p1);
    p1.appendChild(textSeeds);

    //Fruit Image
    const img = document.createElement("img");
    img.id = "imgs"
    img.src = moreFruit[i].src
    col.appendChild(img);


     

    
}

