import { Stack, Config } from "contentstack";

const stackConfig: Config = {
  api_key: process.env.CONTENTSTACK_API_KEY as string,
  delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN as string,
  environment: process.env.CONTENTSTACK_ENVIRONMENT as string,
  branch: process.env.CONTENTSTACK_BRANCH || "main",
};

const contentStack = Stack(stackConfig);

export function fetchProduct() {
  const query = contentStack
    .ContentType("app_router_product_page")
    .Entry("bltf46c1e88de381cfa");

  return new Promise((resolve, reject) => {
    query.fetch().then(
      function success(entry) {
        resolve(entry.toJSON());
      },
      function error(err) {
        reject(err);
      }
    );
  });
}
