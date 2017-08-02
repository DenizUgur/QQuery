<template>
    <div>
        <div class="background-style">
            <div class="title-gs">Getting Started</div>
            <div class="sub-title">Here you can choose a template to continue <br>or <i>create a new one</i></div>
            <div class="shadow" />
        </div>
        <div class="module-body">
            <img />
            <ul class="tiles">
                <li class="tiles-tile" data-tile="1">
                    <h3>Preset Templates</h3>
                    <desc>desc_preset</desc>
                    <i class="material-icons">library_books</i>
                </li>
                <li class="tiles-tile" data-tile="2">
                    <h3>User Created Templates</h3>
                    <desc>desc_user</desc>
                    <i class="material-icons">face</i>
                </li>
                <li class="tiles-tile" data-tile="3">
                    <h3>Your Templates</h3>
                    <desc>desc_your</desc>
                    <i class="material-icons">favorite_border</i>
                </li>
                <li class="tiles-tile" data-tile="4">
                    <h3>Create new Template</h3>
                    <i class="material-icons">fiber_new</i>
                </li>
            </ul>
            <ul class="content-tile">
                <li class="content-item" id="1">
                    <div class="content-wrap">
                        <data-table></data-table>
                    </div>
                </li>
                <li class="content-item" id="2">
                    <div class="content-wrap">
                        <data-table></data-table>
                    </div>
                </li>
                <li class="content-item" id="3">
                    <div class="content-wrap">
                        <data-table></data-table>
                    </div>
                </li>
            </ul>
        </div>
        <!-- Modal Structure -->
        <div id="confirm-modal" class="modal">
            <div class="modal-content">
                <h4>Modal Header</h4>
                <div class="row">
                    <div class="col s6" style="width:200px; height:200px;">
                        <canvas id="canvasGraph"></canvas>
                    </div>
                    <p class="col s6 push-s1">A bunch of text</p>
                </div>
            </div>
            <div class="modal-footer">
                <a id="modal-continue" href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Continue</a>
                <a id="modal-cancel" href="#!" class="modal-action modal-close waves-effect waves-red btn-flat">Cancel</a>
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

    .modal-content {
        padding-bottom: 0;
    }

    .title-gs {
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
        height: 35%;
        font-size: 20px;
        color: #eceff1;
    }

    .shadow {
        position: absolute;
        z-index: 6;
        width: 100%;
        bottom: 0;
        left: 0;
        height: 20px;
        box-shadow: 0 4px 2px -1px rgba(0, 0, 0, 0.14), 0 3px 5px -1px rgba(0, 0, 0, 0.12), 0 4px 1px -2px rgba(0, 0, 0, 0.2)
    }
    /* Tiles */

    img {
        position: absolute;
        z-index: -6;
        left: 0;
    }

    desc {
        display: none;
    }

    .tiles {
        position: fixed;
        z-index: 5;
        bottom: 0;
        display: flex;
        width: 100%;
    }

    .tiles-tile {
        flex: 1;
        padding: 20px;
        transition: all .25s ease-out;
        background: rgba(0, 0, 0, 0.5);
        color: white;
        cursor: pointer;
    }

    .tiles-tile>i {
        position: absolute;
        bottom: 0;
        padding-bottom: 5%;
        margin-left: -30px;
        font-size: 60px;
    }

    .tiles-tile:hover,
    .tiles-tile.active {
        background: transparent;
        color: black;
    }

    .header>h3,
    p {
        left: 0;
        text-align: left;
    }

    .header {
        padding-bottom: 20px;
    }

    .content-tile {
        z-index: 10;
        height: 100vh;
        position: fixed;
        top: 0;
    }

    .content-item {
        position: absolute;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 10;
        display: flex;
        align-items: center;
        padding: 30px;
        transform: scale(0);
        transition: all 0.65s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .content-item.active {
        transform: scale(1);
    }

    .content-item.active .content-wrap {
        transform: scale(1);
        opacity: 1;
    }

    .content-item:nth-child(1) {
        transform-origin: 0% 100%;
        background: tomato;
    }

    .content-item:nth-child(2) {
        transform-origin: 33% 100%;
        background: deepskyblue;
    }

    .content-item:nth-child(3) {
        transform-origin: 66% 100%;
        background: lightseagreen;
    }

    .content-item:nth-child(4) {
        transform-origin: 100% 100%;
        background: crimson;
    }

    .content-item .content-wrap {
        transform: scale(0.7);
        opacity: 0;
        transition: all 0.8s 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    }
</style>