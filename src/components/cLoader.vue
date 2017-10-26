<template>
  <div class="container-loader">
    <span class="loader"><span class="loader-inner"></span></span>    
  </div>
</template>

<script>
export default {

}
</script>

<style>
.container-loader{
  background-color: rgba(255, 255, 255, 0.73);
  width: 100%;
  position: absolute;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loader {
  /* position: absolute; */
  /* left: 44%; */
  /* margin-top: 4rem; */
  /* display: flex; */
  display: inline-block;
  width: 30px;
  height: 30px;
  position: relative;
  border: 4px solid skyblue;
  /* top: 50%; */
  animation: loader 2s infinite ease;
}

.loader-inner {
  vertical-align: top;
  display: inline-block;
  width: 100%;
  background-color: skyblue;
  animation: loader-inner 2s infinite ease-in;
}

@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  
  25% {
    transform: rotate(180deg);
  }
  
  50% {
    transform: rotate(180deg);
  }
  
  75% {
    transform: rotate(360deg);
  }
  
  100% {
    transform: rotate(360deg);
  }
}

@keyframes loader-inner {
  0% {
    height: 0%;
  }
  
  25% {
    height: 0%;
  }
  
  50% {
    height: 100%;
  }
  
  75% {
    height: 100%;
  }
  
  100% {
    height: 0%;
  }
}

</style>
