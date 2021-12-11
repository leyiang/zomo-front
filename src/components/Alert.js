import AnAlert from "./AnAlert";
import event from "../event";

export default ( Vue ) => {
    const Alert = Vue.extend( AnAlert );

    const alert = ( message, success=true, onclose=null, container=document.body) => {
        const instance = new Alert({
            propsData: { message, success, onclose }
        }).$mount();

        container.appendChild( instance.$el );
    };

    Vue.prototype.message = {
        success( msg, onclose ) {
            alert( msg, true, onclose );
        },

        fails( msg, onclose ) {
            alert( msg, false, onclose );
        }
    }

    event.$on("fails", msg => {
        alert( msg, false );
    });
};