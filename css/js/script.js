function calculer() {
    const distance = document.getElementById('distance').value;
    const conso = document.getElementById('consommation').value;
    const prix = 1.85; // Prix SP95
    
    if (!distance || !conso) {
        alert("Veuillez remplir tous les champs");
        return;
    }

    const cout = (distance * conso * prix) / 100;
    document.getElementById('resultat').innerHTML = `
        Coût total : <strong>${cout.toFixed(2)}€</strong>
    `;
}
