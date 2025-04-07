function colorchange() {
    var ph = document.getElementById("phne");
    ph.style.backgroundColor = "white"
    ph.style.color = "black";
    ph.style.transition = "background-color 0.5s ease-in-out";

}
function colorrevoke() {
    var ph = document.getElementById("phne");
    ph.style.backgroundColor = "black"
    ph.style.color = "white";
    ph.style.transition = "background-color 0.5s ease-in-out";
}
function reserv() {
    var res = document.getElementById("rs");
    res.style.backgroundColor = "white";
    res.style.color = "black"
    res.style.transition = "background-color 0.5s ease-in-out";
    res.style.cursor = "pointer";
}
function revreserv() {
    var res = document.getElementById("rs")
    res.style.backgroundColor = "tan";
    res.style.color = "black"
    res.style.transition = "background-color 0.5s ease-in-out";
}
function clickbar(event) {
    var res = event.target;
    res.style.backgroundColor = "white";
    res.style.color = "black"
    res.style.transition = "background-color 0.5s ease-in-out";
    res.style.cursor = "pointer";
}
function revclickbar(event) {
    var res = event.target;
    res.style.backgroundColor = "black";
    res.style.color = "white";
    res.style.transition = "background-color 0.5s ease-in-out";
}
function clibr(event) {
    var res = event.target;
    res.style.backgroundColor = "white";
    res.style.color = "black"
    res.style.transition = "background-color 0.5s ease-in-out";
    res.style.cursor = "pointer";
}
function revclibr(event) {
    var res = event.target;
    res.style.backgroundColor = "black";
    res.style.color = "white";
    res.style.transition = "background-color 0.5s ease-in-out";
}
function found() {
    var hd = document.getElementById("hd");
    hd.style.color = "tan";
    hd.style.transition = "color 0.8s ease-in-out";
}
function foundrev() {
    var hd = document.getElementById("hd");
    hd.style.color = "white";
    hd.style.transition = "color 0.8s ease-in-out";
}
function cn() {
    var but = document.getElementById("iden");
    but.style.backgroundColor = "tan";
    but.style.color = "black";
    but.style.transition = "background-color 0.5s ease-in-out";
}
function cnrev() {
    var but = document.getElementById("iden");
    but.style.backgroundColor = "black";
    but.style.opacity = "0.8"
    but.style.color = "white";
    but.style.transition = "background-color 0.5s ease-in-out";
}
function onmenu(event) {
    var rof = event.target;
    rof.style.backgroundColor = "black";
    rof.style.color = "orange"
    rof.style.transition = "background-color 0.5s ease-in-out";
}
function offmenu(event) {
    var rof = event.target;
    rof.style.backgroundColor = "orange";
    rof.style.color = "white";
    rof.style.transition = "background-color 0.5s ease-in-out";
}

