// ==UserScript==
// @name         Yandex Eats & Delivery club remover
// @match        https://*.eda.yandex.ru/*
// @match        https://*.yandex.ru/*
// @match        https://*.yandex.com/*
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    const exactMatches = [
        'https://eda.yandex.ru/',
        'https://eats.yandex.com/',
        'https://market-delivery.yandex.ru/',
    ];


    const matches = exactMatches.some((url) => window.location.href.startsWith(url));
    
    if (matches) {
        function blockShortsPage() {
            window.location.replace('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
        }

        const observer = new MutationObserver(blockShortsPage);
        observer.observe(document.body, { childList: true, subtree: true });
        blockShortsPage();
    }
})();