export const validateMessage = (text) => {
    const validatorMessage = document.createElement("p")
    validatorMessage.setAttribute("class", "validate-message")
    validatorMessage.textContent = text
    document.querySelector('.home__form').appendChild(validatorMessage)
  }