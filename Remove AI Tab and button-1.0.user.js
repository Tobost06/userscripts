// ==UserScript==
// @name         Remove AI Tab and button
// @version      1.0
// @description  Removes the AI-tab and button from the Crowdin editor UI
// @author       Tobost06
// @match        https://crowdin.com/editor/*
// ==/UserScript==

(function() {
    'use strict';

    function removeAiTabSection() {
        var sectionElement = document.getElementById("ai-tab-section");
        if (sectionElement) {
            sectionElement.remove();
            console.log('AI Tab Section er fjernet fra siden');
        }
    }

    function removeAiTab() {
        var tabElement = document.getElementById("ai-tab");
        if (tabElement) {
            tabElement.remove();
            console.log('AI Tab er fjernet fra siden');
        }
    }

    function showDiscussionsTab() {
        var discussionsTab = document.getElementById("discussions_tab");
        if (discussionsTab) {
            discussionsTab.classList.add("active", "in");
            discussionsTab.style.display = "block";
            console.log('Diskusjonspanelet er aktivert og synlig');
        } else {
            console.log('Diskusjonspanelet ble ikke funnet');
        }
    }

    removeAiTabSection();
    removeAiTab();
    showDiscussionsTab();

    const observer = new MutationObserver((mutations) => {
        removeAiTabSection();s
        removeAiTab();
        showDiscussionsTab();
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();
