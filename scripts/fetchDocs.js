const fetch = require('node-fetch');
const fs = require("fs");
const path = require("path");

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

const AVAILABLE_APPS = {
  directory: "https://directory.zaikio.com"
};

const navFilePath = path.join(
  __dirname,
  "../docs/.vuepress/externalApisNav.json"
);

fs.writeFile(navFilePath, JSON.stringify([]), err => {
  if (err) {
    console.log(err);
  }
});

Object.keys(AVAILABLE_APPS).forEach(async appName => {
  const url = AVAILABLE_APPS[appName];
  const manifest = await fetch(`${url}/docs/manifest.json`).then(res => res.json());
  const appApiDir = path.join(__dirname, `../docs/api/${appName}`);
  if (!fs.existsSync(appApiDir)) {
    fs.mkdirSync(appApiDir);
  }
  console.log("FETCHED MANIFEST", manifest);

  if (manifest.specs) {
    let apiSpecLinks = fs.existsSync(navFilePath)
      ? JSON.parse(require("fs").readFileSync(navFilePath, "utf8"))
      : [];

    apiSpecLink = {
      text: manifest.title,
      items: []
    };

    await asyncForEach(Object.keys(manifest.specs), async specName => {
      const specPath = manifest.specs[specName];
      const filePath = path.join(appApiDir, specPath.split("/").pop());
      const response = await fetch(`${url}${specPath}`).then(res => res.text());
      console.log("FETCHED", `${url}${specPath}`);
      fs.writeFileSync(filePath, response, err => {
        if (err) {
          console.log(err);
        }
      });
      console.log(specPath);
      apiSpecLinks = fs.existsSync(navFilePath)
        ? JSON.parse(require("fs").readFileSync(navFilePath, "utf8"))
        : [];

      if (specPath.includes('.md')) {
        const path = specPath.split("/").pop().split('.md').shift();
        apiSpecLink.items.push({
          text: specName,
          link: `/api/${appName}/${path}/`
        });
      } else {
        fs.writeFile(
          path.join(appApiDir, "README.md"),
          `---
title: ${specName}
lang: en-US
pageClass: full-width
---

<ClientOnly><ApiDocWrapper src="api/${appName}/${specPath
            .split("/")
            .pop()}"></ApiDocWrapper></ClientOnly>
        `,
          err => {
            if (err) {
              console.log(err);
            }
          }
        );
        apiSpecLink.items.push({
          text: specName,
          link: `/api/${appName}/`
        });
      }
    });

    apiSpecLinks.push(apiSpecLink);

    fs.writeFileSync(navFilePath, JSON.stringify(apiSpecLinks), err => {
      if (err) {
        console.log(err);
      }
    });
  }
});
