## Foodify App

### UI Structure
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *      - RestaurantCard
 *          - Thumbnail
 *          - Restaurant Name, Cousine, ETA, Rating
 * Footer
 *  - CopyRight
 *  - Links
 *  - Address
 *  - Contact


### React Learning Path
    - Create DOM elements using Vanilla JS
    - Include React & reactDOM in HTML via CDN
    - Use React.createElement(...) to create React Elements
    - Setup project: npm init & package.json
    - Install react & react-dom package
    - Include parcel (module bundler) to project
    - Include command scripts in package.json to start & build
        - "start": "parcel index.html"
        - "build": "parcel build index.html"
    - Introduction to JSX
    - Working of Babel to transpile JSX -> React.createElement(...) behind the scene
    - Introduction to Functional components of React
    - Use of Props
    - React reconciliation algorithm, virtual DOM & React Fiber
    - Structure our app with multiple component files
    - Use logical operators for conditional rendering
    - Browser event handling
    - Introduce React Hooks - useState() & useEffect()
    - Manage component state using useState()
    - Make API call using fetch(...) inside useEffect()
    - Introduction to Routing -> npm i react-router-dom
        - CreateBrowserRouter
        - RouterProvider
        - Outlet
        - Link
        - Hooks: useParams(...) & useRouteError(...)
    - Introduction to Class-based components of React
    - React component lifecycle & methods
        - constructor()
        - render()
        - componentDidMount()
        - componentDidUpdate()
        - componentWillUnmount()
    - Optimization of our app
        - use custom hooks to fetch & set data
        - Lazy loading (chunking/dynamic bundling/dynamic import/on-demand loading)
            - lazy
            - Suspense
    - Introduction of Higher-order componets
    - Controlled vs Uncontrolled components
    - Introduction to React Context
        - CreateContext
        - Context.Provider & Context.Consumer
        - Hooks: useContext(...)
    - Introduction to Redux to manage app-wide state
        - npm modules: react-redux & redux-toolkit
        - dispatch
        - action
        - reducers & reducer
        - selector
        - store & slice
        - subscribe to store
        - Redux Hooks: useDispatch(...) & useSelector(...)
    - Introduction to testing (Unit & Integration test)
        - install React-testing-library  (npm i -D @testing-library/react)
        - install Jest framework (npm i -D jest)
        - Install babel dependencies as testing library uses babel
            - npm i -D @babel/core
            - npm i -D @babel/preset-env
            - npm i -D @babel/preset-react
        - Configure babel.config.js
        - Configure .parcelrc file to disable default babel transpilation
        - Configure jest: npx jest --init
        - Install jsdom library(npm i -D @testing-library/dom)
        - Add @babel/preset-react in babel.config.js to transpile JSX during UT
        - Install jest-transform-css to transpile CSS modules (npm i -D jest-transform-css)
        - Install @testing-library/jest-dom for runtime assertions

        - Types of test: Unit, Intrgration, E2E
        - Testing strategy for UT & IT: 
            - Render component in JSDOM
            - Find/Query element using module @testing-library/react
            - Assert
    - Additional React Hooks:
        - useRef(...)
        - useMemo(...)
        - useCallback(...)
    - Other topics (not covered yet in course)
        - React Portal
        - Input sanitization
        - Form Handling
        - User authentication & protected routes
        - Use of react-query
        - Next.js setup
        - E2E test using Cypress
