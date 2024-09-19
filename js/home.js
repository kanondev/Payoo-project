// document.getElementById('add-mony-btn').addEventListener('click', function(event){
//     event.preventDefault();

//     console.log('money add button clicked');
// })


document.getElementById('add-mony-btn').addEventListener('click', function(event){
    event.preventDefault();


 const addMoneyInput = document.getElementById('input-add-money').value;
 const pinNumber = document.getElementById('input-pin-number').value;
 console.log(addMoneyInput, pinNumber);

if(pinNumber==='12345'){
    const balance = document.getElementById('account-blance').innerText;
    const addMoneyNumber = parseFloat(addMoneyInput);
    const balaceNumber = parseFloat(balance);
    const newBalaceNumber = addMoneyNumber + balaceNumber;
    document.getElementById('account-blance').innerText = newBalaceNumber;



}
else{
    alert('Failed to add money! Please try again')
}


})