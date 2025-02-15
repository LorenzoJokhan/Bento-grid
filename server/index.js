import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useMatches, useActionData, useLoaderData, useParams, useRouteError, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement } from "react";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
function meta({}) {
  return [{
    title: "New React Router App"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
const index = withComponentProps(function Index() {
  return /* @__PURE__ */ jsx("main", {
    children: /* @__PURE__ */ jsxs("section", {
      className: "grid-container",
      children: [/* @__PURE__ */ jsxs("article", {
        className: "flex flex-col justify-center card p-4 bg-accent-light",
        children: [/* @__PURE__ */ jsxs("h1", {
          className: "mb-6",
          children: ["Create and schedule content", " ", /* @__PURE__ */ jsx("span", {
            className: "text-primary italic",
            children: "quicker"
          }), ":"]
        }), /* @__PURE__ */ jsx("button", {
          className: "font-bold bg-accent hover:bg-amber-500 cursor-pointer py-3 px-4 rounded-full",
          children: "Create post"
        })]
      }), /* @__PURE__ */ jsxs("article", {
        className: "flex flex-col items-center justify-center gap-4 card bg-primary text-white",
        children: [/* @__PURE__ */ jsxs("section", {
          children: [/* @__PURE__ */ jsx("h1", {
            className: "text-4xl",
            children: "Social Media 10x "
          }), /* @__PURE__ */ jsx("p", {
            className: "text-4xl",
            children: "Faster with AI"
          })]
        }), /* @__PURE__ */ jsxs("section", {
          children: [/* @__PURE__ */ jsx("img", {
            className: "w-[200px] mb-1",
            src: "/images/illustration-five-stars.webp"
          }), /* @__PURE__ */ jsx("p", {
            children: "Over 4000 5-star reviews"
          })]
        })]
      }), /* @__PURE__ */ jsxs("article", {
        className: "flex flex-col justify-between card bg-primary-light p-4  overflow-hidden",
        children: [/* @__PURE__ */ jsx("h2", {
          className: "font-semibold",
          children: "Schedule to social media"
        }), /* @__PURE__ */ jsx("div", {
          className: "w-[300px]",
          children: /* @__PURE__ */ jsx("img", {
            src: "/images/illustration-schedule-posts.webp"
          })
        }), /* @__PURE__ */ jsx("p", {
          children: "Optimize post timings to publish content at the perfect time for your audience."
        })]
      }), /* @__PURE__ */ jsxs("article", {
        className: "card p-4 bg-accent",
        children: [/* @__PURE__ */ jsxs("h1", {
          className: "mb-10",
          children: ["Write your ", /* @__PURE__ */ jsx("br", {}), "content using", /* @__PURE__ */ jsx("br", {}), " AI"]
        }), /* @__PURE__ */ jsx("img", {
          src: "/images/illustration-ai-content.webp"
        })]
      }), /* @__PURE__ */ jsxs("article", {
        className: "card p-4",
        children: [/* @__PURE__ */ jsx("img", {
          className: "w-[200px] mb-1",
          src: "/images/illustration-multiple-platforms.webp"
        }), /* @__PURE__ */ jsx("h2", {
          children: "Manage multiple accounts and platforms"
        })]
      }), /* @__PURE__ */ jsxs("article", {
        className: "card p-4 bg-accent overflow-hidden",
        children: [/* @__PURE__ */ jsx("h2", {
          className: "mb-4",
          children: "Maintain a consitent posting schedule"
        }), /* @__PURE__ */ jsx("img", {
          className: "w-[200px] mb-1",
          src: "/images/illustration-consistent-schedule.webp"
        })]
      }), /* @__PURE__ */ jsxs("article", {
        className: "card p-4",
        children: [/* @__PURE__ */ jsxs("h1", {
          children: [/* @__PURE__ */ jsx("code", {
            children: ">"
          }), " 56%"]
        }), /* @__PURE__ */ jsx("p", {
          className: "text-xs mb-6",
          children: "Faster Audience growth"
        }), /* @__PURE__ */ jsx("img", {
          className: "h-12 mb-1",
          src: "/images/illustration-audience-growth.webp"
        })]
      }), /* @__PURE__ */ jsxs("article", {
        className: "flex items-center card p-4 text-white bg-primary",
        children: [/* @__PURE__ */ jsx("img", {
          className: "w-1/2 mb-1",
          src: "/images/illustration-grow-followers.webp"
        }), /* @__PURE__ */ jsx("h1", {
          children: "Grow followers with non-stop content."
        })]
      })]
    })
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-QGsOKR_y.js", "imports": ["/assets/chunk-IR6S3I6Y-BvsIcvZg.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-F198_riF.js", "imports": ["/assets/chunk-IR6S3I6Y-BvsIcvZg.js", "/assets/with-props-DvPqDDfd.js"], "css": ["/assets/root-fNnnhH8f.css"] }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/index-Cq4vOs6X.js", "imports": ["/assets/with-props-DvPqDDfd.js", "/assets/chunk-IR6S3I6Y-BvsIcvZg.js"], "css": [] } }, "url": "/assets/manifest-fb04bcaf.js", "version": "fb04bcaf" };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  publicPath,
  routes
};
