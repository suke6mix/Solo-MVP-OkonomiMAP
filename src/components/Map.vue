<template>
    <div class="map">
        <GmapMap
            :center="{lat:35.6603835, lng:139.7292068}"
            :zoom="15"
            map-type-id="terrain"
            style="
                width:100%;
                max-width: 600px;
                margin: 0 auto;
                height: 300px;
            "
            :options="{
                mapTypeControl: false,
                streetViewControl: false,

            }"
        ></GmapMap>
    </div>
</template>

<script>
import { gmapApi } from "vue2-google-maps";


export default {
    data: () => {
        position: navigator.geolocation.getCurrentPosition(getCurrentLocation);
        lat: position.coords.latitude; // 緯度
        lng: position.coords.longitude; // 経度

    },
    computed: {
        google: gmapApi
    },
    mounted() {
        this.getCurrentLocation();
    },
    methods: {
        getCurrentLocation(position) {
            let latLng = new google.maps.LatLng(lat, lng);
            var marker = new google.maps.Marker({ // 現在地の位置設定とアイコンのカスタマイズ
                position: latLng,
                map: map,
                icon: {
                }
            });
            map.setCenter(latLng); // 地図の中央に現在地を表示する
        }
    }
    
}
</script>

<style scoped>

</style>