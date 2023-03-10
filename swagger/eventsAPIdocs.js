/**
 * @swagger
 * components:
 *  schemas:
 *      eventsSchema:
 *          type: object
 *          properties:
 *           name:
 *            type: string
 *            description: name of event
 *           startDate:
 *            type: string
 *            description: start Date of event
 *           endDate: 
 *            type: string
 *            description: end date of event
 *           venue: 
 *            type: array
 *            description: venue of the event
 *           info:
 *              type: string
 *              description: info about the event 
 *           image:
 *              type: string
 *              description: url of the image
 *           isWorkshop: 
 *            type: Booelan
 *           regUrl:
 *            type: string
 *            description: registration url 
*
*/


/**
 * @swagger
 * /events:
 *  get:
 *      tags: ['Events']
 *      summary: returns all events
 *      responses:
 *          '200':    
 *              description: all users with "key" in usernames
 *              content: 
 *                  application/json:
 *                      schema:
 *                              
 *          '500':
 *              description: could not fetch data!
 */


/**
 * @swagger
 * /events:
 *  post:
 *      tags: ['Events']
 *      summary: create a new event
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                          type: object
 *                          properties:
 *                              name:
 *                                  type: string
 *                                  description: name of event
 *                              startDate:
 *                                  type: string
 *                                  description: startDate and time of event
 *                              endDate: 
 *                                  type: string
 *                                  description: endDate and time of event
 *                              info: 
 *                                  type: string
 *                                  description: info about event 
 *                          example:
 *                              name: HacknHills,
 *                              startDate: 2023-02-06T13:08:52,
 *                              endDate: 2023-03-10T00:36:08,
 *                              info: Hacked hIlls
 *                              isWorkshop: true                         
 *
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
