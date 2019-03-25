module.exports = {
  '*.{js,json,md}': [
    `prettier-eslint --ignore-path .gitignore --write`,
    `git add`,
  ],
}
