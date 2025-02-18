// Html buttons
const openCreateUserModalBtn = document.getElementById('create-user-btn') 
const openSelectUserModalBtn = document.getElementById('select-user-btn')

const handleSelectUserModal = () => {
  const modal = document.getElementById('select-user-modal')
  openModal(modal)

  document.getElementById('close-select-user-modal').addEventListener('click', () => closeModal(modal))
}

const handleCreateUserModal = async () => {
  const modal = document.getElementById('create-user-modal') 
  openModal(modal)
  document.getElementById('save-user-btn').addEventListener('click', async () => {
    await saveUser()
    closeModal(modal)
  })
  document.getElementById('close-create-user-modal').addEventListener('click', () => closeModal(modal))
}

const saveUser = async () => {
  const username = getInputUser()
  if(username === null) return 
  const response =  await fetch('http://localhost:4000/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: username
  })
  const data = await response.json()
  alert(data.message)
}

const getInputUser = () => {
  const username = document.getElementById('username-input').value
  if(username === '') {
    alert('The username cannot be empty')
    return null
  }
  const input = JSON.stringify({input: username})
  return input
}

const openModal = (modal) => {
  modal.style.display = 'flex'
}

const closeModal = (modal) => {
  modal.style.display = 'none'
}

openCreateUserModalBtn.addEventListener('click', handleCreateUserModal)
openSelectUserModalBtn.addEventListener('click', handleSelectUserModal)