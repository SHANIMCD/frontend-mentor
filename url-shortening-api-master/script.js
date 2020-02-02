window.addEventListener('DOMContentLoaded', () => {
  const result = document.querySelector('.search-section')
  const searchBar = document.querySelector('input')
  const submit = document.querySelector('#shorten')
  const error = document.querySelector('#error')
  const placeHolder = document.querySelector('::placeholder')

  error.style.color = 'red'
  error.style.fontSize = '12px'
  error.style.marginTop = '5px'


  submit.addEventListener('mouseover', () => {
    submit.style.backgroundColor = '#AFEEEE'
    submit.addEventListener('mouseout', () => {
      submit.style = 'none'
    })
  })

  submit.addEventListener('click', () => {
    
    error.innerHTML = 'Please add a link'
    searchBar.style.borderColor = 'red'
    placeHolder.style.color = 'red'
  })

  searchBar.addEventListener('click', () => {
    searchBar.style = 'none'
    error.innerHTML = ''
  })



})