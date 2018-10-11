<template>
    <StackLayout>
        <Label v-show="trabajo.autores.length" textWrap="true" class="autores" fontWeight="bold">
            <template v-for="autor in trabajo.autores">{{ autor.nombre + ' ' + autor.apellido }}; </template>
        </Label>
        <Label class="institucion">
            <Span v-show="trabajo.autores[0].pais">{{ trabajo.autores[0].pais }}</Span> <Span v-show="trabajo.autores[0].institucion"> - {{ trabajo.autores[0].institucion }}</Span>
        </Label>
    </StackLayout>
</template>

<script>
    import sqlite from 'nativescript-sqlite'

    export default {
        props: ['trabajo'],
        data(){
            return {
                autores: [],
                related: {}
            }
        },
        computed: {
        },
        created(){
            /*new sqlite("data.db").then((db) => {
                db.resultType(sqlite.RESULTSASOBJECT);
                var db_promise = db.all('select * from trabajos_libres_participantes tp join personas_trabajos_libres p ON tp.id_participante = p.id where tp.id_trabajo_libre = ? ORDER BY tp.id ASC', [this.trabajo_id]);
                db_promise.then((data) => {
                    if(data) {
                        this.autores = data;
                        var db_related = db.get('SELECT * FROM trabajos_libres_participantes tp JOIN personas_trabajos_libres p ON tp.id_participante = p.id LEFT JOIN instituciones i ON i.ID_Instituciones = p.institucion LEFT JOIN paises ps ON ps.ID_Paises = p.pais WHERE tp.id_participante = ?', [data[0].id_participante]);
                        db_related.then((related) => {
                            this.related = {
                                'id': related.ID_Instituciones,
                                'institucion': related.Institucion,
                                'pais': related.Pais
                            };
                        }, function(error){
                            console.log(error)
                        })
                    }
                }, function(err) {
                    console.error("We failed to open database autores", err);
                });
            });*/
        },
        methods: {
        }
    };
</script>
