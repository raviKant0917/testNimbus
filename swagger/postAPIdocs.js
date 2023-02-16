/**
 * @swagger
 * components:
 *  schemas:
 *      postSchema:
 *          type: object
 *          properties:
 *           title:
 *            type: string
 *            description: caption of post
 *           creator:
 *            type: string
 *            description: userId
 *           likeCount: 
 *            type: string
 *            description: number of likes on a particular post
 *           likes: 
 *            type: array
 *            items: 
 *              type: string
 *            description: all options of question
 *           comments: 
 *            type: array
 *            items: 
 *              type: object
 *            description: all options of question
 *           createdAt:
 *            type: Date
 *            description: date of post created  
 *           
 *          
*
*/

/**
 * @swagger
 * /posts:
 *  post:
 *      summary: creates a new post
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      items: 
 *                          $ref: '#/components/schemas/postSchema'
 *      responses:
 *          '201':    
 *              description: all users with "key" in usernames
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items:
 *                              $ref: '#/components/schemas/User' 
 *          '500':
 *              description: could not fetch data!
 */

/**
 * @swagger
 * /posts:
 *  get:
 *      summary: returns all posts
 *      responses:
 *          '200':    
 *              description: all users with "key" in usernames
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items:
 *                              $ref: '#/components/schemas/User' 
 *          '500':
 *              description: could not fetch data!
 */

/**
 * @swagger
 * /posts/{id}:
 *  patch:
 *      summary: update a user 
 *      parameters: 
 *          - in: path
 *            name: id
 *            type: string
 *            required: true
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      items: 
 *                          $ref: '#/components/schemas/postSchema'
 *      responses:
 *          '202':    
 *              description: all users with "key" in usernames
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items:
 *                              $ref: '#/components/schemas/User' 
 *          '500':
 *              description: could not fetch data!
 *          '404':
 *              description: user not found!
 */

/**
 * @swagger
 * /users/{id}:
 *  delete:
 *      summary: delete a user 
 *      parameters: 
 *          - in: path
 *            name: id
 *            type: string
 *            required: true
 *            description: string id of user to delete
 *      responses:
 *          '202':    
 *              description: user was deleted 
 *          '500':
 *              description: something went wrong!
 */

