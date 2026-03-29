import { test, expect } from '@playwright/test';

// DELETE request
test('API test - DELETE request', async ({ request }) => {

    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');

    // Validate status code
    expect(response.status()).toBe(200); // JSONPlaceholder returns 200

});


// PUT request
test('API test - PUT request', async ({ request }) => {

    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
        data: {
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1
        }
    });

    expect(response.status()).toBe(200);

    const body = await response.json();

    // Validate response body
    expect(body.title).toBe('foo');
    expect(body.body).toBe('bar');
    expect(body.userId).toBe(1);

    console.log(body);
});


// POST request
test('API test - POST request', async ({ request }) => {

    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data: {
            title: 'foo',
            body: 'bar',
            userId: 1
        }
    });

    expect(response.status()).toBe(201);

    const body = await response.json();

    // Validate response
    expect(body.title).toBe('foo');
    expect(body.body).toBe('bar');
    expect(body.userId).toBe(1);
    expect(body.id).toBeTruthy(); // new ID generated

    console.log(body);
});


// GET request
test('API test - GET request', async ({ request }) => {

    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

    expect(response.status()).toBe(200);

    const body = await response.json();

    // Validate response fields
    expect(body.id).toBe(1);
    expect(body.userId).toBe(1);
    expect(body.title).toBeTruthy();

    console.log(body);
});