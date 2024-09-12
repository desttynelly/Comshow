
document.querySelector(".Efl1").addEventListener("git", function(){
    document.querySelector(".dav").classList.add("active")
    document.querySelector(".overlay").classList.add("active")
    document.querySelector("body").classList.add("active")
    document.querySelector(".nav").classList.add("active")
})

document.querySelector(".clo").addEventListener("click", function(){
    document.querySelector(".dav").classList.remove("active")
    document.querySelector(".overlay").classList.remove("active")
    document.querySelector("body").classList.remove("active")
    document.querySelector(".nav").classList.remove("active")
})

document.querySelector(".reg1").addEventListener("click", function(){
    document.querySelector(".buy1").classList.remove("active")
    document.querySelector(".buy2").classList.remove("active")
    document.querySelector(".buy3").classList.remove("active")
})

document.querySelector(".reg2").addEventListener("click", function(){
    document.querySelector(".buy1").classList.add("active")
    document.querySelector(".buy2").classList.add("active")
    document.querySelector(".buy3").classList.remove("active")
})

document.querySelector(".reg3").addEventListener("click", function(){
    document.querySelector(".buy1").classList.add("active")
    document.querySelector(".buy2").classList.remove("active")
    document.querySelector(".buy3").classList.add("active")
})



const eventDate = new Date("August 20 2024 16:00:59").getTime();

const countdownFunction = setInterval(function() {
    // Get current date and time
    const now = new Date().getTime();

    // Find the distance between now and the event date
    const distance = eventDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in the respective elements
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // If the countdown is finished, write some text
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("timer").innerText = "The event has started!";
    }
}, 1000);



// let addd = parseInt(document.querySelector(".oo").innerHTML) || 0;

// document.querySelector("#add").addEventListener("click", function(){
//     addd++;
//     document.querySelector(".oo").innerHTML = addd;
//     console.log(addd);
// });

 document.querySelector("#inp").value = 1;

document.querySelector("#add").addEventListener("click", function(){

   
   
    let addd = document.querySelector("#inp").value || 1;

    addd++;
    document.querySelector("#inp").value = addd;
    // console.log(addd);

    let valueText = document.querySelector("#val1").innerText.trim(); // Get and trim the text
    valueText = valueText.replace('$', ''); // Remove the $ symbol

    let value = parseInt(valueText) || 0; // Convert to number, or default to 0 if not a number

    value *= 2;  // Multiply the value by 2
    document.querySelector("#val1").innerText = `$${value}`; // Update the value in the p tag
    console.log(value);

//     let valueText = document.querySelector("#val1").innerText.trim();
// valueText = valueText.replace('$', ''); // Remove the $ symbol

// let value = parseInt(valueText) || 0;

// value *= 2;  // Multiply the value by 2
// document.querySelector("#val1").innerText = `$${value}`; // Update the value in the p tag with $
// console.log(value);
});


document.querySelector("#minus").addEventListener("click", function(){
   
    let minuss = parseInt(document.querySelector("#inp").value) || 1;

    if (minuss > 1) {
        minuss--;
    }
    
    document.querySelector("#inp").value = minuss;
    // console.log(minuss);

    let valueText = document.querySelector("#val1").innerText.trim(); // Get and trim the text
    valueText = valueText.replace('$', ''); // Remove the $ symbol

    let value = parseInt(valueText) || 0; // Convert to number, or default to 0 if not a number

    if (value > 200) {
        value /= 2;  // Multiply the value by 2
    }
  
    document.querySelector("#val1").innerText = `$${value}`; // Update the value in the p tag
    console.log(value);
});

// hhHHHHHHHHHHHHHHHHHHH


document.querySelector("#inp2").value = 1;

document.querySelector("#add2").addEventListener("click", function(){
   
    let addd = document.querySelector("#inp2").value || 1;

    addd++;
    document.querySelector("#inp2").value = addd;
    console.log(addd);


    let valueText = document.querySelector("#val2").innerText.trim(); // Get and trim the text
    valueText = valueText.replace('$', ''); // Remove the $ symbol

    let value = parseInt(valueText) || 0; // Convert to number, or default to 0 if not a number

        value *= 2;  // Multiply the value by 2
    
  
    document.querySelector("#val2").innerText = `$${value}`; // Update the value in the p tag
    console.log(value);
});


