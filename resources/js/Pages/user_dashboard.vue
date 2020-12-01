<template>
    <app-layout>
        <div id="app">
			<router-view></router-view>
        </div>
    </app-layout>
</template>
<script>
    import AppLayout from '@/Layouts/AppLayout'
    export default {
        components: {  
            AppLayout,
        },
    }
</script>
