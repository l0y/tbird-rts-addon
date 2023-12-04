# Thunderbird Reply to Selected Add-on

A simple add-on for Thunderbird 91 to allow a quick reply to multiple, separate messages.
It's inspired by an add-on written by Jonathan Kamens that got caught
by the many breaking changes in Mozilla's extension support since v78.

## Usage

Select several messages and use the context menu from Thunderbird's message list to reply
to all of the original senders at once. Select the messages you want, right-click in the
list area, and towards the bottom of the popup menu you should see the "Reply to Selected"
item. A new message composition window will open using your default mail identity for the
**From:** field. The subject line and body will both be empty.

The extension preferences allow you to pick a default placement for the recipients from
your selected messages. You can pick one of four options:

* Put all recipients in the **To:** field
* Put all recipients in the **CC:** field
* Put all recipients in the **BCC:** field (*the default*)
* Put the first recipient in the **To:** field, and **CC:** all remaining recipients

Once the composition window is open, of course, you can relocate any particular recipient
as needed.

## Installing

If you want to use this extension as is, simply download the `rts.xpi` file from the
`dist` folder and follow Mozilla's instructions for
[installing from a file](https://support.mozilla.org/en-US/kb/installing-addon-thunderbird).

## Compatibility

While the advent of Thunderbird 115 prompted the development of this add-on, it should
work with version 91 or higher. It has been (briefly) tested on Linux and macOS systems,
but should work fine anywhere Thunderbird runs.
