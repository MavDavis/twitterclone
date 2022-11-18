<template>
    <div class="loading top-0 l-0 w-full h-full fixed flex items-center justify-center">
      <span></span>
    </div>
  </template>
  
  <script>
  export default {
  name:'Loading'
  }
  </script>
  
  <style scoped>
  .loading{
      z-index: 200;
      display: flex;
      width:100%;
      min-height:100vh;
      height:100%;
      position:relative;
      justify-content: center;
      align-items: center;
}
@keyframes spin{
    to{
        transform: rotateZ(360deg);
    }
}
span{
    display: block;
    width: 60px;
    height:60px;
margin: 0 auto;
border:3px solid transparent;
border-top-color: #1D9BF0;
border-bottom-color: #1D9BF0;
border-radius: 50%;
animation: spin ease 1s infinite;
}
  </style>