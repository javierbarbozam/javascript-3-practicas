const stack = [];

const addMiddleware = (...middleware) => {
  stack.push(...middleware);
};

const runMiddleware = (index, context) => {
  const middleware = stack[index];

  if (middleware) {
    middleware(context, () => {
      runMiddleware(index + 1, context);
    });
  }
};

const execute = (context) => {
  const initIndex = 0;

  runMiddleware(initIndex, context);
};

export { addMiddleware, execute };
