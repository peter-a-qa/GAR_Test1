# RandomAutomation

Playwright (JavaScript) test suite built against the public QA practice site
[testautomationpractice.blogspot.com](https://testautomationpractice.blogspot.com/), using the
Page Object Model (POM).

## Project structure

```
pages/
  BasePage.js               # shared goto() helper
  HomePage.js                # composes all section objects for the single-page site
  sections/                  # one class per widget/section on the page
    RegistrationFormSection.js
    DatePickerSection.js
    AlertsSection.js
    DragAndDropSection.js
    SliderSection.js
    ProductTableSection.js
    DynamicButtonSection.js
    LabelsAndLinksSection.js
    SuggestionBoxSection.js
    FileUploadSection.js

fixtures/
  pageFixtures.js             # custom `test`/`expect` that auto-navigates a `homePage` fixture
  files/                      # sample files used by the upload tests

tests/
  registration-form.spec.js
  date-pickers.spec.js
  alerts.spec.js
  drag-and-drop.spec.js
  slider.spec.js
  product-table.spec.js
  dynamic-button.spec.js
  labels-and-links.spec.js
  suggestion-box.spec.js
  file-upload.spec.js
```

Every spec imports `test`/`expect` from `fixtures/pageFixtures.js`, which provides a ready-to-use
`homePage` fixture (already navigated to the site) backed by `pages/HomePage.js`.

## Setup

```bash
npm install
npx playwright install --with-deps
```

## Running the tests

```bash
# run everything (chromium, firefox, webkit)
npx playwright test

# run a single browser
npx playwright test --project=chromium

# run a single spec file
npx playwright test tests/registration-form.spec.js

# watch the tests run in a real browser window
npx playwright test --headed --project=chromium --workers=1

# interactive step-through debugger
npx playwright test --debug
```

View the HTML report after a run:

```bash
npx playwright show-report
```

## Notes

- `baseURL` is set to the practice site in `playwright.config.js`, so page objects navigate with
  relative paths (`goto('/')`).
- The "Labels and Links" broken-link checks call out to `deadlinkcity.com`, which is expected to be
  unreachable — the test asserts that those links fail, not that they succeed.
- Blogspot occasionally takes longer than the default timeout to fully load (ads/trackers); a
  navigation timeout on a single run is usually transient and passes on retry.
