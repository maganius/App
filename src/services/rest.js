import api from './api';

export default {
    getConferencistas () {
        return api().get('conferencistas')
    }
}