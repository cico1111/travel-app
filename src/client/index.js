import { checkForURL } from './js/urlChecker'
import { handleSubmit } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
// window.onload = function() {
//     console.log("onloading!!!!")
//   }

  const submit = document.querySelector("#submitForm");
  submit.addEventListener('click', (e)=>{ alert("click!!!!")
  handleSubmit(e)
})
 
export {checkForURL, handleSubmit}