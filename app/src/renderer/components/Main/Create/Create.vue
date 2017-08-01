<template>
    <div>
        <nav class="navCreate teal">
            <div class="nav-wrapper valign-wrapper">
                <!-- Dynamic Content-->
            </div>
        </nav>
        <div class="View">
            <!-- Dynamic Content -->
            <div class="container">
                <h1>PDF CREATION PAGE</h1>
            </div>
            <gs-form></gs-form>
            <meta-form></meta-form>
            <parameters></parameters>
        </div>
        <div class="toolCreate">
            <div class="content teal darken-1 left-align">
                <a id="start" class="waves-effect waves-light btn">
                    start<i class="material-icons right">send</i>
                    </a>
                <!-- Dropdown Trigger -->
                <a class='dropdown-button btn dev' href='#' data-activates='pages'>Dev Pages</a>

                <a id="back" class="btn orange hide"><i class="material-icons">replay</i></a>
                <a id="next" class="btn green hide"><i class="material-icons">play_arrow</i></a>
                 <a id="dev-t" class="btn dev"><i class="material-icons">list</i></a>

                <!-- Dropdown Structure -->
                <ul id='pages' class='dropdown-content'>
                    <li><a>GStarted</a></li>
                    <li><a>Meta</a></li>
                    <li><a>Parameters</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        default as code
    } from './CreateHelper.js'
    export default code
</script>

<style>
    .navCreate {
        position: absolute;
        width: 100%;
        height: 48px;
        padding-left: 20px;
        z-index: 99;
        box-shadow: unset;
        top: 64px;
        display: none;
    }

    #start {
        background-color: #00e676;
    }

    #start:hover {
        background-color: #00c853;
    }

    .toolCreate {
        position: absolute;
        bottom: 0;
        width: 100%;
        z-index: 99;
        box-shadow: 0 -2px 2px 0 rgba(0, 0, 0, 0.14), 0 -1px 5px 0 rgba(0, 0, 0, 0.12), 0 -3px 1px -2px rgba(0, 0, 0, 0.2);
    }

    .toolCreate .content {
        padding: 10px;
    }

    .toolCreate .content>* {
        margin-left: 10px;
    }
</style>