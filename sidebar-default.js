// Comprime la barra laterale a ogni caricamento
try {
  localStorage.setItem("dockedSidebar", JSON.stringify("auto"));
} catch (e) {
  console.warn("sidebar-default: localStorage unavailable", e);
}
