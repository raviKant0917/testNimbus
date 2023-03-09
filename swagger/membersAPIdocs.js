/**
 * @swagger
 * components:
 *  schemas:
 *      teams:
 *          type: object
 *          required:
 *              - teamName
 *              - member_name
 *          properties:
 *           team_name:
 *            type: string
 *            description: name of the team
 *            required: true
 *           member_name:
 *            type: string
 *            description: name of member
 *           images:
 *            type: string
 *            description: direct url of image
 *           
*
*/

/**
 * @swagger
 * /members:
 *  get:
 *      tags: ['members']
 *      summary: return all members
 *      responses:
 *          '200':    
 *              description: returns all members
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items: 
 *                              $ref: '#/components/schemas/members'
 *          '500':
 *              description: internal server erorr
*/

/**
 * @swagger
 * /members:
 *  post:
 *      tags: ['members']
 *      summary: post a new member
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
 *                          member_name:
 *                              type: string
 *                              description: member name
 *                              required: true
 *                          images:
 *                              type: string
 *                              description:
 *                      example:
 *                          team_name: AppTeam  
 *                          member_name: JATIN
 *                          images: https://cdn.vox-cdn.com/thumbor/8CIbT8aMgmLzG6vTzbWil2LwdWk=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19938259/3zlqxf_copy.jpg
 *      responses:
 *          '200':    
 *              description: returns all members
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


