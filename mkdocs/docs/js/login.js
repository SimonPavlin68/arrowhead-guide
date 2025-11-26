(function() {
    let user = localStorage.getItem("arrowheadUser");

    // Če še ni uporabnika, pokažemo prompt
    if (!user) {
        user = prompt("Vnesi svoje ime (za statistiko):");
        if (user) {
            localStorage.setItem("arrowheadUser", user);
        }
    }

    // Patchamo fetch, da doda header X-User
    const origFetch = window.fetch;
    window.fetch = function(url, options = {}) {
        options.headers = options.headers || {};
        const name = localStorage.getItem("arrowheadUser") || "Unknown";
        options.headers["X-User"] = name;
        return origFetch(url, options);
    };
})();

