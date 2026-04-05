(function () {
    var MARK_CLASS = 'search-highlight';
    var CURRENT_CLASS = 'search-current';
    var marks = [];
    var currentIndex = -1;

    function escapeRegex(s) {
        return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    function clearHighlights() {
        document.querySelectorAll('mark.' + MARK_CLASS).forEach(function (mark) {
            mark.parentNode.replaceChild(document.createTextNode(mark.textContent), mark);
        });
        var content = document.getElementById('content');
        if (content) content.normalize();
        marks = [];
        currentIndex = -1;
    }

    function highlightText(query) {
        var regex = new RegExp('(' + escapeRegex(query) + ')', 'gi');
        var content = document.getElementById('content');
        var walker = document.createTreeWalker(content, NodeFilter.SHOW_TEXT, null);
        var nodes = [];
        var node;
        while ((node = walker.nextNode())) {
            var tag = node.parentNode.tagName;
            if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'MARK') continue;
            regex.lastIndex = 0;
            if (regex.test(node.nodeValue)) nodes.push(node);
        }
        nodes.forEach(function (textNode) {
            regex.lastIndex = 0;
            var parts = textNode.nodeValue.split(regex);
            if (parts.length <= 1) return;
            var frag = document.createDocumentFragment();
            parts.forEach(function (part, i) {
                if (i % 2 === 1) {
                    var mark = document.createElement('mark');
                    mark.className = MARK_CLASS;
                    mark.textContent = part;
                    frag.appendChild(mark);
                } else {
                    frag.appendChild(document.createTextNode(part));
                }
            });
            textNode.parentNode.replaceChild(frag, textNode);
        });
        marks = Array.from(document.querySelectorAll('mark.' + MARK_CLASS));
        return marks.length;
    }

    function goTo(index) {
        if (marks.length === 0) return;
        if (currentIndex >= 0 && marks[currentIndex]) {
            marks[currentIndex].classList.remove(CURRENT_CLASS);
        }
        currentIndex = ((index % marks.length) + marks.length) % marks.length;
        marks[currentIndex].classList.add(CURRENT_CLASS);
        marks[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
        updateFloatBar();
    }

    function updateFloatBar() {
        var bar = document.getElementById('search-float-bar');
        if (!bar) return;
        var input = document.getElementById('searchInput');
        var query = (input.value || '').trim();
        if (!query) { bar.style.display = 'none'; return; }
        bar.style.display = 'flex';
        var counter = bar.querySelector('.search-counter');
        if (marks.length === 0) {
            counter.textContent = 'Sem resultados';
        } else {
            counter.textContent = (currentIndex + 1) + ' / ' + marks.length;
        }
    }

    function updateNavButtons(count) {
        var nav = document.getElementById('search-nav-buttons');
        if (nav) nav.style.display = count > 0 ? 'flex' : 'none';
    }

    function doSearch() {
        var input = document.getElementById('searchInput');
        var query = (input.value || '').trim();
        clearHighlights();
        if (!query) {
            updateNavButtons(0);
            var bar = document.getElementById('search-float-bar');
            if (bar) bar.style.display = 'none';
            return;
        }
        var count = highlightText(query);
        updateNavButtons(count);
        if (count > 0) {
            goTo(0);
        } else {
            updateFloatBar();
        }
    }

    function nextResult() { goTo(currentIndex + 1); }
    function prevResult() { goTo(currentIndex - 1); }

    function closeSearch() {
        var input = document.getElementById('searchInput');
        input.value = '';
        clearHighlights();
        updateNavButtons(0);
        var bar = document.getElementById('search-float-bar');
        if (bar) bar.style.display = 'none';
    }

    window.doSearch = doSearch;
    window.nextResult = nextResult;
    window.prevResult = prevResult;
    window.closeSearch = closeSearch;

    document.addEventListener('DOMContentLoaded', function () {
        // Floating result bar
        var bar = document.createElement('div');
        bar.id = 'search-float-bar';
        bar.innerHTML =
            '<span class="search-counter"></span>' +
            '<button type="button" onclick="prevResult()" title="Anterior (Shift+Enter)">&#8593;</button>' +
            '<button type="button" onclick="nextResult()" title="Próximo (Enter)">&#8595;</button>' +
            '<button type="button" class="search-close" onclick="closeSearch()" title="Fechar (Esc)">&#10005;</button>';
        document.body.appendChild(bar);

        var input = document.getElementById('searchInput');
        if (!input) return;

        var timer;
        input.addEventListener('input', function () {
            clearTimeout(timer);
            timer = setTimeout(doSearch, 200);
        });

        input.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                if (marks.length === 0) { doSearch(); return; }
                if (e.shiftKey) prevResult(); else nextResult();
            }
            if (e.key === 'Escape') closeSearch();
        });
    });
})();