document.querySelector("#minus2").addEventListener("click", function(){
   
    let minuss = parseInt(document.querySelector("#inp2").value) || 1;

    if (minuss > 1) {
        minuss--;
    }
    
    document.querySelector("#inp2").value = minuss;
    // console.log(minuss);

    let valueText = document.querySelector("#val2").innerText.trim(); // Get and trim the text
    valueText = valueText.replace('$', ''); // Remove the $ symbol

    let value = parseInt(valueText) || 0; // Convert to number, or default to 0 if not a number

    if (value > 400) {
        value /= 2;  // Multiply the value by 2
    }
  
    document.querySelector("#val2").innerText = `$${value}`; // Update the value in the p tag
    console.log(value);
});



// hhHHHHHHHHHHHHHHHHHHH
// hhHHHHHHHHHHHHHHHHHHH
// hhHHHHHHHHHHHHHHHHHHH


document.querySelector("#inp3").value = 1;

document.querySelector("#add3").addEventListener("click", function(){
   
    let addd = document.querySelector("#inp3").value || 1;

    addd++;
    document.querySelector("#inp3").value = addd;
    console.log(addd);

    let valueText = document.querySelector("#val3").innerText.trim(); // Get and trim the text
    valueText = valueText.replace('$', ''); // Remove the $ symbol

    let value = parseInt(valueText) || 0; // Convert to number, or default to 0 if not a number

        value *= 2;  // Multiply the value by 2
    
  
    document.querySelector("#val3").innerText = `$${value}`; // Update the value in the p tag
    console.log(value);
});


document.querySelector("#minus3").addEventListener("click", function(){
   
    let minuss = parseInt(document.querySelector("#inp3").value) || 1;

    if (minuss > 1) {
        minuss--;
    }
    
    document.querySelector("#inp3").value = minuss;
    // console.log(minuss);

    let valueText = document.querySelector("#val3").innerText.trim(); // Get and trim the text
    valueText = valueText.replace('$', ''); // Remove the $ symbol

    let value = parseInt(valueText) || 0; // Convert to number, or default to 0 if not a number

    if (value > 800) {
        value /= 2;  // Multiply the value by 2
    }
  
    document.querySelector("#val3").innerText = `$${value}`; // Update the value in the p tag
    console.log(value);
});

// document.querySelector("#minus").addEventListener("click", function(){
   
//     let minuss = document.querySelector("#inp").value || 0;

//     minuss--;
//     document.querySelector("#inp").value = minuss;
//     // console.log(addd);
// });

// let addd = document.querySelector(".oo"). innerHTML = "1";

// document.querySelector("#add").addEventListener("click", function(){
//     // add()
//     // window.alert("RRR")
//     addd+
//     console.log(addd)
// })


// let counter = ;
















document.querySelector(".Efl2").addEventListener("click", function(){
    document.querySelector(".burna").classList.add("active")
    document.querySelector(".overlay").classList.add("active")
    document.querySelector("body").classList.add("active")
    document.querySelector(".nav").classList.add("active")
})

document.querySelector(".clo2").addEventListener("click", function(){
    document.querySelector(".burna").classList.remove("active")
    document.querySelector(".overlay").classList.remove("active")
    document.querySelector("body").classList.remove("active")
    document.querySelector(".nav").classList.remove("active")
})

document.querySelector(".reg1-2").addEventListener("click", function(){
    document.querySelector(".buy1-2").classList.remove("active")
    document.querySelector(".buy2-2").classList.remove("active")
    document.querySelector(".buy3-2").classList.remove("active")
})

document.querySelector(".reg2-2").addEventListener("click", function(){
    document.querySelector(".buy1-2").classList.add("active")
    document.querySelector(".buy2-2").classList.add("active")
    document.querySelector(".buy3-2").classList.remove("active")
})

document.querySelector(".reg3-2").addEventListener("click", function(){
    document.querySelector(".buy1-2").classList.add("active")
    document.querySelector(".buy2-2").classList.remove("active")
    document.querySelector(".buy3-2").classList.add("active")
})




document.querySelector("#inp2-1").value = 1;

document.querySelector("#add2-1").addEventListener("click", function(){

   
   
    let addd = document.querySelector("#inp2-1").value || 1;

    addd++;
    document.querySelector("#inp2-1").value = addd;
    // console.log(addd);

    let valueText = document.querySelector("#val2-1").innerText.trim(); // Get and trim the text
    valueText = valueText.replace('$', ''); // Remove the $ symbol

    let value = parseInt(valueText) || 0; // Convert to number, or default to 0 if not a number

    value *= 2;  // Multiply the value by 2
    document.querySelector("#val2-1").innerText = `$${value}`; // Update the value in the p tag
    console.log(value);

//     let valueText = document.querySelector("#val1").innerText.trim();
// valueText = valueText.replace('$', ''); // Remove the $ symbol

// let value = parseInt(valueText) || 0;

// value *= 2;  // Multiply the value by 2
// document.querySelector("#val1").innerText = `$${value}`; // Update the value in the p tag with $
// console.log(value);
});


