export default function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/sw.js", { scope: "." })
      .then((reg) => {
        console.log(reg, ` <--- sw ----`);
      })
      .catch((e) => console.log("Service Worker registration failed: ", e));
  }
}
