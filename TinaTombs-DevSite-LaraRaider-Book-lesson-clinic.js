
import url from 'url';
import { createRunner } from '@puppeteer/replay';

export const flow = {
    "title": "TinaTombs-DevSite-LaraRaider-Book-lesson-clinic",
    "steps": [
        {
            "type": "setViewport",
            "width": 1396,
            "height": 947,
            "deviceScaleFactor": 1,
            "isMobile": false,
            "hasTouch": false,
            "isLandscape": false
        },
        {
            "type": "navigate",
            "url": "https://dev.tinatombsgolf.com/userLayout/scheduleUser",
            "assertedEvents": [
                {
                    "type": "navigation",
                    "url": "https://dev.tinatombsgolf.com/userLayout/scheduleUser",
                    "title": "Tina Tombs - User"
                }
            ]
        },
        {
            "type": "click",
            "selectors": [
                [
                    "aria/󰃰 Schedule",
                    "aria/[role=\"paragraph\"]"
                ],
                [
                    "body > app-root > app-user-layout > div > div.menu > div.menu-content > button.menu-item.menu-item--selected.menu-item--active > p"
                ]
            ],
            "target": "main",
            "offsetX": 42.21875,
            "offsetY": 13
        },
        {
            "type": "click",
            "selectors": [
                [
                    "body > app-root > app-user-layout > div > div.body > div.content-page > app-schedule-user > div > div > div > div > div > div.manage-button-container > button > span"
                ]
            ],
            "target": "main",
            "offsetX": 105.5,
            "offsetY": 16.625
        },
        {
            "type": "click",
            "selectors": [
                [
                    "#mat-tab-content-0-0 > div > div > app-booking-lesson > div > div > app-card > div > div > div > div > div > div.c-left > div:nth-child(1) > app-toggle-slider > div.controls > div:nth-child(2) > mat-icon"
                ]
            ],
            "target": "main",
            "offsetX": 10,
            "offsetY": 19.5
        },
        {
            "type": "click",
            "selectors": [
                [
                    "#mat-tab-content-0-0 > div > div > app-booking-lesson > div > div > app-card > div > div > div > div > div > div.c-left > div:nth-child(1) > app-toggle-slider > div.slider-container > div:nth-child(1) > div:nth-child(2) > div > app-toggle-slider-button:nth-child(2) > div > div > span"
                ]
            ],
            "target": "main",
            "offsetX": 58.5,
            "offsetY": 7.5
        },
        {
            "type": "click",
            "selectors": [
                [
                    "#mat-select-6 > div > div.mat-select-value"
                ]
            ],
            "target": "main",
            "offsetX": 360,
            "offsetY": 15
        },
        {
            "type": "click",
            "selectors": [
                [
                    "#mat-option-15 > span"
                ]
            ],
            "target": "main",
            "offsetX": 112,
            "offsetY": 26
        },
        {
            "type": "click",
            "selectors": [
                [
                    "aria/June 29, 2022",
                    "aria/[role=\"generic\"]"
                ],
                [
                    "#mat-tab-content-0-0 > div > div > app-booking-lesson > div > div > app-card > div > div > div > div > div > div.c-left > div:nth-child(3) > div > sat-calendar > div > sat-month-view > table > tbody > tr:nth-child(5) > td:nth-child(4) > div"
                ]
            ],
            "target": "main",
            "offsetX": 31.84375,
            "offsetY": 20
        },
        {
            "type": "click",
            "selectors": [
                [
                    "#mat-tab-content-0-0 > div > div > app-booking-lesson > div > div > app-card > div > div > div > div > div > div.c-right > div > div > div > div > div > div > app-toggle-slider-button:nth-child(40) > div > div > span"
                ]
            ],
            "target": "main",
            "offsetX": 20.5,
            "offsetY": 15.5
        },
        {
            "type": "click",
            "selectors": [
                [
                    "aria/Select this lesson"
                ],
                [
                    "#mat-tab-content-0-0 > div > div > app-booking-lesson > div > div > app-card > div > div > div > div > div > div.c-right > div.bottom.ng-star-inserted > app-button > button"
                ]
            ],
            "target": "main",
            "offsetX": 102.25,
            "offsetY": 31.5
        },
        {
            "type": "click",
            "selectors": [
                [
                    "aria/Go to payment method"
                ],
                [
                    "body > app-root > app-user-layout > div > div.body > div.content-page > app-schedule-manager-user > div > div.shadow-container > div > app-resume-booking > div > div > div.bottom > app-button > button"
                ]
            ],
            "target": "main",
            "offsetX": 144,
            "offsetY": 24.5
        },
        {
            "type": "click",
            "selectors": [
                [
                    "#radiobtn509233587 > label > div.mat-radio-container > div.mat-radio-outer-circle"
                ]
            ],
            "target": "main",
            "offsetX": 7,
            "offsetY": 11
        },
        {
            "type": "click",
            "selectors": [
                [
                    "aria/Book Now"
                ],
                [
                    "body > app-root > app-user-layout > div > div.body > div.content-page > app-payment > div > app-button > button"
                ]
            ],
            "target": "main",
            "offsetX": 71,
            "offsetY": 27
        },
        {
            "type": "change",
            "value": "12",
            "selectors": [
                [
                    "#cardNumberInput"
                ]
            ],
            "target": "main"
        },
        {
            "type": "change",
            "value": "test12",
            "selectors": [
                [
                    "aria/[role=\"dialog\"]",
                    "aria/[role=\"textbox\"]"
                ],
                [
                    "#mat-input-27"
                ]
            ],
            "target": "main"
        },
        {
            "type": "click",
            "selectors": [
                [
                    "aria/Confirm Purchase"
                ],
                [
                    "#mat-dialog-0 > app-message-pop-up > div > div > div.button-container > app-button > button"
                ]
            ],
            "target": "main",
            "offsetX": 96.5,
            "offsetY": 21
        },
        {
            "type": "click",
            "selectors": [
                [
                    "aria/Exit"
                ],
                [
                    "body > app-root > app-user-layout > div > div.body > div.content-page > app-appointment-set > div > div.card > div > div.buttons > app-button > button"
                ]
            ],
            "target": "main",
            "offsetX": 41,
            "offsetY": 20.5
        },
        {
            "type": "click",
            "selectors": [
                [
                    "aria/Add to your schedule",
                    "aria/[role=\"paragraph\"]"
                ],
                [
                    "body > app-root > app-user-layout > div > div.menu > div.menu-content > button.menu-item.sub-menu.sub-menu--active > p"
                ]
            ],
            "target": "main",
            "offsetX": 86,
            "offsetY": 10
        },
        {
            "type": "click",
            "selectors": [
                [
                    "body > app-root > app-user-layout > div > div.body > div.content-page > app-schedule-manager-user > div > div.button-container > button > span > span"
                ]
            ],
            "target": "main",
            "offsetX": 29,
            "offsetY": 4.5
        },
        {
            "type": "click",
            "selectors": [
                [
                    "#mat-tab-label-1-1 > div > span.sub.ng-star-inserted"
                ]
            ],
            "target": "main",
            "offsetX": 23,
            "offsetY": 11.5
        },
        {
            "type": "click",
            "selectors": [
                [
                    "#mat-tab-content-1-1 > div > div > app-booking-class > div > div > div > mat-form-field > div > div.mat-form-field-flex > div.mat-form-field-infix"
                ]
            ],
            "target": "main",
            "offsetX": 538,
            "offsetY": 28.5
        },
        {
            "type": "click",
            "selectors": [
                [
                    "#mat-option-46 > span"
                ]
            ],
            "target": "main",
            "offsetX": 82,
            "offsetY": 26
        },
        {
            "type": "click",
            "selectors": [
                [
                    "#mat-tab-content-1-1 > div > div > app-booking-class > div > div > div > mat-form-field.full-width.mat-form-field.ng-tns-c24-70.mat-primary.mat-form-field-type-mat-select.mat-form-field-appearance-outline.mat-form-field-can-float.ng-star-inserted > div > div.mat-form-field-flex > div.mat-form-field-infix"
                ]
            ],
            "target": "main",
            "offsetX": 159,
            "offsetY": 52
        },
        {
            "type": "click",
            "selectors": [
                [
                    "#mat-option-49 > span"
                ]
            ],
            "target": "main",
            "offsetX": 120,
            "offsetY": 24.5
        },
        {
            "type": "click",
            "selectors": [
                [
                    "#mat-tab-content-1-1 > div > div > app-booking-class > div > div > div > div > div:nth-child(5) > div > div:nth-child(1)"
                ]
            ],
            "target": "main",
            "offsetX": 120.5,
            "offsetY": 17.5
        },
        {
            "type": "click",
            "selectors": [
                [
                    "aria/Go to payment method"
                ],
                [
                    "body > app-root > app-user-layout > div > div.body > div.content-page > app-schedule-manager-user > div > div.shadow-container > div > app-resume-booking > div > div > div.bottom > app-button > button"
                ]
            ],
            "target": "main",
            "offsetX": 142,
            "offsetY": 34.5
        },
        {
            "type": "click",
            "selectors": [
                [
                    "#radiobtn509233587 > label > div.mat-radio-container > div.mat-radio-inner-circle"
                ]
            ],
            "target": "main",
            "offsetX": -0.989990234375,
            "offsetY": -0.989990234375
        },
        {
            "type": "click",
            "selectors": [
                [
                    "aria/Book Now"
                ],
                [
                    "body > app-root > app-user-layout > div > div.body > div.content-page > app-payment > div > app-button > button"
                ]
            ],
            "target": "main",
            "offsetX": 57,
            "offsetY": 32
        },
        {
            "type": "change",
            "value": "12",
            "selectors": [
                [
                    "#cardNumberInput"
                ]
            ],
            "target": "main"
        },
        {
            "type": "change",
            "value": "test12",
            "selectors": [
                [
                    "aria/[role=\"dialog\"]",
                    "aria/[role=\"textbox\"]"
                ],
                [
                    "#mat-input-43"
                ]
            ],
            "target": "main"
        },
        {
            "type": "change",
            "value": "12",
            "selectors": [
                [
                    "#cardNumberInput"
                ]
            ],
            "target": "main"
        },
        {
            "type": "click",
            "selectors": [
                [
                    "aria/[role=\"dialog\"]",
                    "aria/[role=\"textbox\"]"
                ],
                [
                    "#mat-input-43"
                ]
            ],
            "target": "main",
            "offsetX": 86,
            "offsetY": 10.5
        },
        {
            "type": "click",
            "selectors": [
                [
                    "#mat-dialog-1 > app-message-pop-up > div > div > mat-form-field"
                ]
            ],
            "target": "main",
            "offsetX": 1,
            "offsetY": 93
        },
        {
            "type": "click",
            "selectors": [
                [
                    "aria/Confirm Purchase"
                ],
                [
                    "#mat-dialog-1 > app-message-pop-up > div > div > div.button-container > app-button > button"
                ]
            ],
            "target": "main",
            "offsetX": 107.5,
            "offsetY": 25
        },
        {
            "type": "click",
            "selectors": [
                [
                    "aria/Exit"
                ],
                [
                    "body > app-root > app-user-layout > div > div.body > div.content-page > app-appointment-set > div > div.card > div > div.buttons > app-button > button"
                ]
            ],
            "target": "main",
            "offsetX": 30,
            "offsetY": 15.5
        }
    ]
};

export async function run(extension) {
  const runner = await createRunner(flow, extension);
  await runner.run();
}

if (process && import.meta.url === url.pathToFileURL(process.argv[1]).href) {
  await run();
}
      