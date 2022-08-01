
import { handleSubmit } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import './media/lake.png'
  const submit = document.querySelector("#submitForm")
  submit.addEventListener('click', e=>  handleSubmit(e))
  
export { handleSubmit}