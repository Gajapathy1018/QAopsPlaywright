import { test, expect } from '@playwright/test'
import { loadTestData } from '../../utils/test-data-loader'
import { create } from 'node:domain'

let payload
let createBookingPayload
let accessToken

test.beforeAll(async () => {
    payload = await loadTestData('./test-data/api-data/user.json')
    createBookingPayload = await loadTestData('./test-data/api-data/create-booking.json')
})

test('Get access token test', async ({ request }) => {
    const response = await request.post('https://restful-booker.herokuapp.com/auth', {
        headers: {
            'Content-Type': 'application/json',

        },
        data: payload
    })
    const responseBody = await response.json()

    expect(response.status()).toBe(200)
    accessToken = responseBody.token
    console.log('Response Body:', responseBody)
    console.log('Token:', responseBody.token)
    console.log(response.status())

})

test('POST call to create a booking', async ({ request }) => {
    const response = await request.post('https://restful-booker.herokuapp.com/booking', {
        'headers': {
            'content-type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
        data: createBookingPayload
    })
    const responseBody = await response.json();
    console.log('Create Booking Response:', responseBody)
    expect(responseBody.booking.firstname).toBe(createBookingPayload.firstname)
    expect(typeof responseBody.booking.lastname).toBe('string')
})