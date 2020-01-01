module.exports = () => {
  return {
    visitor: {
      StringLiteral(path, state) {
        const opts = state.opts;

        if (Object.keys(opts).length === 0) return;

        state.opts.rules.map(opt => {
            path.node.value = path.node.value.replace(new RegExp(opt.search, opt.flag), opt.replace);
            return;
        });
      }
    }
  };
};
