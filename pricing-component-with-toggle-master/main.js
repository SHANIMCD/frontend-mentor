window.addEventListener('DOMContentLoaded', () => {

  const button = document.querySelector('.switch')
  const monthlyPrice = document.querySelector('.monthly')
  const annualPrice = document.querySelector('.annually')

  let hasBeenToggled = false

  button.addEventListener('click', () => {
    const monthlyBasic = document.querySelector('.basic-monthly')
    const monthlyPro = document.querySelector('.pro-monthly')
    const monthlyMaster = document.querySelector('.master-monthly')

    const annualBasic = document.querySelector('.basic-annual')
    const annualPro = document.querySelector('.pro-annual')
    const masterAnnual = document.querySelector('.master-annual')

    
    if (!hasBeenToggled) {
      button.classList.toggle('toggle-monthly')
      hasBeenToggled = true
    } else {
      button.classList.toggle('toggle-monthly')
      button.classList.toggle('toggle-annually')
    }

    if (button.classList.contains('toggle-monthly')) {
      monthlyBasic.textContent = '$19.99'
      monthlyPro.innerHTML = '$24.99'
      monthlyMaster.innerHTML = '$39.99'
    } else if (button.classList.contains('toggle-annually')) {
      annualPrice.innerHTML = '$199.99'
      annualPrice.innerHTML = '$249.99'
      annualPrice.innerHTML = '$399.99'
    }
  })
})



