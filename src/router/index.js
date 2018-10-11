import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../pages/Home';
import Initial from '../pages/Initial';
import Counter from '../components/Counter';
import Informacion from '../pages/informacion';
import Conferencistas from '../pages/conferencistas';
import Conferencista from '../pages/conferencista';
import Programas from '../pages/programas';
import ProgramaDias from '../pages/programa_dias';
import Programa from '../pages/programa';
import Trabajos from '../pages/trabajos_libres';
import Trabajo from '../pages/trabajo';
import Inscriptos from '../pages/inscriptos';
import Inscripto from '../pages/inscripto';

const router = new VueRouter({
    pageRouting: true,
    routes: [
        {
            path: '/initial',
            component: Initial,
            meta: {
                title: 'Configuration',
            },
        },
        {
            path: '/home',
            component: Home,
            meta: {
                title: 'Home',
            },
        },
        {
            path: '/informacion',
            component: Informacion,
            meta: {
                title: 'Informacion',
            },
        },
        {
            path: '/conferencistas',
            name: 'conferencistas',
            component: Conferencistas,
            meta: {
                title: 'Conferencistas',
            },
        },
        {
            path: '/conferencista/:conf_id',
            name: 'conferencista',
            component: Conferencista,
            meta: {
                title: 'Conferencista',
            },
        },
        {
            path: '/programa-dias',
            name: 'programa_dias',
            component: ProgramaDias,
            meta: {
                title: 'Programa',
            },
            props: true
        },
        {
            path: '/programas/:dia?',
            name: 'programas',
            component: Programas,
            meta: {
                title: 'Programa',
            },
            props: true
        },
        {
            path: '/programa/:crono_id?',
            name: 'programa',
            component: Programa,
            meta: {
                title: 'Programa',
            },
            props: true
        },
        {
            path: '/trabajos',
            name: 'trabajos',
            component: Trabajos,
            meta: {
                title: 'Trabajos',
            }
        },
        {
            path: '/trabajo/:trabajo_id',
            name: 'trabajo',
            component: Trabajo,
            meta: {
                title: 'Trabajo',
            }
        },
        {
            path: '/inscriptos',
            name: 'inscriptos',
            component: Inscriptos,
            meta: {
                title: 'Inscriptos',
            }
        },
        {
            path: '/inscripto',
            name: 'inscripto',
            component: Inscripto,
            meta: {
                title: 'Inscripto',
            }
        },
        {path: '*', redirect: '/home'},
    ],
});

router.replace('/initial');

module.exports = router;
