<template>
    <div>
        <div class="background-style z-depth-1">
            <div class="title">Getting Started</div>
            <div class="sub-title">Here you can choose a template to continue <br>or <i>create a new one</i></div>
        </div>
        <div class="module-body">
            <div class="row">
                <div class="input-field col s4 offset-s4 search">
                    <i class="material-icons prefix">search</i>
                    <input id="search" type="text" class="validate">
                    <label for="search">Search</label>
                </div>
            </div>
            <div class="row content">
                <div class="col s6 center-align tile teal">Preset Templates</div>
                <div class="col s6 center-align tile teal lighten-2">User Creates Templates</div>
                <div class="col s6 center-align tile teal darken-2">Your Templates</div>
                <div class="col s6 center-align tile teal lighten-1">Create new Template</div>
                <div class="cEvent" />
            </div>
        </div>
    </div>
</template>

<script>
    import {
        default as code
    } from './helpers/GsHelper.js'
    export default code
</script>

<style scoped>
    .background-style {
        position: absolute;
        top: 0;
        z-index: -1;
        width: 100%;
        height: 50%;
        background-color: #4db6ac;
    }

    .module-body {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 50%;
    }

    .cEvent {
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 50%;
    }

    .cTile {
        position: absolute;
        height: 50px;
        top: -20px;
    }

    .title {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60%;
        font-size: 60px;
        color: #eceff1;
        font-family: 'Product Sans', Arial, sans-serif;
    }

    .sub-title {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 38%;
        font-size: 20px;
        color: #eceff1;
    }

    .tile {
        position: relative;
        z-index: -3;
        top: -20px;
        font-size: 40px;
    }

    .search {
        position: absolute;
        top: -70px;
    }

    .input-field {
        color: white;
        font-size: 25px;
    }

    .input-field label {
        color: #fff;
    }

    .input-field input[type=text]:focus+label {
        color: #000;
    }

    .input-field input[type=text]:focus {
        border-bottom: 1px solid #000;
        box-shadow: 0 1px 0 0 #000;
    }

    .input-field input[type=text] {
        border-bottom: 1px solid #fff;
        box-shadow: 0 1px 0 0 #fff;
    }

    .input-field .prefix {
        color: #fff;
    }

    .input-field .prefix.active {
        color: #000;
    }
</style>