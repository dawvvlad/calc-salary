const button = document.querySelector('.button')

const openModalBtn = document.querySelector('.manualBtn')
openModalBtn.addEventListener('click', openModal)

const closeBtn = document.querySelector('.closeBtn')

button.addEventListener('click', getSalary);

function getSalary() {
    const yourTime = document.querySelector('[name="personHours"]').value
    const sales = document.querySelector('[name="TO"]').value
    const percentOfCost = document.querySelector('[name="percent"]').value
    const brigadeTime = document.querySelector('[name="brigade"]').value
    const dis = document.querySelector('[name="dis"]').value

    const costTime = yourTime * 99;
    const salary = costTime + ((sales * (percentOfCost / 100) * yourTime) / brigadeTime);   
    const tax = (salary / 100) * 13; 
    const result = ((salary - tax) + ((dis / 100) * 2)).toFixed(2);
    
    const res = document.querySelector('h2');
        

    if(!yourTime || !sales || !percentOfCost || !brigadeTime) {
        res.innerHTML = 'Не все поля заполнены';
        res.style.color = 'red'
        res.style.fontWeight = 300;
        
        
    }
    else if(result == 'NaN') {
        res.innerHTML = `Неверный формат`
        res.style.fontWeight = 300;
        res.style.color = 'red';
        
    }
    else {
        res.innerHTML = `${result}`;
        res.style.color = 'black'
        res.style.fontWeight = 500   
    }

}

function openModal() {
    const modal = document.querySelector('.modal');
    modal.classList.remove('hide')
    closeBtn.addEventListener('click', closeModal)
}

function closeModal() {
    const modal = document.querySelector('.modal');
    modal.classList.add('hide')
    closeBtn.removeEventListener('click', closeModal)
}