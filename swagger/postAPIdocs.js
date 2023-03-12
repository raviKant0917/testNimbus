/**
 * @swagger
 * components:
 *  schemas:
 *      postSchema:
 *          type: object
 *          properties:
 *           caption:
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
 *           likedByMe:
 *              type: Boolean
 *              default: false
 *              description: whether user has liked post himself/herself. 
 *           commentCount:
 *              type: Number
 *              description: number of comments on a post
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
 *      tags: ['Posts']
 *      summary: creates a new post
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                          type: object
 *                          properties:
 *                              caption:
 *                                  type: string
 *                                  description: caption of post
 *                              creator:
 *                                  type: string
 *                                  description: userId
 *                              likeCount: 
 *                                  type: string
 *                                  description: number of likes on a particular post
 *                              likes: 
 *                                  type: array
 *                                  items: 
 *                                      type: string
 *                                      description: ids of persons who liked the post
 *                              likedByMe:
 *                                  type: Boolean
 *                                  default: false
 *                                  description: whether user has liked post himself/herself. 
 *                              commentCount:
 *                                  type: Number
 *                                  description: number of comments on a post
 *                              comments: 
 *                                  type: array
 *                                  items: 
 *                                      type: object
 *                                      description: ids of users who commented
 *                              createdAt:
 *                                  type: Date
 *                                  description: date of post created 
 *                          example:
 *                              caption: 6-march target to become potd,
 *                              creator: 63e0fbe4e0521b80d5a72efb,
 *                              photo: potdpotdpotdpotdpotd,
 *                              isVideo: true                         
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

/**
 * @swagger
 * /posts:
 *  get:
 *      tags: ['Posts']
 *      summary: returns all posts
 *      parameters:
 *       - in: query
 *         name: page
 *         type: Number
 *         default: 1
 *         description: page number 
 *       - in: query
 *         name: limit
 *         type: Number
 *         default: 10
 *         description: The numbers of posts in a page.
 *      responses:
 *          '200':    
 *              description: all users with "key" in usernames
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                                  
 *                              caption:
 *                                  type: string
 *                                  description: caption of post
 *                              creator:
 *                                  type: string
 *                                  description: userId
 *                              likeCount: 
 *                                  type: string
 *                                  description: number of likes on a particular post
 *                              likes: 
 *                                  type: array
 *                                  items: 
 *                                      type: string
 *                                      description: ids of persons who liked the post
 *                              likedByMe:
 *                                  type: Boolean
 *                                  default: false
 *                                  description: whether user has liked post himself/herself. 
 *                              commentCount:
 *                                  type: Number
 *                                  description: number of comments on a post
 *                              comments: 
 *                                  type: array
 *                                  items: 
 *                                      type: object
 *                                      description: ids of users who commented
 *                              createdAt:
 *                                  type: Date
 *                                  description: date of post created 
 *               
 *          '500':
 *              description: could not fetch data!
 */

/**
 * @swagger
 * /posts/{id}:
 *  patch:
 *      tags: ['Posts']
 *      summary: update a post
 *      parameters: 
 *          - in: path
 *            description: id of post
 *            name: id
 *            type: string
 *            required: true
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          caption:
 *                           type: string
 *                           description: caption of post
 *                          creator:
 *                           type: string
 *                           description: userId
 *                          likeCount: 
 *                           type: string
 *                           description: number of likes on a particular post
 *                          likes: 
 *                           type: array
 *                           items: 
 *                               type: string
 *                               description: ids of persons who liked the post
 *                          likedByMe:
 *                           type: Boolean
 *                           default: false
 *                           description: whether user has liked post himself/herself. 
 *                          commentCount:
 *                           type: Number
 *                           description: number of comments on a post
 *                          comments: 
 *                           type: array
 *                           items: 
 *                               type: object
 *                               description: ids of users who commented
 *                          createdAt:
 *                           type: Date
 *                           description: date of post created 
 *                          example:
 *                              caption: 6-march target to become potd,
 *                              creator: 63e0fbe4e0521b80d5a72efb,
 *                              photo: potdpotdpotdpotdpotd,
 *                              isVideo: true                         
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
 * /posts/{id}:
 *  delete:
 *      tags: ['Posts']
 *      summary: delete a post
 *      parameters: 
 *          - in: path 
 *            name: id 
 *            type: string 
 *            required: true 
 *            description: string id of post to delete 
 *      responses:
 *          '202':    
 *              description: user was deleted 
 *          '500':
 *              description: something went wrong! 
 */

/**
 * @swagger
 * /posts/{id}/like:
 *  put:
 *      tags: ['Posts']
 *      summary: like/unlike a post with given post Id
 *      parameters:
 *          - in: path
 *            name: id
 *            type: string
 *            required: true
 *            description: id of the post    
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          id:
 *                              type: string
 *                              description: id of user who like/unlike the post
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


/**
 * @swagger
 * /posts/{id}/comment:
 *  put:
 *      tags: ['Posts']
 *      summary: comment on a post
 *      parameters:
 *          - in: path
 *            name: id
 *            type: string
 *            required: true
 *            description: id of the post    
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          userId:
 *                              type: string
 *                              description: id of user who like/unlike the post
 *                          text: 
 *                              type: string
 *                              description: text of the comment
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


//delete a comment

/**
 * @swagger
 * /posts/{id}/comment/{commentId}:
 *  put:
 *      tags: ['Posts']
 *      summary: deletes a comment
 *      parameters:
 *          - in: path
 *            name: id
 *            type: string
 *            required: true
 *            description: id of the post 
 *          - in: path
 *            name: commentId
 *            type: string
 *            required: true
 *            description: id of comment to be deleted 
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


/**
 * @swagger
 * /potd:
 *  get:
 *      tags: ['Posts']
 *      summary: returns post of the day
 *      responses:
 *          '200':    
 *              description: all users with "key" in usernames
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *          '500':
 *              description: could not fetch data!
 */

/**
 * @swagger
 * /{userId}/posts:
 *  get:
 *      tags: ['Posts']
 *      summary: returns all posts of a particular user
 *      parameters:
 *          - in: path
 *            name: userId
 *            type: string
 *            required: true
 *            description: id of the user 
 *      responses:
 *          '200':    
 *              description: all posts with "key" in usernames
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                                  
 *                              caption:
 *                                  type: string
 *                                  description: caption of post
 *                              creator:
 *                                  type: string
 *                                  description: userId
 *                              likeCount: 
 *                                  type: string
 *                                  description: number of likes on a particular post
 *                              likes: 
 *                                  type: array
 *                                  items: 
 *                                      type: string
 *                                      description: ids of persons who liked the post
 *                              likedByMe:
 *                                  type: Boolean
 *                                  default: false
 *                                  description: whether user has liked post himself/herself. 
 *                              commentCount:
 *                                  type: Number
 *                                  description: number of comments on a post
 *                              comments: 
 *                                  type: array
 *                                  items: 
 *                                      type: object
 *                                      description: ids of users who commented
 *                              createdAt:
 *                                  type: Date
 *                                  description: date of post created 
 *               
 *          '500':
 *              description: could not fetch data!
 */