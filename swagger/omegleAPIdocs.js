/**
 * @swagger
 * components:
 *  schemas:
 *      Room:
 *          type: object
 *          required:
 *              - user1Id
 *          properties:
 *           user1Id:
 *            type: string
 *            description: id of the first user
 *           user2Id:
 *            type: string
 *            description: id of second user
 *           status:
 *            type: string
 *            description: oneUser = 1 user in a room || filled = room is full
 *          example:
 *           user1Id: 7ds98f79sd87f98sd7
 *           user2Id: 24kj32h4kjh32kj4h
 *           status: filled
 *
 *
 */

/**
 * @swagger
 * /room:
 *  get:
 *      tags: ['Omegle']
 *      summary: Returns all rooms
 *      responses:
 *          '200':    
 *              description: A single user
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items:
 *                              $ref: '#/components/schemas/Room' 
 *          '404':
 *              description: user does not exist
*/


/**
 * @swagger
 * /room/{userId}:
 *  get:
 *      tags: ['Omegle']
 *      summary: user joins a room
 *      parameters: 
 *          - in: path
 *            name: userId
 *            type: string
 *            required: true    
 *      responses:
 *          '201':    
 *              description: successfully joined a room
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items:
 *                              $ref: '#/components/schemas/Room' 
 *          '500':
 *              description: failed
 *      
*/


/**
 * @swagger
 * /room/{roomId}:
 *  get:
 *      tags: ['Omegle']
 *      summary: returns the room with given roomId
 *      parameters: 
 *          - in: path
 *            name: roomId
 *            type: string
 *            required: true    
 *      responses:
 *          '200':    
 *              description: successfully joined a room
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items:
 *                              $ref: '#/components/schemas/Room' 
 *          '500':
 *              description: failed
 *          '400': 
 *              description: room not found!
 *      
*/


/**
 * @swagger
 * /room/leave/{userId}:
 *  get:
 *      tags: ['Omegle']
 *      summary: user leaves the room
 *      parameters: 
 *          - in: path
 *            name: userId
 *            type: string
 *            required: true    
 *      responses:
 *          '200':    
 *              description: left the room
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items:
 *                              $ref: '#/components/schemas/Room' 
 *          '500':
 *              description: could not fetch data!
 *      
*/