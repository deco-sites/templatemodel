// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import { context } from "$live/live.ts";
import { DecoManifest } from "$live/types.ts";
import * as $0 from "./routes/[...catchall].tsx";
import * as $1 from "./routes/_app.tsx";
import * as $2 from "./routes/_middleware.ts";
import * as $3 from "./routes/api/[...catchall].tsx";
import * as $4 from "./routes/index.tsx";
import * as $5 from "./routes/inspect-vscode.ts";
import * as $6 from "./routes/style.css.ts";

import * as $$$0 from "./sections/TemplateCarousel.tsx";
import * as $$$1 from "./sections/TemplateFeatures.tsx";
import * as $$$2 from "./sections/TemplateFooter.tsx";
import * as $$$3 from "./sections/TemplateHead.tsx";
import * as $$$4 from "./sections/TemplateHeader.tsx";
import * as $$$5 from "./sections/TemplateHighlights.tsx";
import * as $$$6 from "./sections/TemplateNewsletter.tsx";
import * as $$$7 from "./sections/TemplateProductShelf.tsx";
import * as $$$8 from "./sections/TemplateSpacer.tsx";
import * as $$$$0 from "./functions/scrapData.ts";
import * as $$$$1 from "./functions/templateVtexProductList.ts";

const manifest: DecoManifest = {
  routes: {
    "./routes/[...catchall].tsx": $0,
    "./routes/_app.tsx": $1,
    "./routes/_middleware.ts": $2,
    "./routes/api/[...catchall].tsx": $3,
    "./routes/index.tsx": $4,
    "./routes/inspect-vscode.ts": $5,
    "./routes/style.css.ts": $6,
  },
  islands: {},
  sections: {
    "./sections/TemplateCarousel.tsx": $$$0,
    "./sections/TemplateFeatures.tsx": $$$1,
    "./sections/TemplateFooter.tsx": $$$2,
    "./sections/TemplateHead.tsx": $$$3,
    "./sections/TemplateHeader.tsx": $$$4,
    "./sections/TemplateHighlights.tsx": $$$5,
    "./sections/TemplateNewsletter.tsx": $$$6,
    "./sections/TemplateProductShelf.tsx": $$$7,
    "./sections/TemplateSpacer.tsx": $$$8,
  },
  functions: {
    "./functions/scrapData.ts": $$$$0,
    "./functions/templateVtexProductList.ts": $$$$1,
  },
  schemas: {
    "./sections/TemplateCarousel.tsx": {
      "inputSchema": {
        "title": " Template Carousel",
        "type": "object",
        "properties": {
          "scrapData": {
            "$id": "334d52bc048fb38e9e9bebbd611fd7144c1c42cb",
            "format": "live-function",
            "type": "string",
            "title": "Scrap Data",
          },
          "images": {
            "type": "array",
            "items": {
              "title": "Image",
              "type": "object",
              "properties": {
                "desktop": {
                  "format": "image-uri",
                  "type": "string",
                  "title": "Desktop",
                  "description": "desktop otimized image",
                },
                "mobile": {
                  "format": "image-uri",
                  "type": "string",
                  "title": "Mobile",
                  "description": "mobile otimized image",
                },
                "href": {
                  "type": "string",
                  "title": "Href",
                  "description":
                    "when user clicks on the image, go to this link",
                },
                "alt": {
                  "type": "string",
                  "title": "Alt",
                  "description": "Image's alt text",
                },
              },
              "required": [
                "desktop",
                "mobile",
                "href",
                "alt",
              ],
            },
            "title": "Images",
          },
          "preload": {
            "type": [
              "boolean",
              "null",
            ],
            "title": "Preload",
            "description":
              "Check this option when this banner is the biggest image on the screen for image optimizations",
          },
        },
        "required": [],
      },
      "outputSchema": null,
    },
    "./sections/TemplateFeatures.tsx": {
      "inputSchema": {
        "title": " Template Features",
        "type": "object",
        "properties": {
          "features": {
            "type": "array",
            "items": {
              "title": "Feature",
              "type": "object",
              "properties": {
                "src": {
                  "format": "image-uri",
                  "type": "string",
                  "title": "Src",
                  "description": "Image src",
                },
                "title": {
                  "type": "string",
                  "title": "Title",
                  "description": "Title",
                },
                "description": {
                  "type": "string",
                  "title": "Description",
                  "description": "Description and Image alt text",
                },
              },
              "required": [
                "src",
                "title",
                "description",
              ],
            },
            "title": "Features",
          },
        },
        "required": [
          "features",
        ],
      },
      "outputSchema": null,
    },
    "./sections/TemplateFooter.tsx": {
      "inputSchema": null,
      "outputSchema": null,
    },
    "./sections/TemplateHead.tsx": {
      "inputSchema": {
        "title": " Template Head",
        "type": "object",
        "properties": {
          "scrapData": {
            "$id": "334d52bc048fb38e9e9bebbd611fd7144c1c42cb",
            "format": "live-function",
            "type": "string",
            "title": "Scrap Data",
          },
          "title": {
            "type": [
              "string",
              "null",
            ],
            "title": "Title",
          },
          "description": {
            "type": [
              "string",
              "null",
            ],
            "title": "Description",
          },
          "url": {
            "type": "string",
            "title": "Url",
          },
          "imageUrl": {
            "type": [
              "string",
              "null",
            ],
            "title": "Image Url",
          },
          "faviconUrl": {
            "type": [
              "string",
              "null",
            ],
            "title": "Favicon Url",
          },
          "styleUrls": {
            "type": "array",
            "items": {
              "type": "string",
            },
            "title": "Style Urls",
          },
          "themeColor": {
            "type": [
              "string",
              "null",
            ],
            "title": "Theme Color",
          },
        },
        "required": [
          "url",
        ],
      },
      "outputSchema": null,
    },
    "./sections/TemplateHeader.tsx": {
      "inputSchema": {
        "title": " Template Header",
        "type": "object",
        "properties": {
          "scrapData": {
            "$id": "334d52bc048fb38e9e9bebbd611fd7144c1c42cb",
            "format": "live-function",
            "type": "string",
            "title": "Scrap Data",
          },
          "alerts": {
            "type": "array",
            "items": {
              "type": "string",
            },
            "title": "Alerts",
          },
          "searchbar": {
            "title": "Search Bar",
            "type": "object",
            "properties": {
              "placeholder": {
                "type": [
                  "string",
                  "null",
                ],
                "title": "Placeholder",
                "description": "Search bar default placeholder message",
                "default": "What are you looking for?",
              },
              "action": {
                "type": [
                  "string",
                  "null",
                ],
                "title": "Page path",
                "description":
                  "When user clicks on the search button, navigate it to",
                "default": "/s",
              },
              "name": {
                "type": [
                  "string",
                  "null",
                ],
                "title": "Term name",
                "description":
                  "Querystring param used when navigating the user",
                "default": "q",
              },
              "query": {
                "type": [
                  "string",
                  "null",
                ],
                "title": "Query",
              },
            },
            "required": [],
          },
          "navItems": {
            "type": "array",
            "items": {
              "title": "Item",
              "type": "object",
              "properties": {
                "label": {
                  "type": "string",
                  "title": "Label",
                },
                "href": {
                  "type": "string",
                  "title": "Href",
                },
                "children": {
                  "title": "Children",
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "label": {
                        "type": "string",
                        "title": "Label",
                      },
                      "href": {
                        "type": "string",
                        "title": "Href",
                      },
                    },
                    "required": [
                      "label",
                      "href",
                    ],
                  },
                },
              },
              "required": [
                "label",
                "href",
                "children",
              ],
            },
            "title": "Navigation items",
            "description":
              "Navigation items used both on mobile and desktop menus",
          },
        },
        "required": [
          "alerts",
        ],
      },
      "outputSchema": null,
    },
    "./sections/TemplateHighlights.tsx": {
      "inputSchema": {
        "title": " Template Highlights",
        "type": "object",
        "properties": {
          "highlights": {
            "type": "array",
            "items": {
              "title": "Highlight",
              "type": "object",
              "properties": {
                "src": {
                  "format": "image-uri",
                  "type": "string",
                  "title": "Src",
                },
                "alt": {
                  "type": "string",
                  "title": "Alt",
                },
                "href": {
                  "type": "string",
                  "title": "Href",
                },
                "label": {
                  "type": "string",
                  "title": "Label",
                },
              },
              "required": [
                "src",
                "alt",
                "href",
                "label",
              ],
            },
            "title": "Highlights",
          },
          "title": {
            "type": "string",
            "title": "Title",
          },
        },
        "required": [
          "title",
        ],
      },
      "outputSchema": null,
    },
    "./sections/TemplateNewsletter.tsx": {
      "inputSchema": null,
      "outputSchema": null,
    },
    "./sections/TemplateProductShelf.tsx": {
      "inputSchema": {
        "title": " Template Product Shelf",
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "title": "Title",
          },
          "products": {
            "$id": "18e9298f44fabfefab948fb98a413b90224be6a0",
            "format": "live-function",
            "type": "string",
            "title": "Products",
          },
        },
        "required": [
          "title",
          "products",
        ],
      },
      "outputSchema": null,
    },
    "./sections/TemplateSpacer.tsx": {
      "inputSchema": {
        "title": " Template Spacer",
        "type": "object",
        "properties": {
          "height": {
            "title": "Height",
            "type": "object",
            "properties": {
              "mobile": {
                "type": "number",
                "title": "Mobile",
              },
              "desktop": {
                "type": "number",
                "title": "Desktop",
              },
            },
            "required": [
              "mobile",
              "desktop",
            ],
          },
        },
        "required": [],
      },
      "outputSchema": null,
    },
    "./functions/scrapData.ts": {
      "inputSchema": {
        "title": "Scrap Data",
        "type": "object",
        "properties": {
          "null": {
            "type": [
              "string",
              "null",
            ],
            "title": "Null",
          },
        },
        "required": [],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "334d52bc048fb38e9e9bebbd611fd7144c1c42cb",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/templateVtexProductList.ts": {
      "inputSchema": {
        "title": "Template Vtex Product List",
        "type": "object",
        "properties": {
          "query": {
            "type": "string",
            "title": "Query",
            "description": "query to use on search",
          },
          "count": {
            "type": "number",
            "title": "Count",
            "description": "total number of items to display",
          },
          "sort": {
            "type": "string",
            "anyOf": [
              {
                "type": "string",
                "const": "",
              },
              {
                "type": "string",
                "const": "price:desc",
              },
              {
                "type": "string",
                "const": "price:asc",
              },
              {
                "type": "string",
                "const": "orders:desc",
              },
              {
                "type": "string",
                "const": "name:desc",
              },
              {
                "type": "string",
                "const": "name:asc",
              },
              {
                "type": "string",
                "const": "release:desc",
              },
              {
                "type": "string",
                "const": "discount:desc",
              },
            ],
            "title": "Sort",
            "description": "search sort parameter",
          },
        },
        "required": [
          "query",
          "count",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "18e9298f44fabfefab948fb98a413b90224be6a0",
          },
        },
        "additionalProperties": true,
      },
    },
  },
  baseUrl: import.meta.url,
  config,
};

// live ??? this exposes the manifest so the live server can render components dynamically
context.manifest = manifest;

export default manifest;
