import './script/change_word.js'

import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"
import { auth } from "./script/firebase.js"; 
import {loginCheck} from './script/loginCheck.js'

import './script/form_idea.js';
import './script/logout.js';
/* import './script/modal.js';
import './script/hamburguer.js'; */



onAuthStateChanged(auth, async (user) => {
    loginCheck(user);
   
})
