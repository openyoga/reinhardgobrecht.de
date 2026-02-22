import fs from "node:fs"
let file;

console.info("\nModifying theme files")

const read = async function (file) {
    console.log(`- ${file}`);
    return (await fs.promises.readFile(`themes/tabi/${file}`, "utf8"));
}

const write = async function (file, text) {
    await fs.promises.writeFile(file, text);
}

file = "i18n/de.toml";
await write(file, (await read(file))
    .replace(/^prev\s*=\s*".*?"/im, `prev = "Vorheriges Buch"`)
    .replace(/^next\s*=\s*".*?"/im, `next = "Nächstes Buch"`)
    .replace(/^all_posts\s*=\s*".*?"/im, `all_posts = "Alle Bücher"`));

file = "templates/partials/footer.html";
await write(file, (await read(file))
    .replace(/<div class="credits">.*?<\/div>/s, ""));
