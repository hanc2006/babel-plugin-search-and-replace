# babel-plugin-search-and-replace

## What it does ?

It replace string you choosed during babel runtime with one or multiple regex expression

## How to use it ?

- `npm i -D babel-plugin-search-and-replace`

- Add the following lines in your .babelrc

```json
{
  "plugins": [
    [
      "search-and-replace",
      {
        "rules": [
          {
            "search": "regex",
            "replace": "replacement"
            "flag": "g"
          }
        ]
      }
    ]
  ]
}
```
## Valid regex flag
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

- Enjoy
