<template>
    <ScrollView>
        <StackLayout>
            <template v-for="conferencista in confs" class="list-group">
                <GridLayout columns="*, 2*, auto" rows="*, 2*, 3*, auto, auto" class="grid_conf">
                    <Label row="0" col="0" colSpan="2" text="" class="hr-light" />
                    <Label row="1" col="0" colSpan="2" :text="conferencista.nombre + ' ' + conferencista.apellido" class="m-l-8 nombre" @tap="onItemTap(conferencista)" />
                    <Image row="2" col="0"  :src="conferencista.imagen_thumb" stretch="aspectFill" borderRadius="100" width="70" height="70" VerticalAlignment="top" @tap="onItemTap(conferencista)" />
                    <Label row="2" col="1" :text="conferencista.titulo_conf" class="m-l-8 titulo_conf" style="padding:0;" textWrap="true" VerticalAlignment="top" @tap="onItemTap(conferencista)" />
                    <Label row="3" col="1" class="m-l-8 btn-resumen" style="padding:0;" textWrap="true" @tap="verResumen(conferencista)">
                        <Span v-if="conferencista.resumen">resumen</Span>
                    </Label>
                    <Label row="4" col="0" colSpan="3" v-show="conferencista.showResumen" textWrap="true" class="vista-resumen">{{ conferencista.resumen }}</Label>
                </GridLayout>
            </template>
        </StackLayout>

    </ScrollView>
</template>

<script>
    import sqlite from 'nativescript-sqlite'

    export default {
        props: ['crono_id'],
        data(){
            return {
                confs: []
            }
        },
        created(){
            new sqlite("data.db").then((db) => {
                db.resultType(sqlite.RESULTSASOBJECT);
                var db_promise = db.all('select * from crono_conferencistas as cc JOIN conferencistas as c ON c.id_conf = cc.id_conf where cc.id_crono = ?', [this.crono_id]);
                db_promise.then((data) => {
                    if(data) {
                        this.confs = data;
                    }
                }, function(err) {
                    console.error("We failed to open database conferencista", err);
                });
            });
        },
        methods: {
            onItemTap: function(conf) {
                this.$router.push({name: 'conferencista', params: {conf_id: conf.id_conf}})
            },
            verResumen: function(conferencista) {
                if(conferencista.resumen){
                    if(!conferencista.showResumen) {
                        this.$set(conferencista, 'showResumen', true);
                    }else if(conferencista.showResumen){
                        this.$set(conferencista, 'showResumen', false);
                    }
                }
            },
        }
    };
</script>
