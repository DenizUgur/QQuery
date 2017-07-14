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
                        <div class="collapsible-header dev">PDF Creation Page</div>
                        <div class="collapsible-body">
                            <span>Not yet designed. But will include bottom toolbar with stepper (to complete necessary information for PDF)[stepper could replace tabs if proceeded with a button(this button could be located in the toolbar that will never disable itself all the way until PDF is created and served :)) on screen?]</span>
                        </div>
                    </li>
                </ul>
            </div>
            <gs-form id="0"></gs-form>
            <meta-form id="1"></meta-form>
            <loader id="2"></loader>
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
                <a id="dev_cancel" class="btn green dev"><i class="material-icons">cancel</i></a>

                <!-- Dropdown Structure -->
                <ul id='pages' class='dropdown-content'>
                    <li><a>GStarted</a></li>
                    <li><a>Meta</a></li>
                    <li><a>Loader</a></li>
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
        box-shadow: 0 -2px 2px 0 rgba(0, 0, 0, 0.14), 0 -1px 5px 0 rgba(0, 0, 0, 0.12), 0 -3px 1px -2px rgba(0, 0, 0, 0.2);
    }

    .toolCreate .content {
        padding: 10px;
    }

    .template-card {
        position: absolute;
        bottom: 15%;
    }

    .toolCreate .content>* {
        margin-left: 10px;
    }
</style>