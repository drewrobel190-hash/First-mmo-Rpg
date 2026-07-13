This folder holds the real screenshots for the gallery. Each entry in the
`items` list in js/script.js points at whatever filename a picture actually
has here — no renaming needed.

To add a new screenshot:
1. Save/paste the image file into this folder (any filename is fine).
2. Open js/script.js and add a new line to the END of the `items` array:
     { file: "whatever-the-filename-is.png", title: "Month Day, Year — Short description" },
   (the gallery shows newest first, so newer entries go later in the list)

That's it — the page picks it up automatically once the filename in the code
matches the filename in this folder.
