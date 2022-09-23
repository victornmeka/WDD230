const options = {year: 'numeric'}
document.getElementById('year').textContent = new Date().toLocaleDateString('en-us', options)

const option2 = {month: 'numeric', day: 'numeric', year: 'numeric'}
document.getElementById('date').textContent = new Date().toLocaleDateString('en-us', option2)

const option1 = new Date()
document.getElementById('time').textContent = new Date().toLocaleTimeString('en-us', option1) 