export default {
    toJSON( obj ) {
        const res = {};
        obj.forEach( (val, key) => {
            res[ key ] = val;
        });
        return res;
    }
}