function popup9(event) {
    var pok = event.target.parentElement.className
    if (pok === "on9") {
        var pm = document.querySelector(".popup");
        pm.style.display = "flex";
        var food = "Cannoli";
        var ok=document.getElementById("scl")
        setTimeout(() => {
                ok.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
        var rate = "Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $50";
        var quan = "Quantity: ";
        var pm1 = document.querySelector(".popup-menu");
        pm1.style.display = "block";
        pm1.innerHTML = `<img src="flex9.jpg" width="70%" height="200px" id="pic">
                       <h1>${food}</h1>
                       <h2 id="pr">${rate}</h2>
                       <h3 id="qn">${quan}</h3>
                       <input type="number" class="qn">
                       <button class="but1" id="button1" onclick="con()">Proceed Order</button>
                       <button class="but2" onclick="hide()">cancel</button>`;
    }
    else if (pok === "on8") {
        var pm = document.querySelector(".popup");
        pm.style.display = "flex";
        var food = "Panna cotta";
        var ok=document.getElementById("scl")
        setTimeout(() => {
                ok.scrollIntoView({ behavior: "smooth", block: "start" }); 
        }, 300);
        var rate = "Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $60";
        var quan = "Quantity: ";
        var pm1 = document.querySelector(".popup-menu");
        pm1.style.display = "block";
        pm1.innerHTML = `<img src="flex8.jpg" width="70%" height="200px" id="pic">
                       <h1>${food}</h1>
                       <h2 id="pr">${rate}</h2>
                       <h3 id="qn">${quan}</h3>
                       <input type="number" class="qn">
                       <button class="but1" onclick="con1()">Proceed Order</button>
                       <button class="but2" onclick="hide()">cancel</button>`;
    }
    else if (pok === "on7") {
        var pm = document.querySelector(".popup");
        pm.style.display = "flex";
        var food = "Classic tiramisu";
        var rate = "Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $125";
        var quan = "Quantity: ";
        var ok=document.getElementById("scl")
        setTimeout(() => {
                ok.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
        var pm1 = document.querySelector(".popup-menu");
        pm1.style.display = "block";
        pm1.innerHTML = `<img src="flex7.jpg" width="70%" height="200px" id="pic">
                       <h1>${food}</h1>
                       <h2 id="pr">${rate}</h2>
                       <h3 id="qn">${quan}</h3>
                       <input type="number" class="qn">
                       <button class="but1" onclick="con2()">Proceed My Order</button>
                       <button class="but2" onclick="hide()">cancel</button>`;
    }
    else if (pok === "on6") {
        var pm = document.querySelector(".popup");
        pm.style.display = "flex";
        var food = "cacio e pepe";
        var ok=document.getElementById("scl")
        setTimeout(() => {
                ok.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
        var rate = "Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $100";
        var quan = "Quantity: ";
        var pm1 = document.querySelector(".popup-menu");
        pm1.style.display = "block";
        pm1.innerHTML = `<img src="flex6.jpg" width="70%" height="200px" id="pic">
                       <h1>${food}</h1>
                       <h2 id="pr">${rate}</h2>
                       <h3 id="qn">${quan}</h3>
                       <input type="number" class="qn">
                       <button class="but1" onclick="con3()">Proceed Order</button>
                       <button class="but2" onclick="hide()">cancel</button>`;
    }
    else if (pok === "on5") {
        var pm = document.querySelector(".popup");
        pm.style.display = "flex";
        var food = "Lasagna";
        var ok=document.getElementById("scl")
        setTimeout(() => {
                ok.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
        var rate = "Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $75";
        var quan = "Quantity: ";
        var pm1 = document.querySelector(".popup-menu");
        pm1.style.display = "block";
        pm1.innerHTML = `<img src="flex5.jpg" width="70%" height="200px" id="pic">
                       <h1>${food}</h1>
                       <h2 id="pr">${rate}</h2>
                       <h3 id="qn">${quan}</h3>
                       <input type="number" class="qn">
                       <button class="but1" onclick="con4()">Proceed Order</button>
                       <button class="but2" onclick="hide()">cancel</button>`;
    }
    else if (pok === "on4") {
        var pm = document.querySelector(".popup");
        pm.style.display = "flex";
        var food = "Bruschetta";
        var ok=document.getElementById("scl")
        setTimeout(() => {
                ok.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
        var rate = "Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $60";
        var quan = "Quantity: ";
        var pm1 = document.querySelector(".popup-menu");
        pm1.style.display = "block";
        pm1.innerHTML = `<img src="flex4.jpg" width="70%" height="200px" id="pic">
                       <h1>${food}</h1>
                       <h2 id="pr">${rate}</h2>
                       <h3 id="qn">${quan}</h3>
                       <input type="number" class="qn">
                       <button class="but1" onclick="con5()">Proceed Order</button>
                       <button class="but2" onclick="hide()">cancel</button>`;
    }
    else if (pok === "on3") {
        var pm = document.querySelector(".popup");
        pm.style.display = "flex";
        var food = "Spaghetti";
        var ok=document.getElementById("scl")
        setTimeout(() => {
                ok.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
        var rate = "Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $45";
        var quan = "Quantity: ";
        var pm1 = document.querySelector(".popup-menu");
        pm1.style.display = "block";
        pm1.innerHTML = `<img src="flex3.jpg" width="70%" height="200px" id="pic">
                       <h1>${food}</h1>
                       <h2 id="pr">${rate}</h2>
                       <h3 id="qn">${quan}</h3>
                       <input type="number" class="qn">
                       <button class="but1" onclick="con6()">Proceed Order</button>
                       <button class="but2" onclick="hide()">cancel</button>`;
    }
    else if (pok === "on2") {
        var pm = document.querySelector(".popup");
        pm.style.display = "flex";
        var food = "Manchurian Pasta";
        var ok=document.getElementById("scl")
        setTimeout(() => {
                ok.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
        var rate = "Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $30";
        var quan = "Quantity: ";
        var pm1 = document.querySelector(".popup-menu");
        pm1.style.display = "block";
        pm1.innerHTML = `<img src="flex2.jpg" width="70%" height="200px" id="pic">
                       <h1>${food}</h1>
                       <h2 id="pr">${rate}</h2>
                       <h3 id="qn">${quan}</h3>
                       <input type="number" class="qn">
                       <button class="but1" onclick="con7()">Proceed Order</button>
                       <button class="but2" onclick="hide()">cancel</button>`;
    }
    else if (pok === "on1") {
        var pm = document.querySelector(".popup");
        pm.style.display = "flex";
        var food = "peproni pizza";
        var ok=document.getElementById("scl")
        setTimeout(() => {
                ok.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
        var rate = "Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $15";
        var quan = "Quantity: ";
        var pm1 = document.querySelector(".popup-menu");
        pm1.style.display = "block";
        pm1.innerHTML = `<img src="flex1.jpg" width="70%" height="200px" id="pic">
                       <h1>${food}</h1>
                       <h2 id="pr">${rate}</h2>    
                       <h3 id="qn">${quan}</h3>
                       <input type="number" class="qn">
                       <button class="but1" onclick="con8()">Proceed Order</button>
                       <button class="but2" onclick="hide()">cancel</button>`;
    }
}
function hide() {
    var mp = document.querySelector(".popup");
    var mp1 = document.querySelector(".popup-menu")
    mp.style.display = "none";
    mp1.style.display = "none";
}
var qua, price=0, item, qua1, price1=0, item1, qua2, price2=0, item2, qua3, price3=0, item3, qua4, price4=0, item4, qua5, price5=0, item5, qua6, price6=0, item6, qua7, price7=0, item7, qua8, price8=0, item8;
function con() {
    qua = document.querySelector(".qn").value;
    price = qua * 50;
    item = "cannoli";
    console.log(price);
    var mp = document.querySelector(".popup");
    var mp1 = document.querySelector(".popup-menu")
    mp.style.display = "none";
    mp1.style.display = "none";
    alert(qua + " items added to cart !");

}
function con1() {
    qua1 = document.querySelector(".qn").value;
    price1 = qua1 * 60;
    item1 = "panna cotta";
    console.log(price1);
    var mp = document.querySelector(".popup");
    var mp1 = document.querySelector(".popup-menu")
    mp.style.display = "none";
    mp1.style.display = "none";
    alert(qua1 + " items added to cart !");
}
function con2() {
    qua2 = document.querySelector(".qn").value;
    price2 = qua2 * 125;
    item2 = "Classic tiramisu";
    console.log(price2);
    var mp = document.querySelector(".popup");
    var mp1 = document.querySelector(".popup-menu")
    mp.style.display = "none";
    mp1.style.display = "none";
    alert(qua2 + " items added to cart !");
}
function con3() {
    qua3 = document.querySelector(".qn").value;
    price3 = qua3 * 100;
    item3 = "cacio e pepe"
    console.log(price3);
    var mp = document.querySelector(".popup");
    var mp1 = document.querySelector(".popup-menu")
    mp.style.display = "none";
    mp1.style.display = "none";
    alert(qua3 + " items added to cart !");
}
function con4() {
    qua4 = document.querySelector(".qn").value;
    price4 = qua4 * 75;
    item4 = "Lasagna"
    console.log(price4);
    var mp = document.querySelector(".popup");
    var mp1 = document.querySelector(".popup-menu")
    mp.style.display = "none";
    mp1.style.display = "none";
    alert(qua4 + " items added to cart !");
}
function con5() {
    qua5 = document.querySelector(".qn").value;
    price5 = qua5 * 60;
    item5 = "Bruschetta";
    console.log(price5);
    var mp = document.querySelector(".popup");
    var mp1 = document.querySelector(".popup-menu")
    mp.style.display = "none";
    mp1.style.display = "none";
    alert(qua5 + " items added to cart !");
}
function con6()
{
    qua6 = document.querySelector(".qn").value;
    price6 = qua6 * 45;
    item6 = "Spaghetti"
    console.log(price6);
    var mp = document.querySelector(".popup");
    var mp1 = document.querySelector(".popup-menu")
    mp.style.display = "none";
    mp1.style.display = "none";
    alert(qua6 + " items added to cart !");
}
function con7() {
    qua7 = document.querySelector(".qn").value;
    price7 = qua7 * 30;
    item7 = "Manchurian Pasta";
    console.log(price7);
    var mp = document.querySelector(".popup");
    var mp1 = document.querySelector(".popup-menu")
    mp.style.display = "none";
    mp1.style.display = "none";
    alert(qua7 + " items added to cart !");
}
function con8() {
    qua8 = document.querySelector(".qn").value;
    price8 = qua8 * 15;
    item8 = "Peproni Pizza"
    console.log(price8);
    var mp = document.querySelector(".popup");
    var mp1 = document.querySelector(".popup-menu")
    mp.style.display = "none";
    mp1.style.display = "none";
    alert(qua8 + " items added to cart !");
}
function colch() {
    var psec = document.querySelector(".payment-sec");
    psec.style.backgroundColor = "black";
    psec.style.color = "tan";
    psec.style.transition = "background-color 0.5s ease-in-out";
}
function colrev() {
    var psec = document.querySelector(".payment-sec");
    psec.style.backgroundColor = "tan";
    psec.style.color = "black";
    psec.style.transition = "background-color 0.5s ease-in-out";
}
function payfood() {
    var total = price + price1 + price2 + price3 + price4 + price5 + price6 + price7 + price8;
    localStorage.setItem("tot",total)
    console.log(total);
    const itemsToStore = [];

    // Check each price variable and store corresponding item and quantity
    const conditions = [
        { price: price, item: item, quan: qua },
        { price: price1, item: item1, quan: qua1 },
        { price: price2, item: item2, quan: qua2 },
        { price: price3, item: item3, quan: qua3 },
        { price: price4, item: item4, quan: qua4 },
        { price: price5, item: item5, quan: qua5 },
        { price: price6, item: item6, quan: qua6 },
        { price: price7, item: item7, quan: qua7 },
        { price: price8, item: item8, quan: qua8 }
    ];
    
    conditions.forEach(condition => {
        if (condition.price !== null && condition.item && condition.quan) {
            itemsToStore.push({ item: condition.item, quan: condition.quan });
        }
        
    });
    
    // Store all items in local storage
    localStorage.setItem("items", JSON.stringify(itemsToStore));
    localStorage.setItem("dataOuterDisplay", "true");

    console.log(itemsToStore);

    window.location.href="OrderSummary.html";
    
}
function slidetohome(event)
{
    var op=event.target.innerHTML
    if(op=="Home")
    {
        var ob=document.getElementById("home")
        ob.scrollIntoView({behavior:"smooth"});
    }
    else if(op=="About Us")
    {
        var ob=document.getElementById("abt")
        ob.scrollIntoView({behavior:"smooth"});
    }
    else if(op=="Our Menu" || op=="See All Dishes")
    {
        var ob=document.getElementById("men")
        ob.scrollIntoView({behavior:"smooth"});
    }
}
function reservation()
{
    window.location.href="reservation.html";
}
function reserve(event)
{
    event.preventDefault();

    const data={
        name: document.getElementById("na1").value,
        email: document.getElementById("na2").value,
        mobno: document.getElementById("na3").value,
        tableno: document.getElementById("na4").value,
        members: document.getElementById("na5").value,
    }
    fetch('http://localhost:8080/reservation/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(responseData => {

        var res=responseData.message;
        console.log(res)
        if(res==="table exist !")
        {
            alert("Table Booked Already !")
        }
        else if(res==="No Relavent Data")
        {
            alert("Enter Relavent Member Info !");
        }
        else 
        {
            alert("Table Booked !")
        }
        var res="";
      })
      .catch(error => {
        console.error('Error saving data:', error);
      });
}