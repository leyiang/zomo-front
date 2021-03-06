import axios from "axios";
import AHeader from "./components/AHeader";
import ASlider from "./components/ASlider";
import APost from "./components/APost";
import APostList from "./components/APostList";
import ACrumb from "./components/ACrumb";
import AInfo from "./components/AInfo";
import AComment from "./components/AComment";
import AFooter from "./components/AFooter";
import AModal from "./components/AModal";
import AnAlert from "./components/AnAlert";
import AHeart from "./components/AHeart";
import InstallAlert from "./components/Alert";
import event from "./event";
import utils from "./utils";

export default (Vue) => {
    Vue.component( "a-header", AHeader );
    Vue.component( "a-slider", ASlider );
    Vue.component( "a-post", APost );
    Vue.component( "a-post-list", APostList );
    Vue.component( "a-crumb", ACrumb );
    Vue.component( "a-info", AInfo );
    Vue.component( "a-comment", AComment );
    Vue.component( "a-footer", AFooter );
    Vue.component( "a-modal", AModal );
    Vue.component( "a-alert", AnAlert );
    Vue.component( "a-heart", AHeart );

    InstallAlert( Vue );

    const base = Vue.prototype.api_base = "http://localhost/blog/api/wp-json";

    const api = Vue.prototype.api = axios.create({
        baseURL: base + "/wp/v2/"
    });

    api.interceptors.request.use( config => {
        const token = utils.get("token") || null;
        if( token ) config.headers.Authorization = "Bearer " + token;
        return config;
    });

    api.interceptors.response.use( res => {
        return res;
    }, err => {

        const message = err?.response?.data?.message;

        console.error( err );

        if( message && err.response.status !== 401 ) {
            event.$emit("fails", message );
        }

        return Promise.reject( err );
    })
};