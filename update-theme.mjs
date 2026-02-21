import fs from "node:fs"
let text;

console.log("i18n/de.toml");
text = await fs.promises.readFile("themes/tabi/i18n/de.toml", "utf8");
text = text
    .replace(/^prev\s*=\s*".*?"/im, `prev = "Vorheriges Buch"`)
    .replace(/^next\s*=\s*".*?"/im, `next = "Nächstes Buch"`);
await fs.promises.writeFile("i18n/de.toml", text);

console.log("templates/partials/footer.html");
text = await fs.promises.readFile("themes/tabi/templates/partials/footer.html", "utf8");
text = text.replace(/<div class="credits">.*?<\/div>/s, "")
await fs.promises.writeFile("templates/partials/footer.html", text);
