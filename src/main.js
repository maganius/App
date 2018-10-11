import Vue from 'nativescript-vue';
import router from './router';
import store from './store';
import './styles.scss';
import './fonts.css';
import './assets/paginas.scss'
import './assets/theme.android.css'
import {TNSFontIcon, fonticon} from 'nativescript-fonticon';
import moment from 'moment'
import VueMomentJS from "vue-momentjs"
import VueEvents from 'vue-events'
import RadMenu from './components/Menu'

TNSFontIcon.debug = false;
TNSFontIcon.paths = {
    'fa': './fontawesome.css',
    'ion': './ionicons.css'
};
TNSFontIcon.loadCss().then(function () {
    Vue.filter('fonticon', fonticon);
    // Uncommment the following to see NativeScript-Vue output logs
    // Vue.config.silent = false;
    Vue.use(VueMomentJS, moment);
    Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer);
    Vue.component('RadMenu', RadMenu);
    Vue.use(VueEvents);

    Vue.mixin({
        data: function() {
            return {
                get isDebug() {
                    return true;
                }
            }
        }
    });
    Vue.filter('ellipsis', function (value, limit) {
        if(!limit){
            limit = 80
        }
        if(value) {
            var maxLength = limit // maximum number of characters to extract
            if(value.length > maxLength && typeof value.length === 'number'){
                var trimmedString = value.substr(0, maxLength);
                value = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))) + '...'
            }
            return value;
        }
    });
    Vue.filter('striphtml', function (value) {
        if(value && typeof value !== 'object') {
            return value.replace(/<(?:.|\n)*?>/gm, '');
        }
        return value;
    });
    Vue.filter('acentos', function (value) {
        if(value && typeof value !== 'object') {
            value = value.replace(/&nbsp;/g, ' ');
            return "<div style='font-size: 12px; text-align: center'>" + value + "</div>";
        }
        return value;
    });
    new Vue({
        router,
        store,
    }).$start();

});

