## Description

This is a frontend assessment for Transavia. The assignment includes creating a form with three fields: origin, destination, and departure date as well as unit tests (more info in the assignment description sent via email)

## Folder structure
- pages: contains pages of the app
- helpers: contains a helper function for date formatting
- shared: components that are shared across the app to avoid duplication (Autocomplete) and components that should be separate for separation of concerns (list item, and list item container)
- mock-data: contains the mock json responses
- tests: unit tests
- types: added one type for Flight

## Self-reflection on achieved progress and improvements
- use loop instead of map for flights and any other big data set for improved performance
- used any quite a lot due to prioritization of functionality. Should use specific types and remove any where possible (it mostly is possible across the app)
- some styling is inline, that should be removed
- separate css files should be added instead of just one where all the CSS is currently
- add global styles / bootstrap classes for generic use such as flex, padding, etc
- mobile friendly - looks ok but could be much better
- form component can be refactored to be cleaner and more concise
- should add possibility that the value in the form when selected still stays as the full name of the airport and not the abbreviation, same as on transavia website. did not have time to finish that
- added prop-types and subsequently deleted, but could be useful for shared components like autocomplete
- props should be destructured where possible or not destructured, decide on a uniform strategy
- experimented a bit in the pages/api folder, please disregard, was just playing with next.js :)
- some naming (e.g. of the class fieldButton is not verbose and i personally think not clear enough) should be worked on further to improve
- test for the form component should be more extensive (!)
- imports order can be added to config for automatic sorting from third party to local etc.
## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Unit testing

To launch unit tests (all) run ```npm test a``` in your terminal.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
