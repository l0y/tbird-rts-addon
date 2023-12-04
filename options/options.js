const placementBox = document.querySelector("#placement");

/*
 * Store the currently selected placement choice using messenger.storage.local.
 */
function storeSettings() {
  messenger.storage.local.set({
    recipients: {
      placement: placementBox.value
    }
  });
}

/*
 * Update the options UI with the settings values retrieved from storage,
 * or the default settings if the stored settings are empty.
 */
function updateUI(restoredSettings) {
  placementBox.value = restoredSettings.recipients && restoredSettings.recipients.placement || "b";
}

function onError(e) {
  console.error(e);
}

/*
 * On opening the options page, fetch stored settings and update the UI with them.
 */
const gettingStoredSettings = messenger.storage.local.get();
gettingStoredSettings.then(updateUI, onError);

/*
 * On blur, save the currently selected settings.
 */
placementBox.addEventListener("blur", storeSettings);
