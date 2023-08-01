const path = require("path");
module.exports = function (content, aliasObj) {
  const entries = Object.entries(aliasObj);
  entries.forEach((item) => {
    const [alias, path] = item;
    console.log(alias, path,typeof content);

    content.replace(alias, path);
    console.log(content,"------");
  });
  return content;
};
