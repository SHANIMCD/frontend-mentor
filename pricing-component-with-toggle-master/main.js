window.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.switch')
  const monthlyPrice = document.querySelector('.monthly')
  const annualPrice = document.querySelector('.annually')
  console.log(button)

  button.addEventListener('click', e => {
    // const change = document.querySelector('.switch')
    const result = document.querySelector('.toggle')
    // console.log(monthlyPrice.textContent)
    // result.textContent = annualPrice.textContent

    function classToggle() {
      .classList.add(annualPrice)
      this.classList.remove(monthlyPrice)
    }
    classToggle()
    
    
  })

})

