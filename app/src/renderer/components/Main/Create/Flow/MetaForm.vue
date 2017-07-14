<template>
    <div>
        <div class="background-style z-depth-1">
            <div class="loader JS_on">
                <span class="binary"></span>
                <span class="binary"></span>
                <span class="getting-there">SETTING UP...</span>
            </div>
            <div class="stage">
                <h3>{Project Name}</span>
                </h3>
                <p>{Project Description}</p>
                <span>{Option 1}, {Option 2}, {Option 3}</span>
            </div>
        </div>
        <div class="content-style container row">
            <form action="#">
                <div class="input-field col s6">
                    <input id="project_name" type="text" class="validate">
                    <label for="project_name">Project Name</label>
                </div>
                <div class="input-field col s3">
                    <select>
                    <option value="1" selected>Single</option>
                    <option value="2">Multiple</option>
                    <option value="3" disabled>NaN</option>
                </select>
                    <label>Disturbition Option</label>
                </div>
                <div class="input-field col s3">
                    <select>
                    <option value="1" selected>Exact Copy</option>
                    <option value="2">Same Parameters</option>
                    <option value="3" disabled>NaN</option>
                </select>
                    <label>Parameter Behavior</label>
                </div>
                <div class="input-field col s12 m6">
                    <textarea id="textarea1" class="materialize-textarea"></textarea>
                    <label for="textarea1">Description</label>
                </div>
                <div class="card-panel col s4 push-s1">
                    <h5>Answer Sheet Option</h5>
                    <div class="switch">
                        <label>
                        Export
                        <input type="checkbox">
                        <span class="lever"></span>
                        Embed
                    </label>
                    </div>
                    <p><i>Embed</i> option embeds answer sheet to the end of the Project. <i>Export</i> option allows you to
                        export answer sheet as a single document.</p>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import {
        default as code
    } from './helpers/MetaHelper.js'
    export default code
</script>

<style scoped>
    .background-style {
        position: absolute;
        top: 0;
        z-index: -1;
        width: 100%;
        height: 60%;
        background-color: #2D4654;
    }

    .content-style {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 35%;
    }

    .stage {
        position: absolute;
        z-index: 2;
        width: 100%;
        bottom: 20%;
        font-size: 40px;
        color: #eceff1;
        font-family: "Lato";
    }

    .stage>p,
    span {
        color: white;
        text-align: center;
        font-size: 20px;
    }

    p {
        font-size: 80%;
        color: gray;
        text-align: center;
        margin-left: 5px;
        margin-right: 5px;
    }

    h5 {
        margin-top: 5px;
    }

    .card-panel>* {
        margin-bottom: 10px;
    }

    .loader {
        width: 130px;
        height: 170px;
        position: absolute;
        top: 40%;
        left: 20px;
    }

    .loader::before,
    .loader::after {
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        bottom: 30px;
        left: 15px;
        z-index: 1;
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        border-bottom: 20px solid #1b2a33;
        -webkit-transform: scale(0);
        transform: scale(0);
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
    }

    .loader::after {
        border-right: 15px solid transparent;
        border-bottom: 20px solid #162229;
    }

    .loader .getting-there {
        width: 120%;
        text-align: center;
        position: absolute;
        bottom: 0;
        left: -7%;
        font-family: "Lato";
        font-size: 12px;
        letter-spacing: 2px;
        color: white;
    }

    .loader .binary {
        width: 100%;
        height: 140px;
        display: block;
        color: white;
        position: absolute;
        top: 0;
        left: 15px;
        z-index: 2;
        overflow: hidden;
    }

    .loader .binary::before,
    .loader .binary::after {
        font-family: "Lato";
        font-size: 24px;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
    }

    .loader .binary:nth-child(1)::before {
        content: "0";
        -webkit-animation: a 1.1s linear infinite;
        animation: a 1.1s linear infinite;
    }

    .loader .binary:nth-child(1)::after {
        content: "0";
        -webkit-animation: b 1.3s linear infinite;
        animation: b 1.3s linear infinite;
    }

    .loader .binary:nth-child(2)::before {
        content: "1";
        -webkit-animation: c 0.9s linear infinite;
        animation: c 0.9s linear infinite;
    }

    .loader .binary:nth-child(2)::after {
        content: "1";
        -webkit-animation: d 0.7s linear infinite;
        animation: d 0.7s linear infinite;
    }

    .loader.JS_on::before,
    .loader.JS_on::after {
        -webkit-transform: scale(1);
        transform: scale(1);
    }

    @-webkit-keyframes a {
        0% {
            -webkit-transform: translate(30px, 0) rotate(30deg);
            transform: translate(30px, 0) rotate(30deg);
            opacity: 0;
        }
        100% {
            -webkit-transform: translate(30px, 150px) rotate(-50deg);
            transform: translate(30px, 150px) rotate(-50deg);
            opacity: 1;
        }
    }

    @keyframes a {
        0% {
            -webkit-transform: translate(30px, 0) rotate(30deg);
            transform: translate(30px, 0) rotate(30deg);
            opacity: 0;
        }
        100% {
            -webkit-transform: translate(30px, 150px) rotate(-50deg);
            transform: translate(30px, 150px) rotate(-50deg);
            opacity: 1;
        }
    }

    @-webkit-keyframes b {
        0% {
            -webkit-transform: translate(50px, 0) rotate(-40deg);
            transform: translate(50px, 0) rotate(-40deg);
            opacity: 0;
        }
        100% {
            -webkit-transform: translate(40px, 150px) rotate(80deg);
            transform: translate(40px, 150px) rotate(80deg);
            opacity: 1;
        }
    }

    @keyframes b {
        0% {
            -webkit-transform: translate(50px, 0) rotate(-40deg);
            transform: translate(50px, 0) rotate(-40deg);
            opacity: 0;
        }
        100% {
            -webkit-transform: translate(40px, 150px) rotate(80deg);
            transform: translate(40px, 150px) rotate(80deg);
            opacity: 1;
        }
    }

    @-webkit-keyframes c {
        0% {
            -webkit-transform: translate(70px, 0) rotate(10deg);
            transform: translate(70px, 0) rotate(10deg);
            opacity: 0;
        }
        100% {
            -webkit-transform: translate(60px, 150px) rotate(70deg);
            transform: translate(60px, 150px) rotate(70deg);
            opacity: 1;
        }
    }

    @keyframes c {
        0% {
            -webkit-transform: translate(70px, 0) rotate(10deg);
            transform: translate(70px, 0) rotate(10deg);
            opacity: 0;
        }
        100% {
            -webkit-transform: translate(60px, 150px) rotate(70deg);
            transform: translate(60px, 150px) rotate(70deg);
            opacity: 1;
        }
    }

    @-webkit-keyframes d {
        0% {
            -webkit-transform: translate(30px, 0) rotate(-50deg);
            transform: translate(30px, 0) rotate(-50deg);
            opacity: 0;
        }
        100% {
            -webkit-transform: translate(45px, 150px) rotate(30deg);
            transform: translate(45px, 150px) rotate(30deg);
            opacity: 1;
        }
    }

    @keyframes d {
        0% {
            -webkit-transform: translate(30px, 0) rotate(-50deg);
            transform: translate(30px, 0) rotate(-50deg);
            opacity: 0;
        }
        100% {
            -webkit-transform: translate(45px, 150px) rotate(30deg);
            transform: translate(45px, 150px) rotate(30deg);
            opacity: 1;
        }
    }
</style>