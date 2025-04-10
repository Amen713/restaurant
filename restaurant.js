
function getSelected() {
    const name = document.querySelector('input[name="name"]');
    const checkboxes = document.querySelectorAll('input[name="food"]:checked');
    let selected_types = [];

    checkboxes.forEach((checkbox) => {
        selected_types.push(" "+checkbox.value);
    });
    const checkboxes2 = document.querySelectorAll('input[name="additions"]:checked');
    let selected_additions = [];

    checkboxes2.forEach((checkbox) => {
        selected_additions.push(" "+checkbox.value);
    });
    const receipt = document.querySelector(".receipt");
    receipt.innerHTML="hello "+name.value+ " here is your receipt:";

    const food = document.querySelector(".food_ordered");
    food.innerHTML="you ordered the following food: "+selected_types;

    const additions = document.querySelector(".additions_ordered");
    additions.innerHTML="you ordered the following additions: "+selected_additions;

    const select=document.getElementById("time");
    selected_date=select.value;
    
    const arrival = document.querySelector(".arrival");
    arrival.innerHTML="your order will arrive "+selected_date;

    var price=0;

    selected_types.forEach(function(type){
            if (type==" Halal"){
                price+=30;
            }
            if (type==" Spicy"){
                price+=20;
            }
            if (type==" With Salad"){
                price+=40;
            }          
    });

    selected_additions.forEach(function(add){
        if (add==" whole"){
            price+=30;
        }
        if (add==" half"){
            price+=20;
        }
        if (add==" quarter"){
            price+=40;
        }   
    });
     const final_price = document.getElementById("price");
     final_price.innerHTML="the total price is: "+ price + " pound";


}
