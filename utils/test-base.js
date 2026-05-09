
import { test as base } from '@playwright/test'


export const customtest = base.extend({
    testDataForLogin: {
        "username": "customusername",
        "password": "custompassword",
        "troubleshoot": {
            "countryCode": "91",
            "countryName": "Albania",
            "facility": "View Rights",
            "index": 3
        }
    },
    testDataForRegister: {
        "password": "mycustomepassword"
    }

})


