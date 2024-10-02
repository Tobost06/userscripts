// ==UserScript==
// @name         Remove AI Tab and button
// @version      1.0
// @description  Removes the AI-tab and button from the Crowdin editor UI
// @author       Tobost06
// @match        https://crowdin.com/editor/*
// ==/UserScript==

(function() {
    'use strict';

    // Funksjon for å fjerne elementet med id="ai-tab-section"
    function removeAiTabSection() {
        var sectionElement = document.getElementById("ai-tab-section");
        if (sectionElement) {
            sectionElement.remove();
            console.log('AI Tab Section er fjernet fra siden');
        }
    }

    // Funksjon for å fjerne elementet med id="ai-tab"
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
            // Sørg for at den har de nødvendige klassene og stilen
            discussionsTab.classList.add("active", "in");
            discussionsTab.style.display = "block"; // Sørg for at panelet vises
            console.log('Diskusjonspanelet er aktivert og synlig');
        } else {
            console.log('Diskusjonspanelet ble ikke funnet');
        }
    }

    // Kjør fjerningen med en gang ved innlasting
    removeAiTabSection();
    removeAiTab();
    showDiscussionsTab();

    // Bruk MutationObserver til å overvåke endringer i DOM
    const observer = new MutationObserver((mutations) => {
        removeAiTabSection(); // Prøv å fjerne ai-tab-seksjonen hver gang DOM endres
        removeAiTab(); // Prøv å fjerne ai-tab-panelet hver gang DOM endres
        showDiscussionsTab(); // Sørger for at diskusjonspanelet vises om det lastes inn dynamisk
    });

    // Start observeren på hele dokumentet
    observer.observe(document.body, { childList: true, subtree: true });
})();
