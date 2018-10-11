<template>
    <StackLayout>
        <Label v-show="crono.conferencistas.length" textWrap="true" class="conferencistas">
            <template v-for="conf in crono.conferencistas">{{ conf.nombre + ' ' + conf.apellido}}; </template>
        </Label>
    </StackLayout>
</template>

<script>
    import sqlite from 'nativescript-sqlite'

    export default {
        props: ['crono'],
        data(){
            return {
                confs: []
            }
        },
        created(){
        },
        methods: {
        }
    };
</script>
