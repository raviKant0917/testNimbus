/**
 * @swagger
 * components:
 *  schemas:
 *      QuestionModel:
 *          type: object
 *          required:
 *              - id
 *              - question
 *              - options
 *              - answer
 *          properties:
 *           id:
 *            type: integer
 *            description: question id
 *           options: 
 *            type: array
 *            items: 
 *              type: string
 *            description: all options of question
 *           question:
 *            type: string
 *            description: question
 *           answer: 
 *            type: Integer
 *            description: correct option - 1,  if option 4 is correct => answer = 3   
 *          example:
 *           id: 1
 *           question: who's your daddy
 *           options: [{'option1':'shubham'},{'option2':'shubham'},{'option3':'shubham'},{'option4':'shubham'},]
 *           answer: 2
 *          
*/


/**
 * @swagger
 * components:
 *  schemas:
 *      results:
 *          type: object
 *          required:
 *              - username
 *              - result
 *              - points
 *          properties:
 *           username:
 *            type: string
 *            description: username of the user
 *           result: 
 *            type: string
 *            description: total score of the user
 *           points:
 *            type: integer
 *           achieved:
 *            type: string
 *            description: points achieved
 *          example:
 *           username: 1
 *           result: Ist
 *           points: 5
 *           achieved: 2
 *          
*/

/**
 * @swagger
 * /questions:
 *  get:
 *      summary: Returns the list of all questions
 *      responses:
 *          '200':    
 *              description: list of all questions
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items:
 *                              $ref: '#/components/schemas/QuestionModel' 
*/


/**
 * @swagger
 * /questions:
 *  post:
 *      summary: creates a new question
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      items: 
 *                          $ref: '#/components/schemas/QuestionModel'
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
 * /questions:
 *  delete:
 *      summary: delete a question
 *      responses:
 *          '200':    
 *              description: user was deleted 
 *          '500':
 *              description: something went wrong!
 */


//result api docs

/**
 * @swagger
 * /result:
 *  get:
 *      summary: Returns the list of all user's result
 *      responses:
 *          '200':    
 *              description: everyone's result
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items:
 *                              $ref: '#/components/schemas/results' 
*/

/**
 * @swagger
 * /result:
 *  post:
 *      summary: creates a new result
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      items: 
 *                          $ref: '#/components/schemas/results'
 *      responses:
 *          '200':    
 *              description: creates result of the user
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
 * /result:
 *  delete:
 *      summary: delete result
 *      responses:
 *          '200':    
 *              description: delete result 
 *          '500':
 *              description: something went wrong!
 */