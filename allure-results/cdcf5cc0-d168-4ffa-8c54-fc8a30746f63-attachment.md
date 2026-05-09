# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/get-method.spec.js >> POST call to create a booking
- Location: tests/api/get-method.spec.js:32:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "hello"
Received: "Gajapathy"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | import { loadTestData } from '../../utils/test-data-loader'
  3  | import { create } from 'node:domain'
  4  | 
  5  | let payload
  6  | let createBookingPayload
  7  | let accessToken
  8  | 
  9  | test.beforeAll(async () => {
  10 |     payload = await loadTestData('./test-data/api-data/user.json')
  11 |     createBookingPayload = await loadTestData('./test-data/api-data/create-booking.json')
  12 | })
  13 | 
  14 | test('Get access token test', async ({ request }) => {
  15 |     const response = await request.post('https://restful-booker.herokuapp.com/auth', {
  16 |         headers: {
  17 |             'Content-Type': 'application/json',
  18 | 
  19 |         },
  20 |         data: payload
  21 |     })
  22 |     const responseBody = await response.json()
  23 | 
  24 |     expect(response.status()).toBe(200)
  25 |     accessToken = responseBody.token
  26 |     // console.log('Response Body:', responseBody)
  27 |     // console.log('Token:', responseBody.token)
  28 |     // console.log(response.status())
  29 | 
  30 | })
  31 | 
  32 | test('POST call to create a booking', async ({ request }) => {
  33 |     const response = await request.post('https://restful-booker.herokuapp.com/booking', {
  34 |         'headers': {
  35 |             'content-type': 'application/json',
  36 |             'Authorization': `Bearer ${accessToken}`
  37 |         },
  38 |         data: createBookingPayload
  39 |     })
  40 |     const responseBody = await response.json();
  41 |     console.log('Create Booking Response:', responseBody)
> 42 |     expect(responseBody.booking.firstname).toBe('hello')
     |                                            ^ Error: expect(received).toBe(expected) // Object.is equality
  43 | 
  44 | })
```