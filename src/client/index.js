import { checkForURL } from './js/urlChecker'
import { handleSubmit } from './js/formHandler'
import {getImage} from './js/getImage'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

  const submit = document.querySelector("#submitForm")
  submit.addEventListener('click', e=>  handleSubmit(e))
  
export {checkForURL, handleSubmit}