<template>
  <div id="app">
    <img class="topimage" alt="Okonomiyaki" src="../public/okonomiyaki.png">
    <!--div>
      <Map></Map>
    </div-->
    <div>
      <Gurunavi></Gurunavi>
    </div>
  </div>
</template>

<script>
//import Map from "./components/Map"
import Gurunavi from "./components/Gurunavi"
import axios from "axios";

export default {
  name: 'App',
  components: {
    //Map,
    Gurunavi,
  },
  mounted() {
    axios.get("/api").then((res) => {
      console.log(res.data);
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.topimage {
  width: 25vw;
  height: auto;
}

</style>
