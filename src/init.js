import AHeader from "./components/AHeader";
import ASlider from "./components/ASlider";
import APost from "./components/APost";
import APostList from "./components/APostList";
import ACrumb from "./components/ACrumb";
import AInfo from "./components/AInfo";
import AComment from "./components/AComment";

export default (Vue) => {
    Vue.component( "a-header", AHeader );
    Vue.component( "a-slider", ASlider );
    Vue.component( "a-post", APost );
    Vue.component( "a-post-list", APostList );
    Vue.component( "a-crumb", ACrumb );
    Vue.component( "a-info", AInfo );
    Vue.component( "a-comment", AComment );
};