/**
 * @swagger
 * /user:
 *   get:
 *     summary: get every the users
 *     description: get every the users registered!
 *     tags: ["users"]
 *     security:
 *        - BearerAuth: []
 *     responses:
 *       200:
 *         description: Returns a list of users.
 *       401:
 *          description: Unauthorized, please log in to continue
 */

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Register a new user
 *     description: Lets you create a new user!
 *     tags: ["user"]
 *     security:
 *        - BearerAuth: []
 *     requestBody:
 *          required: true
 *          content: []
 *     responses:
 *       201:
 *         description: Returns all data of the new registered user.
 *       401:
 *          description: Unauthorized, please log in to continue
 */

/**
 * @swagger
 * /user/{user_id}:
 *   put:
 *     summary: Update User Information
 *     description: Update a user's data!
 *     tags: ["user"]
 *     security:
 *        - BearerAuth: []
 *     requestBody:
 *          required: true
 *          content:[]
 *     parameters:
 *          -   in: path
 *              name: id
 *              schema:
 *                  type: integer
 *              required: true
 *              description: the Id of user.
 *     responses:
 *       200:
 *         description: Returns the user with edits made.
 *       401:
 *          description: Unauthorized, please log in to continue
 */

/**
 * @swagger
 * /user/{user_id}:
 *   delete:
 *     summary: Delete a user
 *     description: Delete a user!
 *     tags: ["user"]
 *     security:
 *        - BearerAuth: []
 *     parameters:
 *          -   in: path
 *              name: id
 *              schema:
 *                  type: integer
 *              required: true
 *              description: the Id of user
 *     responses:
 *       200:
 *         description: usuário apagado com sucesso.
 *       401:
 *          description: Unauthorized, please log in to continue
 */
