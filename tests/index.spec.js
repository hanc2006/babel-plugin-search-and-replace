const babel = require("@babel/core");
const searchAndReplaceplugin = require("../lib/index");

var example = `
var foo = 1;
if (foo) console.log(foo);
const hello = "hello";

const myFunc = function(param = "hello"){
    return 1;
}
`;

it("should replace nothing", () => {
  const { code } = babel.transform(example, {
    plugins: [searchAndReplaceplugin]
  });
  expect(code).toMatchSnapshot();
});

it("should replace foo with moo", () => {
  const { code } = babel.transform(example, {
    plugins: [
      [
        searchAndReplaceplugin,
        {
          rules: [
            {
              search: "foo",
              replace: "moo",
              flag: "g"
            }
          ]
        }
      ]
    ]
  });
  expect(code).toMatchSnapshot();
});
