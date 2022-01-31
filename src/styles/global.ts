import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
        outline:0;
    }
    html {
        font-size:62.5%;/* 1 rem = 10px */
        @media (min-width: 1981px) {
            font-size: 80%;
        }
    }
    body {
        background-color:#CCC;
    }
    section {
        width:100%;
        height:100vh;
        display:flex;
        flex-direction:column;
        justify-content: center;
        align-items:center;
    }
    p {
        font-size:1.5rem;
        &:first-of-type {
            margin-bottom:15px;
        }
    }
    img {
        border-radius:50%;
    }
    button {
        width:100px;
        height:40px;
        border:none;
        border-radius:4px;
        background-color:cornflowerblue;
        cursor:pointer;
        margin-top:10px;
        color:#FFF;
        transition:background-color .2s;
        & + button {
            margin-left:8px;
        }
        &:hover {
            filter:brightness(0.95);
            transform:scale(1.1);
        }
        &:active {
            transform:scale(1);
            filter:brightness(1);
        }
        &:disabled {
            cursor:not-allowed;
            filter:brightness(0.8);
        } 
    }

    .skeleton-container-buttons {
        display:flex;
        gap:5px;
    }
`