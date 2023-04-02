/**
 * @swagger
 * components:
 *  securitySchemes:
 *      bearerAuth:
 *          type: http
 *          scheme: bearer
 *          bearerFormat: JWT
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
 *           image:
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
 *                          teamId:
 *                              type: string
 *                              description: id of the team
 *                          team_name:
 *                              type: string
 *                              description: name of the Team
 *                              required: true    
 *                          member_name:
 *                              type: string
 *                              description: member name
 *                              required: true
 *                          image:
 *                              type: string
 *                              description:
 *                          position: 
 *                              type: string
 *                              description: position in the respective club
 *                      example:
 *                          teamId: 640788814470496094b3a488 
 *                          member_name: JATIN
 *                          position: Second Year
 *                          year: 2
 *                          image: https://cdn.vox-cdn.com/thumbor/8CIbT8aMgmLzG6vTzbWil2LwdWk=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19938259/3zlqxf_copy.jpg
 *                          instagram: https://www.instagram.com/
 *                          github: https://github.com/
 *                          linkedin: https://linkedin.com/
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
 *              description: could not fetch data!
 *      
*/


/**
 * @swagger
 * /teams/{id}:
 *  get:
 *      tags: ['members']
 *      summary: Returns all members with given team id
 *      parameters:
 *          - in: path
 *            name: id
 *            description: id of a team
 *          - in: query
 *            name: year
 *            type: Number
 *            default: 2
 *            description: academic year of the member
 *            schema:
 *              type: string
 *            required: true
 *      responses:
 *          '200':    
 *              description: request was successful
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object' 
 *          '404':
 *              description: user does not exist
*/


/**
 * @swagger
 * /members/{id}:
 *  patch:
 *      tags: ['members']
 *      summary: update a member 
 *      parameters: 
 *          - in: path
 *            name: id
 *            description: id of the member
 *            type: string
 *            required: true
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          teamId:
 *                              type: string
 *                              description: id of the team
 *                          member_name:
 *                              type: string
 *                              description: member name
 *                              required: true
 *                          image:
 *                              type: string
 *                              description:
 *                          position: 
 *                              type: string
 *                              description: position in the respective club
 *                      example:
 *                          teamId: 640788814470496094b3a488 
 *                          member_name: JATIN
 *                          position: Core Coordinator
 *                          image: https://cdn.vox-cdn.com/thumbor/8CIbT8aMgmLzG6vTzbWil2LwdWk=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19938259/3zlqxf_copy.jpg

 *                          
 *      responses:
 *          '200':    
 *              description: member upadted
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *          '500':
 *              description: could not fetch data!
*/


