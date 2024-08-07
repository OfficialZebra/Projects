
const request = require('supertest');
//bring in our express app
const server = require('../server');


//clos the server instance after all tests are completed
afterAll((done) => {
    server.close(done);
});


describe('GET /bucket', () => {
    //Test implemenatation here
    test('should return all bucketlist items', async () => {
        const response = await request(server).get('/bucket');
        expect(response.status).toBe(200); //sends okay response back
        expect(Array.isArray(response.body)).toBe(true); //that we have our bl array
        console.log(response.body);
        expect(response.body).toHaveLength(3) //checks we have the initial 3 items
        expect(response.headers['content-type']).toMatch(/application\/json/); //server is sending us to the content type
    })
});


describe('POST /bucket', () => { 
    //Happy case
    test('should create a new bucketlist item', async () => {
        const newItemDescription = 'Test item';

        //Send a POST request to the '/bucket' endpoint with a new item description
        const response = await request(server)
        .post('/bucket')
        .send({description: newItemDescription});
        //Check if the response status code is 201
        expect(response.status).toBe(201);
        expect(response.body.description).toBe(newItemDescription);
        expect(response.body.isComplete).toBe(false)
    });

    //Sad case
    test('should return an error if no description is provided', async () => {
        const response = await request(server)
        .post('/bucket')
        //.send();

        expect(response.status).toBe(400);
        expect(response.body.error).toBeDefined();
        expect(response.body.error).toBe('Need a valid description string!')
    });
});


describe('PUT /bucket/:id', () => {
    //Happy case
    test('should update a bucketlist item', async () => {
        const itemId = 1

        const response = await request(server)
        .put(`/bucket/${itemId}`)

        expect(response.status).toBe(200);
        expect(response.body.isComplete).toBeDefined();
        expect(response.body.isComplete).toBe(true);

    });

    //Sad case
    test('should return error if item ID does not exist', async () => {
        const itemId = "iddoesnotexist90909098"

        const response = await request(server)
            .put(`/bucket/${itemId}`)

        expect(response.status).toBe(404);
        expect(response.body.error).toBeDefined();
        expect(response.body.error).toBe("Id does not exist for updating")

    });
});



//Delete
describe("DELETE /bucket/:id", () => {
   
   
    //Happy Case
    test('Should delete a bucketlist item', async () => {
        const itemId = 1;

        const response = await request(server).delete(`/bucket/${itemId}`)

        expect(response.status).toBe(200)
        console.log(response.body)
        expect(response.body.message).toBe("Success")
        expect(response.body.deletedItem[0].id).toBe(itemId)

    })



    //Sad case
    test("Should return error if item ID does not exist", async () => {
        const itemId = 999;

        const response = await request(server).delete(`/bucket/${itemId}`)
        expect(response.status).toBe(404)
        expect(response.body.error).toBeDefined()
    })


})