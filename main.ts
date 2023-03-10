import { express } from "./deps.ts";

const application = express();

const port = 8080;

application
  .get("/", (req, res) => {
    res.send({
      message: "Hello, World!",
    });
  })
  .get("/random", (req, res) => {
    res.send({
      number: Math.floor(Math.random() * 100),
    });
  });

application.listen(port, () => {
  console.log(`Application listening on port ${port}`);
});
