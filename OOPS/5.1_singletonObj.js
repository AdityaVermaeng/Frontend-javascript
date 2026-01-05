// singleton object using function(closur)
const Appsettings = (function() {
    let instance;

    function createInstance() {
        return {
            darkMode: false,
            language: "en"
        };
    }
    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();

            }
            return instance;
        }
    };
})();
//usage
const setting1 = Appsettings.getInstance();
const setting2 = Appsettings.getInstance();
console.log(setting1 === setting2);