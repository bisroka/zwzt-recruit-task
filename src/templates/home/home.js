import { formTxt } from '../../content/polish/form.text.js'

export const home = `
    <section id="home" class=home>
        <h1 class="home__title">${formTxt.formTitleTxt}</h1>
        <form class="home__form" action="submit" method="post">
            <label for="login"> ${formTxt.usernameTxt} </label>
            <input id="login" name="login" class="home__input" type="text" />
            <label for="password"> ${formTxt.passwordTxt} </label>
            <input id="password" name="password" class="home__input" type="password" />
            <button type="submit" class="home__submit">${formTxt.submitButtonTxt}</button>
        </form>
    </section>
`
