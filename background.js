// Heavily inspired by the hello-world extension tutorials at
// https://developer.thunderbird.net/add-ons/hello-world-add-on

// Create the menu entry
let rts_id = await messenger.menus.create({
  title: "Reply to Selected",
  contexts: [
    "message_list"
  ],
});

// Register a listener for the menus.onClicked event.
messenger.menus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId == rts_id) {
    // We can get the current active tab and use its id explicitly, but
    // getSelectedMessages() also defaults to the same tab.
    //let cmt = await messenger.mailTabs.getCurrent(); // current mail tab
    let selected = await messenger.mailTabs.getSelectedMessages();
    let settings = await messenger.storage.local.get();
    let placement = settings.recipients && settings.recipients.placement || "b";

    // Let's get all of the (unique) recipients from either the from: or reply-to: fields.
    let recips = new Array();
    for (let msg of selected.messages) {
      let more = await messenger.messages.getFull(msg.id);
      let recip = msg.author; 
      if (more.headers['reply-to'] !== undefined) {
        recip = more.headers['reply-to'];
      }
      if (!recips.includes(recip)) {
        recips.push(recip);
      }
    }

    // recips should now be a valid ComposeRecipientList, use it to compose!
    if (placement === "c") {
      messenger.compose.beginNew({cc: recips.join(", ")});
    } else if (placement === "t") {
      messenger.compose.beginNew({to: recips.join(", ")});
    } else if (placement === "f") {
      let first = recips.shift();
      let rest = recips.join(", ");
      messenger.compose.beginNew({to: first, cc: rest});
    } else {
      // Either the default of BCC was selected or we have a missing/invalid choice,
      // so put the recipients in the bcc field.
      messenger.compose.beginNew({bcc: recips.join(", ")});
    }
  }
});