document.querySelector("#minus2-1").addEventListener("click", function(){
   
    let minuss = parseInt(document.querySelector("#inp2-1").value) || 1;

    if (minuss > 1) {
        minuss--;
    }
    
    document.querySelector("#inp2-1").value = minuss;
    // console.log(minuss);

    let valueText = document.querySelector("#val2-1").innerText.trim(); // Get and trim the text
    valueText = valueText.replace('$', ''); // Remove the $ symbol

    let value = parseInt(valueText) || 0; // Convert to number, or default to 0 if not a number

    if (value > 200) {
        value /= 2;  // Multiply the value by 2
    }
  
    document.querySelector("#val2-1").innerText = `$${value}`; // Update the value in the p tag
    console.log(value);
});

// hhHHHHHHHHHHHHHHHHHHH
// hhHHHHHHHHHHHHHHHHHHH
// hhHHHHHHHHHHHHHHHHHHH

document.querySelector("#inp2-2").value = 1;

document.querySelector("#add2-2").addEventListener("click", function(){
   
    let addd = document.querySelector("#inp2-2").value || 1;

    addd++;
    document.querySelector("#inp2-2").value = addd;
    console.log(addd);


    let valueText = document.querySelector("#val2-2").innerText.trim(); // Get and trim the text
    valueText = valueText.replace('$', ''); // Remove the $ symbol

    let value = parseInt(valueText) || 0; // Convert to number, or default to 0 if not a number

        value *= 2;  // Multiply the value by 2
    
  
    document.querySelector("#val2-2").innerText = `$${value}`; // Update the value in the p tag
    console.log(value);
});


document.querySelector("#minus2-2").addEventListener("click", function(){
   
    let minuss = parseInt(document.querySelector("#inp2-2").value) || 1;

    if (minuss > 1) {
        minuss--;
    }
    
    document.querySelector("#inp2-2").value = minuss;
    // console.log(minuss);

    let valueText = document.querySelector("#val2-2").innerText.trim(); // Get and trim the text
    valueText = valueText.replace('$', ''); // Remove the $ symbol

    let value = parseInt(valueText) || 0; // Convert to number, or default to 0 if not a number

    if (value > 400) {
        value /= 2;  // Multiply the value by 2
    }
  
    document.querySelector("#val2-2").innerText = `$${value}`; // Update the value in the p tag
    console.log(value);
});



// hhHHHHHHHHHHHHHHHHHHH
// hhHHHHHHHHHHHHHHHHHHH
// hhHHHHHHHHHHHHHHHHHHH



document.querySelector("#inp2-3").value = 1;

document.querySelector("#add2-3").addEventListener("click", function(){
   
    let addd = document.querySelector("#inp2-3").value || 1;

    addd++;
    document.querySelector("#inp2-3").value = addd;
    console.log(addd);

    let valueText = document.querySelector("#val2-3").innerText.trim(); // Get and trim the text
    valueText = valueText.replace('$', ''); // Remove the $ symbol

    let value = parseInt(valueText) || 0; // Convert to number, or default to 0 if not a number

        value *= 2;  // Multiply the value by 2
    
  
    document.querySelector("#val2-3").innerText = `$${value}`; // Update the value in the p tag
    console.log(value);
});


document.querySelector("#minus2-3").addEventListener("click", function(){
   
    let minuss = parseInt(document.querySelector("#inp2-3").value) || 1;

    if (minuss > 1) {
        minuss--;
    }
    
    document.querySelector("#inp2-3").value = minuss;
    // console.log(minuss);

    let valueText = document.querySelector("#val2-3").innerText.trim(); // Get and trim the text
    valueText = valueText.replace('$', ''); // Remove the $ symbol

    let value = parseInt(valueText) || 0; // Convert to number, or default to 0 if not a number

    if (value > 800) {
        value /= 2;  // Multiply the value by 2
    }
  
    document.querySelector("#val2-3").innerText = `$${value}`; // Update the value in the p tag
    console.log(value);
});