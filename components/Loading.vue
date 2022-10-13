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
  
  <style lang="scss" scoped>
  .loading{
      z-index: 200;
      background: rgba(0,0,0,0.6);
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
  border-top-color: #fff;
  border-bottom-color: #fff;
  border-radius: 50%;
  animation: spin ease 1s infinite;
  }
  }
  </style>