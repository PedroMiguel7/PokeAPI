/**
 * @swagger
 * /user/{user_id}/fav:
 *   get:
 *     summary: shows all the user's favorite pokemons
 *     description: returns to all user's favorite pokemons!
 *     tags: ["favorites"]
 *     security:
 *        - BearerAuth: []
 *     parameters:
 *          -   in: path
 *              name: user_id
 *              schema:
 *                  type: integer
 *              required: true
 *              description: the Id of user.
 *     responses:
 *       200:
 *         description: Returns a list of users.
 *       401:
 *          description: Unauthorized, please log in to continue
 */

/**
 * @swagger
 * /user/{user_id}/fav:
 *   post:
 *     summary: Register favorite a pokemon
 *     description: Lets you create a new favorite a pokemon!
 *     tags: ["favorite"]
 *     security:
 *        - BearerAuth: []
 *     requestBody:
 *          required: true
 *          content: []
 *     parameters:
 *          -   in: path
 *              name: user_id
 *              schema:
 *                  type: integer
 *              required: true
 *              description: the Id of user.
 *     responses:
 *       201:
 *         description: Returns all data of the new registered user.
 *       401:
 *          description: Unauthorized, please log in to continue
 */

/**
 * @swagger
 * /user/{user_id}/fav/{id_pokemon}:
 *   put:
 *     summary: Update pokemon favorite Information
 *     description: Update a  pokemon's favorite data!
 *     tags: ["favorite"]
 *     security:
 *        - BearerAuth: []
 *     requestBody:
 *          required: true
 *          content:[]
 *     parameters:
 *          -   in: path
 *              name: user_id
 *              schema:
 *                  type: integer
 *              required: true
 *              description: the Id of user.
 *          -   in: path
 *              name: id_pokemon
 *              schema:
 *                  type: integer
 *              required: true
 *              description: the Id of pokemon.
 *     responses:
 *       200:
 *         description: Returns the pokemon favorite with edits made.
 *       401:
 *          description: Unauthorized, please log in to continue
 */

/**
 * @swagger
 * /user/{user_id}/fav/{id_pokemon}:
 *   delete:
 *     summary: Delete a pokemon favorite.
 *     description: Delete a pokemon favorite.!
 *     tags: ["favorite"]
 *     security:
 *        - BearerAuth: []
 *     parameters:
 *          -   in: path
 *              name: user_id
 *              schema:
 *                  type: integer
 *              required: true
 *              description: the Id of user.
 *          -   in: path
 *              name: id_pokemon
 *              schema:
 *                  type: integer
 *              required: true
 *              description: the Id of pokemon.
 *     responses:
 *       200:
 *         description: unfavorable pokemon deleted successfully.
 *       401:
 *          description: Unauthorized, please log in to continue
 */
