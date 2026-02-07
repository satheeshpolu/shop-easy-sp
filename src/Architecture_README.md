SHOP-EASY-SP/
├── api/ # optional backend/serverless
│ ├── src/
│ ├── package.json
│ └── README.md
│
├── public/
│ ├── favicon.ico
│ ├── robots.txt
│ └── images/
│ └── og.png
│
├── docs/
│ ├── architecture.md # overview of layers & boundaries
│ ├── decisions/
│ │ ├── 0001-routing.md # ADRs (Architecture Decision Records)
│ │ └── 0002-state-management.md
│ ├── conventions/
│ │ ├── naming.md # naming rules, file conventions
│ │ └── imports.md # alias usage + boundary rules
│ └── runbooks/
│ └── release.md # how to release/deploy
│
├── scripts/
│ ├── check-env.mjs
│ ├── generate-sitemap.mjs
│ └── prebuild.mjs
│
├── tests/ # e2e tests (Playwright/Cypress)
│ ├── e2e/
│ │ ├── auth.spec.ts
│ │ ├── cart.spec.ts
│ │ └── checkout.spec.ts
│ ├── fixtures/
│ │ └── products.json
│ └── helpers/
│ ├── selectors.ts
│ └── test-utils.ts
│
├── .env.example
├── .editorconfig
├── .eslintrc.cjs
├── .prettierrc
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── src/
├── app/ # application composition layer
│ ├── config/
│ │ ├── env.ts # env parsing + type-safe access
│ │ ├── constants.ts # app-level constants (not domain)
│ │ └── index.ts
│ │
│ ├── providers/
│ │ ├── AppProviders.tsx # wraps all providers in correct order
│ │ ├── RouterProvider.tsx
│ │ ├── QueryProvider.tsx # React Query setup (optional)
│ │ ├── ThemeProvider.tsx # theme/dark-mode (optional)
│ │ ├── ToastProvider.tsx # toast lib integration
│ │ └── index.ts
│ │
│ ├── router/
│ │ ├── routes.tsx # route objects + lazy imports
│ │ ├── paths.ts # route path constants
│ │ ├── guards/ # auth guards (optional)
│ │ │ ├── RequireAuth.tsx
│ │ │ └── index.ts
│ │ └── index.ts
│ │
│ ├── layouts/
│ │ ├── MainLayout/
│ │ │ ├── MainLayout.tsx
│ │ │ ├── MainLayout.module.css
│ │ │ └── index.ts
│ │ ├── AuthLayout/
│ │ │ ├── AuthLayout.tsx
│ │ │ └── index.ts
│ │ └── index.ts
│ │
│ ├── error-boundary/
│ │ ├── ErrorBoundary.tsx
│ │ ├── ErrorFallback.tsx
│ │ └── index.ts
│ │
│ ├── store/ # app-level store wiring (optional)
│ │ ├── setupStore.ts # if Redux; omit if Zustand-only
│ │ └── index.ts
│ │
│ └── index.ts
│
├── shared/ # reusable, feature-agnostic code
│ ├── ui/ # design-system primitives
│ │ ├── Button/
│ │ │ ├── Button.tsx
│ │ │ ├── Button.test.tsx
│ │ │ ├── Button.module.css
│ │ │ └── index.ts
│ │ ├── Card/
│ │ ├── Modal/
│ │ ├── Drawer/
│ │ ├── Input/
│ │ ├── Select/
│ │ ├── Skeleton/
│ │ └── index.ts
│ │
│ ├── components/ # generic components (not “UI primitives”)
│ │ ├── Loading/
│ │ │ ├── Loading.tsx
│ │ │ └── index.ts
│ │ ├── EmptyState/
│ │ ├── Pagination/
│ │ ├── ErrorState/
│ │ └── index.ts
│ │
│ ├── hooks/ # generic hooks
│ │ ├── useDebounce.ts
│ │ ├── useLocalStorage.ts
│ │ ├── useMediaQuery.ts
│ │ └── index.ts
│ │
│ ├── lib/ # wrappers for external libs
│ │ ├── http/
│ │ │ ├── client.ts # axios/fetch client
│ │ │ ├── interceptors.ts
│ │ │ ├── errors.ts # error normalization
│ │ │ └── index.ts
│ │ ├── query/
│ │ │ ├── queryClient.ts
│ │ │ ├── keys.ts
│ │ │ └── index.ts
│ │ ├── logger/
│ │ │ ├── logger.ts
│ │ │ └── index.ts
│ │ └── index.ts
│ │
│ ├── utils/ # pure utility functions
│ │ ├── formatCurrency.ts
│ │ ├── formatDate.ts
│ │ ├── clamp.ts
│ │ ├── noop.ts
│ │ └── index.ts
│ │
│ ├── types/ # shared TS types
│ │ ├── api.ts # ApiResponse<T>, Pagination, etc.
│ │ ├── common.ts
│ │ └── index.ts
│ │
│ ├── constants/
│ │ ├── storageKeys.ts
│ │ ├── regex.ts
│ │ └── index.ts
│ │
│ ├── styles/
│ │ ├── globals.css
│ │ ├── tokens.css # CSS variables / theme tokens
│ │ ├── reset.css
│ │ └── index.ts
│ │
│ └── index.ts
│
├── entities/ # core business entities (reusable)
│ ├── product/
│ │ ├── api/
│ │ │ ├── product.api.ts # fetchProducts, fetchProductById
│ │ │ └── index.ts
│ │ ├── model/
│ │ │ ├── product.types.ts # Product, ProductDTO, etc.
│ │ │ ├── product.mapper.ts # DTO <-> domain mapping
│ │ │ ├── product.schema.ts # zod validation (optional)
│ │ │ └── index.ts
│ │ ├── ui/
│ │ │ ├── ProductCard/
│ │ │ │ ├── ProductCard.tsx
│ │ │ │ ├── ProductCard.module.css
│ │ │ │ └── index.ts
│ │ │ └── index.ts
│ │ └── index.ts
│ │
│ ├── cart/
│ │ ├── model/
│ │ │ ├── cart.types.ts
│ │ │ └── index.ts
│ │ └── index.ts
│ │
│ └── user/
│ ├── model/
│ ├── api/
│ └── index.ts
│
├── features/ # user actions / business flows
│ ├── add-to-cart/
│ │ ├── model/
│ │ │ ├── useAddToCart.ts # orchestrates store + toast + analytics
│ │ │ └── index.ts
│ │ ├── ui/
│ │ │ ├── AddToCartButton.tsx
│ │ │ └── index.ts
│ │ └── index.ts
│ │
│ ├── search-products/
│ │ ├── model/
│ │ │ ├── useSearchProducts.ts
│ │ │ └── index.ts
│ │ ├── ui/
│ │ │ ├── SearchBox.tsx
│ │ │ ├── SortDropdown.tsx
│ │ │ └── index.ts
│ │ └── index.ts
│ │
│ ├── checkout/
│ │ ├── api/
│ │ │ ├── checkout.api.ts
│ │ │ └── index.ts
│ │ ├── model/
│ │ │ ├── checkout.types.ts
│ │ │ ├── useCheckout.ts
│ │ │ └── index.ts
│ │ ├── ui/
│ │ │ ├── CheckoutForm.tsx
│ │ │ └── index.ts
│ │ └── index.ts
│ │
│ └── wishlist/
│ ├── model/
│ ├── ui/
│ └── index.ts
│
├── widgets/ # large composed sections (page blocks)
│ ├── header/
│ │ ├── ui/
│ │ │ ├── Header.tsx
│ │ │ ├── Header.module.css
│ │ │ └── index.ts
│ │ ├── model/
│ │ │ ├── useHeader.ts
│ │ │ └── index.ts
│ │ └── index.ts
│ │
│ ├── product-grid/
│ │ ├── ui/
│ │ │ ├── ProductGrid.tsx
│ │ │ └── index.ts
│ │ ├── model/
│ │ │ ├── useProductGrid.ts
│ │ │ └── index.ts
│ │ └── index.ts
│ │
│ └── footer/
│ ├── ui/
│ └── index.ts
│
├── pages/ # route-level screens (thin)
│ ├── home/
│ │ ├── ui/
│ │ │ ├── HomePage.tsx
│ │ │ └── index.ts
│ │ ├── model/
│ │ │ └── index.ts # page-only state (rare)
│ │ ├── **tests**/
│ │ │ └── home.test.tsx
│ │ └── index.ts # exports HomePage
│ │
│ ├── product-details/
│ │ ├── ui/
│ │ │ ├── ProductDetailsPage.tsx
│ │ │ └── index.ts
│ │ ├── **tests**/
│ │ └── index.ts
│ │
│ ├── cart/
│ │ ├── ui/
│ │ │ ├── CartPage.tsx
│ │ │ └── index.ts
│ │ ├── **tests**/
│ │ └── index.ts
│ │
│ ├── checkout/
│ │ ├── ui/
│ │ │ ├── CheckoutPage.tsx
│ │ │ └── index.ts
│ │ └── index.ts
│ │
│ └── not-found/
│ ├── ui/
│ │ ├── NotFoundPage.tsx
│ │ └── index.ts
│ └── index.ts
│
├── store/ # global client state modules
│ ├── cart/
│ │ ├── cart.store.ts # zustand slice/store
│ │ ├── cart.selectors.ts
│ │ ├── cart.types.ts
│ │ └── index.ts
│ ├── recent/
│ │ ├── recent.store.ts
│ │ └── index.ts
│ ├── product/
│ │ ├── product.store.ts # only if needed (prefer server state)
│ │ └── index.ts
│ └── index.ts
│
├── assets/
│ ├── icons/
│ ├── images/
│ └── fonts/
│
├── App.tsx
├── main.tsx
└── vite-env.d.ts
