const butInstall = document.getElementById("buttonInstall");

//* Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  //* Prevent the default installation prompt
  event.preventDefault();

  //* Save the event to use it later when the user clicks the custom install button
  deferredPrompt = event;

  //* Show your custom install button here, e.g., make it visible:
  butInstall.style.display = "block";
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  //* Check if the deferred prompt is available
  if (deferredPrompt) {
    //* Show the installation prompt to the user
    deferredPrompt.prompt();

    //* Wait for the user to respond to the prompt
    const choiceResult = await deferredPrompt.userChoice;

    //* Check if the user accepted the installation
    if (choiceResult.outcome === "accepted") {
      console.log("User accepted the installation");
    } else {
      console.log("User dismissed the installation");
    }

    //* Clear the deferred prompt variable
    deferredPrompt = null;

    //* Hide your custom install button here, e.g., make it invisible again:
    butInstall.style.display = "none";
  }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  //* The PWA was successfully installed
  console.log("App installed successfully!");
});
