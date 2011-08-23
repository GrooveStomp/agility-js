var GrooveStomp = function() {
    return {
        css: function(obj) {
            var type = typeof(obj);
            if (type === "object") {
                var styles = [];
                for (var key in obj) {
                    var properties = [];
                    for (var prop in obj[key]) {
                        properties.push(prop + ':' + obj[key][prop] + ';');
                    }
                    properties = properties.join(' ');
                    styles.push(key + ' {' + properties + '}');
                }
                return styles.join(' ');
            }
            else {
                return '';
            }
        }
    };
}();
