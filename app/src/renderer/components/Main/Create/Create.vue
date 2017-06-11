<template>
    <div>
        <nav class="navCreate teal darken-1 z-depth-0 hide">
            <div class="nav-wrapper valign-wrapper">
                <!-- Dynamic Content-->
            </div>
        </nav>
        <div class="View">
            <!-- Dynamic Content -->
            <div class="container">
                <ul class="collapsible popout" data-collapsible="accordion">
                    <li>
                        <div class="collapsible-header">PDF Creation Page</div>
                        <div class="collapsible-body">
                            <span>Not yet designed. But will include bottom toolbar with stepper (to complete necessary information for PDF)[stepper could replace tabs if proceeded with a button(this button could be located in the toolbar that will never disable itself all the way until PDF is created and served :)) on screen?]</span>
                        </div>
                    </li>
                </ul>
            </div>
            <entry-form id="0"></entry-form>
            <meta-form id="1"></meta-form>
        </div>
        <div class="toolCreate">
            <div class="content teal darken-1 left-align">
                <a id="start" class="waves-effect waves-light btn">
                    start<i class="material-icons right">send</i>
                    </a>
                <a id="add" class="waves-effect waves-light btn-floating green">
                    <i class="material-icons">add</i>
                    </a>
                <div class="input-field inline">
                    <input id="step" type="text">
                    <label for="step">Step</label>
                </div>
                <!-- Dropdown Trigger -->
                <a class='dropdown-button btn' href='#' data-activates='pages'>Dev Pages</a>

                <!-- Dropdown Structure -->
                <ul id='pages' class='dropdown-content'>
                    <li><a>Entry</a></li>
                    <li><a>Meta</a></li>
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
    }

    .toolCreate {
        position: absolute;
        bottom: 0;
        width: 100%;
    }

    .toolCreate .content {
        padding: 10px;
    }

    .toolCreate .content>* {
        margin-left: 10px;
    }

    .input-field label {
        color: #fff;
    }

    .input-field input[type=text]:focus+label {
        color: #fff;
    }

    .input-field input[type=text]:focus {
        border-bottom: 1px solid #fff;
        box-shadow: 0 1px 0 0 #fff;
    }
</style>