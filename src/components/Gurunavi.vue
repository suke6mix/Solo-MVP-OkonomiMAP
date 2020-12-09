<template>
  <div>
    <div>
      <h2>Let's Grab Okonomi-yaki<br></h2>
      <input type="text" id="freeWord" v-model="freeWord" placeholder="フリーワード/Free Word"><br>
      <select name="okonomi-style" v-model="style" size="1">
        <option selected disabled hidden style='display: none' value=''>Choose Style</option>
        <option value="広島,お好み焼き">広島風/Hiroshima</option>
        <option value="大阪,お好み焼き">関西風/Osaka</option>
      </select><br>
      <p>
        <button @click="onClick" class="findShop">Find</button>
      </p>

    </div>
      <div v-for="data in shopData" :key="data.id">
        <div class="main">
          <div class="top">
            <div class="image">
              <a :href="data.url" target="_blank">
                <img :src=data.image_url.shop_image1 alt="shop image">
              </a>
              <h5>🍺Click on the image for details🍺</h5>
            </div>
            <div class="comment-area">
              <h3>{{data.name}}</h3>
              <h5>{{data.opentime}}</h5>
              <h5>{{data.access.line}} {{data.access.station}} {{data.access.station_exit}} {{data.access.walk}}分</h5>
            </div>
          </div>
        </div>
      </div>
      <a href="https://api.gnavi.co.jp/api/scope/" target="_blank">
      <img class="credit" src="https://api.gnavi.co.jp/api/img/credit/api_265_65.gif" width="265" height="65" border="0" alt="グルメ情報検索サイト ぐるなび">
      </a>
  </div>
</template>

<script>
import axios from "axios";
//require("dotenv").config();


export default {
  data: () => ({
    baseUrl: "https://api.gnavi.co.jp/RestSearchAPI/v3/?",
    id: "dd0e51ba1c6b79b2480b3b4a4e2e7aeb",
    //id: process.env.VUE_APP_APIKEY_gurunavi,
    pref: "PREF13", // 東京都でフィルター
    category: "RSFST07001", //お好み焼きでフィルター
    style: "", // 広島 or 大阪
    freeWord:"", // 入力文字列を取得
    hitPerPage: "10",
    shopData: []
  }),
  methods: {
    onClick: async function findShop() {
      let url = this.baseUrl 
              + "keyid=" + this.id 
              + "&pref=" + this.pref 
              + "&category_s=" + this.category 
              + "&freeword=" + this.style 
              + "&freeword=" + this.freeWord
              + "&hit_per_page=" + this.hitPerPage;
      await axios.get(url)
        .then((res) => {
          this.shopData = res.data.rest;
        })
        .catch((error) => {
          console.log(error);
          alert("検索できませんでした");
        });
    },
  },
}
</script>

<style scoped>
  * {
    text-align: center;
  }
  .findShop {
    position: relative;
    display: inline-block;
    padding:0.25em 0.5em;
    text-decoration: none;
    color:white;
    background: #fd9535;
    border-radius: 4px;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    box-shadow: inset 0 2px 0 rgba(255,255,255,0.2),inset 0 -2px 0 rgba(0,0,0,0.05);
    -moz-box-shadow: inset 0 2px 0 rgba(255,255,255,0.2),inset 0 -2px 0 rgba(0,0,0,0.05);
    -webkit-box-shadow: inset 0 2px 0 rgba(255,255,255,0.2),inset 0 -2px 0 rgba(0,0,0,0.05);
    font-weight:bold;
    border: solid 2px #d27d00;
  }
  .findShop:active {
    box-shadow: 0 0 2px rgba(0,0,0,0.30);
    -moz-box-shadow: 0 0 2px rgba(0,0,0,0.30);
    -webkit-box-shadow: 0 0 2px rgba(0,0,0,0.30);
  }
  .main {
    background: #fff;
    width:90vw;
    margin: auto;
    border: 0.5px solid #2c3e50;
  }
  .top {
    padding: 10px;
    overflow: hidden;
  }
  .image {
    margin-top: 10px;
  }

  .image :hover {
    cursor: pointer;
  }
  .comment-area {
    width: 100%;
  }
  input[type="text"] {
    width:30%;
    padding:5px;
    border: .5px solid #2c3e50;
  }
  .credit {
    margin-top: 20px;
  }
</style>