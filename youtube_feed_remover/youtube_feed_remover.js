// ==UserScript==
// @name         YouTube Feed, Shorts Full Blocker
// @match        https://*.youtube.com/*
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    function removeElements() {
        document.querySelectorAll('ytm-pivot-bar-item-renderer div.pivot-bar-item-tab.pivot-shorts').forEach(el => {
            const parent = el.closest('ytm-pivot-bar-item-renderer');
            if (parent) parent.remove();
        });

        document.querySelectorAll('div.reel-shelf-header').forEach(el => el.remove());
        document.querySelectorAll('div.reel-shelf-items').forEach(el => el.remove());

        document.querySelectorAll('div.ytGridShelfViewModelGridShelfRow, div.rich-section-content').forEach(el => el.remove());
    }

    function blockShortsPage() {
        if (window.location.pathname.startsWith('/shorts/')) {
            document.documentElement.innerHTML = '';

            window.location.replace('https://m.youtube.com');
        }
    }

    const shortsVisualRemover = new MutationObserver(removeElements);
    shortsVisualRemover.observe(document.body, { childList: true, subtree: true });

    const shortsVideoRemover = new MutationObserver(blockShortsPage);
    shortsVideoRemover.observe(document.body, { childList: true, subtree: true });


    removeElements();
    blockShortsPage();
})();