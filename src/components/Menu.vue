<template>
    <RadSideDrawer ref="drawer" class="RadMenu"  height="100%">
        <StackLayout ~drawerContent class="container">
            <StackLayout height="56" style="text-align: center; vertical-align: center;" class="header">
                <Label text="TEA 2018 MVD" />
            </StackLayout>
            <StackLayout class="content">
                <Label class="fa" @tap="page('home')">
                    <Span class="icon">{{ 'fa-home' | fonticon }}   </Span>
                    <Span class="text">Inicio</Span>
                </Label>
                <Label class="fa" @tap="page('programa-dias')">
                    <Span class="icon">{{ 'fa-calendar-o' | fonticon }}   </Span>
                    <Span class="text">Agenda</Span>
                </Label>
                <Label class="fa" @tap="page('conferencistas')">
                    <Span class="icon">{{ 'fa-microphone' | fonticon }}   </Span>
                    <Span class="text">Ponentes</Span>
                </Label>
                <Label class="fa" @tap="page('trabajos')">
                    <Span class="icon">{{ 'fa-book' | fonticon }}{{ '\t'}}  </Span>
                    <Span class="text">Trabajos Libres</Span>
                </Label>
                <Label class="fa" @tap="page('inscriptos')">
                    <Span class="icon">{{ 'fa-user' | fonticon }}{{ '\t'}}   </Span>
                    <Span class="text">Inscriptos</Span>
                </Label>
                <Label class="fa">
                    <Span class="icon">{{ 'fa-bell' | fonticon }}   </Span>
                    <Span class="text">Notificaciones</Span>
                </Label>
                <Label class="fa">
                    <Span class="icon"> {{ 'fa-facebook-f' | fonticon }}    </Span>
                    <Span class="text">Facebook</Span>
                </Label>
            </StackLayout>
        </StackLayout>

        <StackLayout ~mainContent>
            <slot></slot>
        </StackLayout>
    </RadSideDrawer>
</template>

<script>
    export default {
        name: "RadMenu",
        data(){
            return {}
        },
        events:{
            'DrawerTap': function(){
                this.$refs.drawer.nativeView.toggleDrawerState();
            }
        },
        methods: {
            page(slug){
                this.$router.push('/' + slug);
            }
        }
    };
</script>
