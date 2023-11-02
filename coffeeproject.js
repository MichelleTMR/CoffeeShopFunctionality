function showAlert(){
    alert("This site uses cookies, but not the kind you eat. We use cookies to remember log in details, provide secure log in, improve site functionality, and deliver personalized content. By continuing to browse the site, you accept cookies.")
}



function getOrderInfo(){
    const firstName = document.getElementById("name").value;
    const userEmail = document.getElementById("email").value;
    const radio1 = document.getElementsByName("drinktype");
    const radio3 = document.getElementsByName("ingredienttype");
    let drink;
    let drink3;
    let exca;


        for( let i = 0; i < radio1.length; i++){
            if(radio1[i].checked === true){
                drink =radio1[i].value
            }
        }  
        for( let i = 0; i < radio3.length; i++){
            if(radio3[i].checked === true){
                drink3 =radio3[i].value
            }
        }  
    
        const expresso = document.getElementById("expresso")
        const caramel = document.getElementById("caramel")
        const hazelnut = document.getElementById("hazelnut")
        if (hazelnut.checked && caramel.checked && expresso.checked){
            exca= `${hazelnut.value}, ${caramel.value}, ${expresso.value}`
            } else if( expresso.checked && hazelnut.checked){
                exca = `${expresso.value}, ${hazelnut.value}`
            } else if (caramel.checked && hazelnut.checked){
                exca= `${caramel.value}, ${hazelnut.value}`
            } else if(expresso.checked && caramel.checked){
                exca = `${expresso.value}, ${caramel.value}`
            } else if( expresso.checked){
                exca = expresso.value
            } else if (caramel.checked){
                exca = caramel.value
            } else if(hazelnut.checked){
                exca= hazelnut.value
            } else {
                exca= "no shots"
            }

            alert(`Hello ${firstName}! Thank you for your order, your ${drink} with ${exca} and ${drink3} will be ready soon!! We sent you an email confirmation to ${userEmail}.`);
}











