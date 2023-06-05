# Test project for UGMK

This repository is for test application for UGMK

## About the app

This app is to build and display bar and pie charts based on the factory data received through API. This includes only client code, and backend can be emulated using `json-server` against the test data located in the root of this repository (file `products.json`).

Home page (`/`) contains the bar chart of the data received from the server (from `http://localhost:3001/products`), where for each months 2 bars displayed: number of products manufactured in tons for Factory A and Factory B respectively.

Details page (`/details/<factory id>/<month number>`, e.g. `/details/1/2` is for February data for Factory A) displays the pie chart of amount of products 1 and 2 were manufactured on selected factory in a selected month.

## Scripts

- `npm run start` is to start client application locally
- `npm run dockerize` is to create docker image named `ugmk_test_app`
- `npm run start-container` is to start container named `ugmk_test_app`, that makes client app available on `localhost:3000` and automatically removes container after application stop
