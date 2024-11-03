function showSection(sectionId) {
    // Alles außer dem Bild und den Schaltflächen verstecken
    document.getElementById("intro-text").style.display = "none";
    document.getElementById("about-me-centered").style.display = "none";
    document.getElementById("contact-info").style.display = "none";
    document.getElementById("portfolio").style.display = "none";

    // Zeige oder verstecke die Bilder basierend auf dem Bereich
    const supportImage = document.getElementById("support-image");
    const lösungImage = document.getElementById("lösung-image");

    if (sectionId === "about-me-centered") {
        supportImage.style.display = "block"; // Support-Bild anzeigen
        lösungImage.style.display = "block"; // Lösung-Bild anzeigen
    } else {
        supportImage.style.display = "none"; // Support-Bild ausblenden
        lösungImage.style.display = "none"; // Lösung-Bild ausblenden
    }

    // Zeige den gewünschten Abschnitt an
    document.getElementById(sectionId).style.display = "block";
}
