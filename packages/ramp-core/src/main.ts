import api from '@/api';
import Vue from 'vue';
import '@/styles/main.css';

window.RAMP = api;

// expose Vue to the global scope so fixtures that use Vue have access to it
// TODO: there are issues with how Vue is loading when using Cypress
window.Vue = Vue;

// execute `initRAMP` global function if it's defined as soon at the RAMP library is added to the global scope
api.gapiPromise.then(() => {
    if (typeof window.initRAMP === 'function') {
        window.initRAMP();
    }
});

export default api;