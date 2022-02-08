import { rest } from "msw";

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/todos/2", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        userId: 1,
        id: 1,
        title: "이건 가짜지롱",
        completed: false,
      })
    );
  }),
];
