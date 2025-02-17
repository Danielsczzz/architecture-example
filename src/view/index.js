const createUserBtn = document.getElementById('create-user-btn') 
const selectUserBtn = document.getElementById('select-user-btn')

const createUser = () => {
  const modal = document.getElementById('create-user-modal') 
  openModal(modal)
}

const openModal = (modal) => {
  modal.style.display = 'flex'
}

const closeModal = (modal) => {
  modal.style.display = 'none'
}

createUserBtn?.addEventListener('click', createUser)