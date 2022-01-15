export default function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./sw.js", { scope: "." })
      .then(
        (registration) => {
          console.log("Worker registration successful", registration.scope);
        },
        (err) => console.log("Worker registration failed", err)
      )
      .catch((err) => console.log(err));
  } else {
    console.log("Service Worker is not supported by browser.");
  }
}
