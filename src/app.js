import { route } from './router/router.js';
import { login } from "./functions/login.js"

route('/', 'home', function() {
  this.$on('.home__submit', 'click', (e)=>{
   login(e)
  })
});

route('/success', 'success', function() {
});


route("*", '404', function () {});