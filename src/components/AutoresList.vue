<template>
    <StackLayout>
        <template v-if="autores.length">
            <template v-for="autor in autores">
                <Label textWrap="true" class="autores" style="margin-left: 40px">
                    <FormattedString>
                        <Span style="font-weight: bold; font-size: 15px">{{ autor.nombre + ' ' + autor.apellido }}</Span>
                        <Span> ({{ autor.Pais }})</Span>
                    </FormattedString>
                </Label>
                <Label class="autores" style="margin-left: 40px; font-size: 9px">- {{ autor.Institucion }}</Label>
            </template>
        </template>
    </StackLayout>
</template>

<script>
    import sqlite from 'nativescript-sqlite'

    export default {
        props: ['trabajo_id'],
        data(){
            return {
                autores: [],
            }
        },
        computed: {
        },
        created(){
            new sqlite("data.db").then((db) => {
                db.resultType(sqlite.RESULTSASOBJECT);
                var db_promise = db.all('select * from trabajos_libres_participantes tp join personas_trabajos_libres p ON tp.id_participante = p.id left join instituciones i on i.ID_Instituciones = p.institucion left join paises ps on ps.ID_Paises = p.pais where tp.id_trabajo_libre = ?', [this.trabajo_id]);
                db_promise.then((data) => {
                    if(data) {
                        this.autores = data;
                    }
                }, function(err) {
                    console.error("We failed to open database autores", err);
                });
            });
        },
        methods: {
        }
    };
</script>
