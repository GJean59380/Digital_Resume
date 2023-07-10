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
    document.getElementById('log').innerHTML = '<h2>Bienvenue sur le CV de Guillaume Jean </h2><ul><h4>Contexte de ce CV</h4><li>Projet réalisé en une journée de piscine</li><br><li>Interdiction d\'utiliser des frameworks</li><br><li>Obligation d\'utiliser du HTML, CSS et du JS</li>';
}

function venusContent() {
    var test = ""
    document.getElementById('log').innerHTML = '<h3>Bonjour, je m\' appelle Guillaume.</h3> <ul><li>J\'ai 22 ans</li><br>   <li>Je suis le cursus MSC-Pro à Epitech Lille en spécialité développement logiciel   </li><br>  <li>Je suis passionné par l\'astronomie et les nouvelles technologies</li><br>  <li>J\'aime jouer aux jeux vidéo, pratiquer ou regarder du sport (Foot, Basket...)</li><br> <li>Mon domaine favori en information est le développement d\'intélligence artificielle c\'est d\'ailleur dans cette branche que je souhaite particulièrement m\'investir.</li><br> <li>Enfin, je suis titulaire du permis B ainsi que véhiculé.</li></ul>';
}

function earthContent() {
    document.getElementById('log').innerHTML = '<h3>Mon parcours scolaire : </h3><ul><li>09/2022 - 07/2025 : Cursus MSC Epitech</li><br><li>09/2020 - 07/2022 : BTS Systèmes Numérique Informatique et Réseaux - Charles de Foucauld à Nancy</li><br><li>09/2019 - 02/2020 : Licence langues étrangères appliquées : Anglais, Espagnol - Université du littoral à Dunkerque</li><br><li>2019 : Baccalauréat série scientifique - Lycée de l\'Europe à Dunkerque</li></ul>';
}

function marsContent() {
    document.getElementById('log').innerHTML = '<div class="Split"><h3 style="margin: 0; padding : 0;">Mes compétences :</h3><ul class="dual" style="font-size:70%;"><h4>Langages de développement :</h4><li>C++ (Niveau avancé)</li><li>HTML (Niveau avancé)</li><li>CSS (Niveau avancé)</li><li>SQL (Niveau avancé)</li><li>PHP (Niveau avancé)</li><li>JavaScript (Niveau intermédiaire)</li><li>Java (Niveau avancé)</li><li>Python (Niveau avancé)</li><li>C# (Niveau avancé)</li></ul><ul class="dual" style="font-size:70%;"><h4>Technos familières :</h4><br><li>SpringBoot</li><li>Symfony</li><li>NodeJS</li><li>.NET<li>React</li><li>MySQL</li><li>PostGreSQL</li><li>MongoDB</li><li>Kotlin</li><li>Flutter</li><li>Ansible</li><li>Docker</li></ul><ul class="dual" style="font-size:70%;"><h4>Langues :</h4><li>Anglais (Niveau B2)</li><li>Espagnol (Niveau A2)</li></ul></div>';
}

function jupiterContent() {
    document.getElementById('log').innerHTML = '<h3>Mes expériences professionnelles :</h3><ul><li>09/01/2023 - Aujourd\'hui : Développeur Alternant à Anatox <br> Paris - Développement de logiciel (Python)</li><br><li>07/2022 - 08/2022 : Assistant Administratif à Partenord Habitat <br> Villeneuve D\'Ascq - Archivage et aide aux employés</li><br><li>07/2021 - 08/2021 : Facteur polyvalent <br> Wormhout - Organisation de tournée et livraisons de courriers et de lettres</li><br><li>05/2021 - 06/2021 : Stage à Domiform\'<br>Biernes - Développement de site web en autonomie</li></ul>';
}

function saturneContent() {
    document.getElementById('log').innerHTML = '<h3>Mes projets :</h3><ul><li>21/05/2023 : Projet E-commerce Symfony</li><br><li>13/03/2023 : Projet Redditech (Mobile app React + NodeJS)</li><br><li>03/02/2023 : Projet IRC (MERN)</li><br><li>11/13/2022 : Projet Dashboard en SpringBoot</li><br><li>09/2022 : CV en format HTML</li><br><li>01/2022 - 05/2022 : Projet barrière laser en partenariat avec le Cerema Est</li><br><li>06/2021 : Site web de <a style="color : rgb(32, 155, 226);" href="https://www.domiform.fr/">Domiform\'</a> durant mon stage</li></ul>';
}

function uranusContent() {
    document.getElementById('log').innerHTML = '<h3>Mes liens :</h3><ul><li><a style="color : rgb(32, 155, 226);" href="www.linkedin.com/in/guillaume-jean-13a01a1b4">LinkedIn</a></li><br><li><a style="color : rgb(32, 155, 226);" href="https://github.com/GJean59380">GitHub</a></li></ul>';
    
}

function neptuneContent() {
    document.getElementById('log').innerHTML = '<h3>Contactez-moi :</h3><p>Par téléphone : <a href="tel+330688506436">0688506436</a><br><br>Par mail : <a href="mailto:guillaume.59.jean@gmail.com">guillaume.59.jean@gmail.com</a><br><br>Ou par courrier à l\'adresse : 7 Avenue Denis Cordonnier (Appartement 3), <br>Lille, 59000 </p>';
}