console.log('This is sale');
//Function to validate the quantity of tickets
const validateQuant = (q) => {
    const maxQuantity = 15; // Maximum allowed quantity

    if (q < 1 || q > maxQuantity) {
        document.getElementById("error").innerHTML = `<p>Invalid Quantity. Please enter a quantity between 1 and ${maxQuantity}.</p>`;
        return false;
    } else {
        document.getElementById("error").innerHTML = ``;
        return true;
    }
};

//Retrieve if hide box is checked or not
const hideBox = document.getElementById("hide");
const cardUI = document.getElementById("card");
//associate change of checkbox to change of input type
hideBox.addEventListener("change", function () {
    //Let user to choose display as "password" and "text"
    cardUI.type = hideBox.checked ? "text" : "password"; 
    //expression meant if hideBox checked, set input type to "text", otherwise set to "password"
});

//validate card info
//reject null, not a numerical, and less or greater than six character string
const validateCard = (card) => {
    if (card === "" || isNaN(card) || card.length !== 6) {
        document.getElementById("error").innerHTML = `<p>Invalid Card Input. Please enter a 6-digit numeric value.</p>`;
        document.getElementById("output").innerHTML = "";
        return false;
    } else {
        document.getElementById("error").innerHTML = ``;
        return true;
    }
};

//Function to calculate price and display output
const cal = (event) => {
    event.preventDefault();//to prevent browser auto reload from clicking button
    const p = document.querySelector('input[name="ticketsType"]:checked').value;
    console.log(p, typeof(p));

    const q = document.getElementById("quant").value;
    console.log(q, typeof(q));
    const card = document.getElementById("card").value;
    console.log(card, typeof(card), card.length);
    //Only when card info is validated then start calculation and display content
    if(!validateCard(card)||!validateQuant(q)){return false;}else{
    const cost = p*q;
    console.log(cost);

    const tax = cost*0.13;
    console.log(tax);

    const final = cost+tax;
    console.log(final);

    const outputData = 
    `<p>Order Confirmation: </p><br><table>
    <tr><td>Number of ticket(s): </td><td>${q}</td></tr>
    <tr><td>Price per ticket: </td><td>$${p}</td></tr>
    <tr><td>Sub-total: </td><td>$${cost}</td></tr>
    <tr><td>Tax (13%): </td><td>$${tax.toFixed(2)}</td></tr>
    <tr><td>Final Price: </td><td>$${final.toFixed(2)}</td></tr>
    </table>`
        document.getElementById("output").innerHTML = outputData;
        document.getElementById("output").classList.add("output");

}};

//action
    document.getElementById("cal").addEventListener("click", cal);