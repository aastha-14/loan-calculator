 const amount = document.querySelector('#amount');
 const interest = document.querySelector('#interest');
 const years = document.querySelector('#years');
 const monthlyPayment = document.querySelector('#monthly-payment');
 const totalPayment = document.querySelector('#total-payment');
 const totalInterest = document.querySelector('#total-interest');



document.getElementById("loan-form").addEventListener('submit',function(e){

  document.getElementById('results').style.display = 'none';
  document.getElementById('loading').style.display = 'block';

  setTimeout(results, 1000);
  e.preventDefault();
});

function results(){

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 /12;
    const calculatedPayments = parseFloat(years.value) * 12;

    const x= Math.pow(1 + calculatedInterest , calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)){
      monthlyPayment.value = monthly.toFixed(2);
      totalPayment.value = (monthly * calculatedPayments).toFixed(2);
      totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);

      document.getElementById('results').style.display = 'block';
      document.getElementById('loading').style.display = 'none';
    }else{
          error('Invalid Values!');
    }
}

function error(err){
  document.getElementById('results').style.display = 'none';
  document.getElementById('loading').style.display = 'none';
  const errDiv = document.createElement('div');
  const card = document.querySelector('.card-content');
  const heading = document.querySelector('.card-title');
  errDiv.className = 'error';
  errDiv.style.color = 'red';
  errDiv.appendChild(document.createTextNode(err));
  card.insertBefore(errDiv, heading);

  setTimeout(()=>{document.querySelector('.error').remove();} ,2000);
}

document.getElementById("loan-form").addEventListener('reset', (e) => {
  amount.value = '';
  interest.value = '';
  years.value = '';
  document.getElementById('results').style.display = 'none';

  e.preventDefault();
});
