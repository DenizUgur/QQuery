<template>
    <div>
        <nav class="navCreate teal darken-1 z-depth-0 hide">
            <div class="nav-wrapper valign-wrapper">
                <a href="#!" class="breadcrumb">First</a>
                <a href="#!" class="breadcrumb">Second</a>
                <a href="#!" class="breadcrumb">Third</a>
            </div>
        </nav>
        <div class="container"> <!-- Dynamic Content -->
            <ul class="collapsible popout" data-collapsible="accordion">
                <li>
                    <div class="collapsible-header">PDF Creation Page</div>
                    <div class="collapsible-body">
                        <span>Not yet designed. But will include bottom toolbar with stepper (to complete necessary information for PDF)[stepper could replace tabs if proceeded with a button(this button could be located in the toolbar that will never disable itself all the way until PDF is created and served :)) on screen?]</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="toolCreate">
            <div class="content teal darken-1 left-align">
                <a id="start" class="waves-effect waves-light btn">
                    start<i class="material-icons right">send</i>
                    </a>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        default as code
    } from '../../helpers/Create.js'
    export default code
</script>

<style>
    .navCreate {
        position: absolute;
        width: 100%;
        height: 48px;
        padding-left: 20px;
    }

    .toolCreate {
        position: absolute;
        bottom: 0;
        width: 100%;
    }

    .toolCreate .content {
        padding: 10px;
    }

    a+a {
        margin-left: 10px;
    }
</style>