// ==UserScript==
// @name         VK Feed, Icons and Video Button Remover
// @match        https://*.vk.com/*
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    function removeElements() {
        document.querySelectorAll('div.feed_wrap').forEach(el => el.remove());

        document.querySelectorAll('div.upanel').forEach(el => el.remove());

        document.querySelectorAll('div.convo__avatar').forEach(el => el.remove());

        document.querySelectorAll('div.MailAvatar').forEach(el => el.remove());

        document.querySelectorAll('div.ConvoListItem__avatar').forEach(el => el.remove());

        document.querySelectorAll('div.BottomMenuItem a#video').forEach(el => {
            const menuItem = el.closest('.BottomMenuItem');
            if (menuItem) menuItem.remove();
        });
    }

    const observer = new MutationObserver(removeElements);

    observer.observe(document.body, { childList: true, subtree: true });

    removeElements();
})();