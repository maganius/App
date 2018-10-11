<template>
    <StackLayout orientation="horizontal" horizontalAlignment="center">
        <Image src="~/images/sponsors/roemers.png" stretch="aspectFit" height="60" width="100" />
    </StackLayout>
</template>

<script>
    export default {
        name: "Sponsors",
        data(){
            return {}
        },
        methods: {
            page(slug){
                this.$router.push('/' + slug);
            }
        }
    };
</script>
