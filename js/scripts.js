function toggleMenu(){
    var element = document.getElementById('left-menu');
    element.classList.toggle("active");
}

function toggleMenuResponsive(){
    var element = document.getElementById('left-menu-responsive');
    element.classList.toggle("active");
}


window.onload = function () {
    mercureContent();
}

function mercureContent() {
    document.getElementById('log').innerHTML = '<h2>Bienvenue à bord de la fusée <br>Curriculum I </h2><ul><h4>Tableau de bord :</h4><li>La température est de 0 kelvin</li><br><li>La terre se trouve à 1 UA du soleil</li><br><li>Nous voyageons à une vitesse de 17km/s</li><br><li>Et nous subissons les radiations du soleil.</li><h4>Je suis Guillaume et je serai votre pilote pour toute la durée de votre voyage.</h4></ul>';
}

function venusContent() {
    var test = ""
    document.getElementById('log').innerHTML = '<h3>Bonjour, Je m\' appelle Guillaume.</h3><p>J\'ai 21 ans.<br> Je suis étudiant à Epitech Lille.<br>Je suis passionné d\'astronomie et de nouvelles technologies.<br>J\'aime aussi les jeux vidéo ou encore le sport en particulier le basket.<br>Le domaine qui me passionne le plus en IT est l\'intéligence artificielle et c\'est pour ça que j\'aimerai en faire mon métier.<br><br>Je suis également titulaire du permis B de plus, je suis véhiculé.';
}

function earthContent() {
    document.getElementById('log').innerHTML = '<h3>Mon parcours scolaire : </h3><ul><li>09/2022 - 07/2025 : Cursus MSC Epitech</li><br><li>09/2020 - 07/2022 : BTS Systèmes Numérique Informatique et Réseaux - Charles de Foucauld à Nancy</li><br><li>09/2019 - 02/2020 : Licence langues étrangères appliquées : Anglais, Espagnol - Université du littoral à Dunkerque</li><br><li>2019 : Baccalauréat série scientifique - Lycée de l\'Europe à Dunkerque</li></ul>';
}

function marsContent() {
    document.getElementById('log').innerHTML = '<div class="Split"><h3>Mes compétences :</h3><ul class="dual"><h4>Langages de développement :</h4><li>C++ (Niveau avancé)</li><li>HTML (Niveau avancé)</li><li>CSS (Niveau avancé)</li><li>SQL (Niveau avancé)</li><li>PHP (Niveau avancé)</li><li>JavaScript (Niveau débutant)</li><li>Java (Niveau débutant)</li></ul><ul class="dual"><h4>Langues :</h4><li>Anglais (Niveau B2)</li><li>Espagnol (Niveau A2)</li></ul></div>';
}

function jupiterContent() {
    document.getElementById('log').innerHTML = '<h3>Mes expériences professionnelles :</h3><ul><li>07/2022 - 08/2022 : Assistant Administratif à Partenord Habitat <br> Villeneuve D\'Ascq - Archivage et aide aux employés</li><br><li>07/2021 - 08/2021 : Facteur polyvalent <br> Wormhout - Organisation de tournée et livraisons de courriers et de lettres</li><br><li>05/2021 - 06/2021 : Stage à Domiform\'<br>Biernes - Développement de site web en autonomie</li></ul>';
}

function saturneContent() {
    document.getElementById('log').innerHTML = '<h3>Mes projets :</h3><ul><li>09/2022 : CV en format HTML</li><br><li>01/2022 - 05/2022 : Projet barrière laser en partenariat avec le Cerema Est</li><br><li>06/2021 : Site web de <a href="https://www.domiform.fr/">Domiform\'</a> durant mon stage</li></ul>';
}

function uranusContent() {
    document.getElementById('log').innerHTML = '<h3>Mes liens :</h3><ul><li><a href="www.linkedin.com/in/guillaume-jean-13a01a1b4">LinkedIn</a></li><br><li><a href="https://github.com/GJean59380">GitHub</a></li></ul>';
}

function neptuneContent() {
    document.getElementById('log').innerHTML = '<h3>Contactez-moi :</h3><p>Par téléphone : <a href="tel+330688506436">0688506436</a><br><br>Par mail : <a href="mailto:guillaume.59.jean@gmail.com">guillaume.59.jean@gmail.com</a><br><br>Ou par courrier à l\'adresse : 165 rue du moulin, <br>Bissezeele, 59380 </p>';
}
