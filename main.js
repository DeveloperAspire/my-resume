const navigation = document.querySelector('.navigation')
const information =document.querySelector('.information')

navigation.addEventListener('click', ()=>{
      navigation.classList.toggle('active')
      information.classList.toggle('active')
      console.log('Hello')
})