
function buildMailBody(prefix, vehicle, engine, project, name, phone, message) {
  return encodeURIComponent(
    prefix + "\n\n" +
    "Nom : " + (name || "") + "\n" +
    "Téléphone : " + (phone || "") + "\n" +
    "Véhicule : " + (vehicle || "") + "\n" +
    "Motorisation : " + (engine || "") + "\n" +
    "Projet : " + (project || "") + "\n" +
    "Demande : " + (message || "") + "\n\n" +
    "Merci."
  );
}
function sendEstimate(event){
  event.preventDefault();
  const vehicle = document.getElementById("q-vehicle")?.value || "";
  const engine = document.getElementById("q-engine")?.value || "";
  const project = document.getElementById("q-project")?.value || "";
  const subject = encodeURIComponent("Demande rapide - Reprog’Auto PERFORMANCES");
  const body = buildMailBody("Bonjour, je souhaite un premier retour sur mon véhicule.", vehicle, engine, project, "", "", "");
  window.location.href = "mailto:reprogautoperformances@gmail.com?subject=" + subject + "&body=" + body;
}
function sendMail(event){
  event.preventDefault();
  const name = document.getElementById("name")?.value || "";
  const phone = document.getElementById("phone")?.value || "";
  const vehicle = document.getElementById("vehicle")?.value || "";
  const message = document.getElementById("message")?.value || "";
  const subject = encodeURIComponent("Demande de devis - Reprog’Auto PERFORMANCES");
  const body = buildMailBody("Bonjour, je souhaite obtenir des informations pour mon véhicule.", vehicle, "", "Demande de devis", name, phone, message);
  window.location.href = "mailto:reprogautoperformances@gmail.com?subject=" + subject + "&body=" + body;
}
