/**
 * @swagger
 * components:
 *  schemas:
 *      teams:
 *          type: object
 *          required:
 *              - teamName
 *              - image
 *          properties:
 *           teamName:
 *            type: string
 *            description: name of the team
 *            required: true
 *           image:
 *            type: string
 *            description: images link
 *           
*
*/

/**
 * @swagger
 * /teams:
 *  get:
 *      tags: ['teams']
 *      summary: return all teams
 *      responses:
 *          '200':    
 *              description: returns all teams
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items: 
 *                              $ref: '#/components/schemas/User'
 *          '500':
 *              description: 
*/

/**
 * @swagger
 * /teams:
 *  post:
 *      tags: ['teams']
 *      summary: creates a new team
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          team_name:
 *                              type: string
 *                              description: name of the Team
 *                              required: true    
 *                          images:
 *                              type: string
 *                              description: image url
 *                      example:
 *                          team_name: AppTeam  
 *                          images: https://www.dictionary.com/e/wp-content/uploads/2021/09/20210922_atw_memeStonk_800x800-300x300.png
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
 *      
*/


