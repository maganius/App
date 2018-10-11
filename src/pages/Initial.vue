<template>
    <Page class="page">
        <ActionBar class="action-bar" title="Initial"/>

        <StackLayout>
            <Button class="btn btn-primary" @tap="$router.push('/counter')">Counter</Button>
            <Button class="btn btn-primary" @tap="$router.push('/hello')">Hello World</Button>
            <Button class="btn btn-primary" @tap="$router.push('/conferencistas')">Conferencistas</Button>
            <HtmlView v-if="conType === 0" html="Sin conexion"></HtmlView>
            <HtmlView v-else-if="conType === 1" html="Wifi conexion"></HtmlView>
            <HtmlView v-else-if="conType === 2" html="Mobile conexion"></HtmlView>

        </StackLayout>

    </Page>
</template>

<script>
    import permissions from 'nativescript-permissions';
    import {startMonitoring, stopMonitoring, getConnectionType, connectionType} from 'tns-core-modules/connectivity';
    import sqlite from 'nativescript-sqlite'
    import rest from '../services/rest';

    export default {
        data(){
            return {
                conType: false,
                conferencistas: []
            }
        },
        beforeMount(){
            permissions.requestPermission(android.Manifest.permission.ACCESS_NETWORK_STATE, 'ACCESS TO INTERNET STATUS').then(() => {
                console.log("Woo Hoo, I have the power!");
                startMonitoring((newConnectionType) => {
                    switch (newConnectionType) {
                        case connectionType.none:
                            this.conType = connectionType.none;
                            console.log("Connection type changed to none.");
                            break;
                        case connectionType.wifi:
                            console.log("Connection type changed to WiFi.");
                            this.conType = connectionType.wifi;
                            break;
                        case connectionType.mobile:
                            console.log("Connection type changed to mobile.");
                            this.conType = connectionType.mobile;
                            break;
                        default:
                            break;
                    }
                });
            }).catch(function() {
                console.log("Uh oh, no permissions - plan B time!");
            });
        },
        mounted(){
            permissions.requestPermissions([android.Manifest.permission.READ_EXTERNAL_STORAGE, android.Manifest.permission.WRITE_EXTERNAL_STORAGE], 'ACCESS TO READ STORAGE').then(() => {
                console.log('GRANTED READ/WRITE STORAGE');
            }).catch(function() {
                console.log("Uh oh, no permissions - READ/WRITE storage");
            });
            console.log('DATABASE');
            if (this.isDebug && sqlite.exists("data.db")) {
                console.log('ELIMINANDO DATABASE');
                sqlite.deleteDatabase("data.db");
            }
            if (!sqlite.exists("data.db")) {
                console.log('COPIAND DATABASE');
                sqlite.copyDatabase("data.db");
            }
            console.log('ROUTING');
            this.$router.push('/home');

        },
        methods: {
        }
    };
</script>
