(function () {
    var tabs = [
        { id: 'aba1', file: 'sections/roblox.html' },
        { id: 'aba2', file: 'sections/godot.html' },
        { id: 'aba4', file: 'sections/unreal.html' },
        { id: 'aba3', file: 'sections/github.html' },
    ];

    Promise.all(tabs.map(function (tab) {
        return fetch(tab.file)
            .then(function (res) { return res.text(); })
            .then(function (html) {
                var el = document.getElementById(tab.id);
                if (el) el.innerHTML = html;
            });
    })).then(function () {
        if (typeof applyTranslations === 'function' && typeof currentLang !== 'undefined') {
            applyTranslations(currentLang);
        }
    });
})();
