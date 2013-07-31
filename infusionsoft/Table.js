var typedef = require('typedef');
var _       = require('underscore');

module.exports = Table = typedef

// Base class for an infusionsoft table. 'field' decoration indicates a field
// value scraped from the API docs
.class('Table') .define({

    __ondefine__: function(C, hash)
    {
        var FIELDS = [];
        _(C.__signature__).each(function(info, key) {
            if (info.decorations.FIELD)
                FIELDS.push(key);
        });

        if (FIELDS.length)
            C.FIELDS = FIELDS;
    }

});