# Kiosk Mode Extension Sample

## What is this?

This is a sample demonstrating calling kiosk APIs from an extension in kiosk mode.

## Explanation of Files

### background.js

`background.js` handles receiving calls from external websites listed in the `externally_connectable` key of the `manifest.json` file. When receiving a message, the extension then calls specific APIs that are not normally exposed on the webpage or not available to be called from a webpage, such as [restart](https://developer.chrome.com/docs/extensions/reference/runtime/#method-restart) which is only available to kiosk applications.

### manifest.json

The `manifest.json` file describes the extension and provides key metadata about the extension. One important thing to note here is the `externally_connectable` field in the manifest. This field allows websites from that wildcard location `*://chromeos.dev/*` to call the extension. We have a [sample PWA](https://chromeos.dev/) deployed to that URL currently for users that are interested in testing the extension with a PWA.

Note that you will need to replace these 2 fields in the manifest.json file accordingly to match your self hosted extension information:
- key
- version
### manifest.xml

This is for self hosting the extension you want to test your PWA with. For more information on self hosting, the Chrome Enterprise Team has written [this document](https://docs.google.com/document/d/1pT0ZSbGdrbGvuCsVD2jjxrw-GVz-80rMS2dgkkquhTY/edit#heading=h.3cujn7pq4oul) which goes over in great detail self hosting extensions and accessing them within your organization.

Note that you will need to replace these 3 fields in the manifest.xml file accordingly to match your self hosted extension information:
- appid
- codebase
- version

## Extra documentation

* [Sending messages from web pages](https://developer.chrome.com/docs/extensions/mv3/messaging/#external-webpage)
* [Managing extensions in your enterprise](https://docs.google.com/document/d/1pT0ZSbGdrbGvuCsVD2jjxrw-GVz-80rMS2dgkkquhTY/edit#)
* [Chrome Extensions](https://developer.chrome.com/docs/extensions/mv3/)
<!-- TODO(@nohe427): add Chrome OS documentation when available -->