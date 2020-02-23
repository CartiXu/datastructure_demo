<template>
    <div class="cube">
        <h2>{{ dataname }}</h2>
    </div>
</template>

<script>
export default {
    props:["dataname"]
}
</script>

<style scoped>
    .cube{
        box-sizing: border-box;
        height: 200px;
        width: 220px;
        background: #FFFFFF;
        float: left;
        color: #737373;
        padding: 5px;
        margin: 10px;
        display:inline-block;
        border-radius: 5px;
        box-shadow: 0 0.3px 0.9px rgba(0, 0, 0, .12), 0 1.6px 3.6px rgba(0, 0, 0, .12);
        
    }
    .cube:hover{
        background:rgb(126, 126, 126);
        color: #FFFFFF;
-moz-box-shadow:3px 1px 16px #4F4F4F; -webkit-box-shadow:3px 1px 16px #4F4F4F; box-shadow:3px 1px 16px #4F4F4F;    }
</style>