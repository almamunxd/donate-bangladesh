// donate noakhali start

function handelNoakhaliDonation() {
    const donationAmount = getInputFieldValueById('donation-amount-input-noakhali')
    const currentBalance = getTextFieldValueById('account-balance')
    const currentNoakhaliBalance = getTextFieldValueById('noakhali-donated-ammount')



    if (isNaN(donationAmount) ) {
        alert('Invalid donation amount or insufficient balance.');
        return
    }

    if (donationAmount > 0 && donationAmount <= currentBalance) {
        const newbalance = currentBalance - donationAmount;
        setTextFieldValueById('account-balance', newbalance)

        const newNoakhaliDonation = currentNoakhaliBalance + donationAmount;
        setTextFieldValueById('noakhali-donated-ammount', newNoakhaliDonation)

        const noakhaliHeader = document.getElementById('noakhali-header').innerText;
        const donationDate = new Date().toString();

        const historyCard = document.createElement('div');
        historyCard.classList.add('card', 'bg-base-100', 'shadow-xl', 'p-4', 'mb-4');

        const historyContent =
            ` <div class="card-body">
                <p class="text-lg font-bold">${donationAmount} Taka donated for campaign ${noakhaliHeader}</p>
                <p class="text-sm text-gray-500">Date: ${donationDate}</p>
            </div>`;

        historyCard.innerHTML = historyContent;
        document.getElementById('history-list').appendChild(historyCard);
        document.getElementById('donation-amount-input-noakhali').value = '';
        alert('Donation complete!');

    } else {
        alert("Invalid donation amount or insufficient balance.")
    }

}



// donate noakhali end




// feni donation start

function handelFeniDonation() {

    const donationAmount = getInputFieldValueById('donation-amount-input-feni');
    const currentBalance = getTextFieldValueById('account-balance');
    const currentFeniBalance = getTextFieldValueById('feni-donated-ammount');

    if (isNaN(donationAmount)) {
        alert('Invalid donation amount or insufficient balance.');
        return
    }

    if (donationAmount > 0 && donationAmount <= currentBalance) {

        const newbalance = currentBalance - donationAmount;
        setTextFieldValueById('account-balance', newbalance);

        const newFenidonation = currentFeniBalance + donationAmount;
        setTextFieldValueById('feni-donated-ammount', newFenidonation);


        const feniHeader = document.getElementById('feni-header').innerText;
        const donationDate = new Date().toString();

        const historyCard = document.createElement('div');
        historyCard.classList.add('card', 'bg-base-100', 'shadow-xl', 'p-4', 'mb-4');

        const historyContent =
            ` <div class="card-body">
                <p class="text-lg font-bold">${donationAmount} Taka donated for campaign ${feniHeader}</p>
                <p class="text-sm text-gray-500">Date: ${donationDate}</p>
            </div>`;

        historyCard.innerHTML = historyContent;
        document.getElementById('history-list').appendChild(historyCard);
        document.getElementById('donation-amount-input-feni').value = '';
        alert('Donation complete!');

    } else {
        alert('Invalid donation amount or insufficient balance.')
    }

}
// feni end

// Quota start

function handelQuotaDonation() {

    const donationAmount = getInputFieldValueById('donation-amount-input-quota');
    const currentBalance = getTextFieldValueById('account-balance');
    const currentQuotaBalance = getTextFieldValueById('quota-donated-ammount');

    if (isNaN(donationAmount)) {
        alert('Invalid donation amount or insufficient balance.');
        return
    }

    if (donationAmount > 0 && donationAmount <= currentBalance) {

        const newbalance = currentBalance - donationAmount;
        setTextFieldValueById('account-balance', newbalance);

        const newQuotadonation = currentQuotaBalance + donationAmount;
        setTextFieldValueById('quota-donated-ammount', newQuotadonation);

        const quotaHeader = document.getElementById('quota-header').innerText;
        const donationDate = new Date().toString();

        const historyCard = document.createElement('div');
        historyCard.classList.add('card', 'bg-base-100', 'shadow-xl', 'p-4', 'mb-4');

        
        const historyContent = 
        ` <div class="card-body">
                <p class="text-lg font-bold">${donationAmount} Taka donated for campaign ${quotaHeader}</p>
                <p class="text-sm text-gray-500">Date: ${donationDate}</p>
            </div>`;


        historyCard.innerHTML = historyContent;
        document.getElementById('history-list').appendChild(historyCard);
        document.getElementById('donation-amount-input-quota').value = '';
        alert('Donation complete!');

    } else {
        alert('Invalid donation amount or insufficient balance.')
    }

}


// quota end 


document.getElementById('donate-noakhali-btn').closest('form').addEventListener('submit', function (event) {
    event.preventDefault();
    handelNoakhaliDonation();
});

document.getElementById('donate-feni-btn').closest('form').addEventListener('submit', function (event) {
    event.preventDefault();
    handelFeniDonation();
})

document.getElementById('donate-quota-btn').closest('form').addEventListener('submit', function (event) {
    event.preventDefault();
    handelQuotaDonation();
})

 