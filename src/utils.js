export default {
    toJSON( obj ) {
        const res = {};
        obj.forEach( (val, key) => {
            res[ key ] = val;
        });
        return res;
    },

    store( key, val ) {
        localStorage.setItem( key, val );
    },

    remove( key ) {
        localStorage.removeItem( key );
    },

    get( key ) {
        return localStorage.getItem( key );
    },

    splice( arr, item ) {
        const index = arr.indexOf( item );
        if( index === -1 ) return;
        arr.splice( index, 1 );
    }
}
