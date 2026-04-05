(function () {
    var components = [
        { id: 'mw-panel', file: 'components/panel.html' },
        { id: 'mw-head',  file: 'components/head.html'  },
        { id: 'footer',   file: 'components/footer.html' },
    ];

    Promise.all(components.map(function (c) {
        return fetch(c.file)
            .then(function (r) { return r.text(); })
            .then(function (html) {
                var el = document.getElementById(c.id);
                if (el) el.innerHTML = html;
            });
    })).then(function () {

        // Wire sidebar overlay close
        var overlay = document.getElementById('sidebar-overlay');
        if (overlay) {
            overlay.onclick = function () {
                if (typeof closeSidebar === 'function') closeSidebar();
            };
        }

        // Re-bind sidebar close on panel link click
        document.querySelectorAll('#mw-panel a').forEach(function (link) {
            link.addEventListener('click', function () {
                if (typeof closeSidebar === 'function') closeSidebar();
            });
        });

        // Mark active namespace tab by matching href to current filename
        var current = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('#p-namespaces li').forEach(function (li) {
            var a = li.querySelector('a[href]');
            if (!a) return;
            var hrefFile = a.getAttribute('href').split('#')[0].split('/').pop();
            if (hrefFile && hrefFile === current) {
                li.classList.add('selected');
            }
        });

        // Inject last-edited date from body[data-last-edited]
        var date = document.body.dataset.lastEdited;
        var slot = document.getElementById('footer-last-edited');
        if (slot && date) {
            slot.textContent = 'This page was last edited on ' + date + '.';
            slot.style.display = '';
        }

        // Re-apply i18n if loaded
        if (typeof applyTranslations === 'function' && typeof currentLang !== 'undefined') {
            applyTranslations(currentLang);
        }
    });
})();
