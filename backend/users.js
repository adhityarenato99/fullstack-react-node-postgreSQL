const pool = require('./database')

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if(error) {
            throw error
        }
        response.status(200).json(results.rows)
    });
}

const createUser = (request, response) => {
    const {name, email } = request.body

    pool.query('INSERT INTO users(name, email) VALUES($1, $2)', [name, email], (error, results) => {
        if(error) {
            throw error      
        }
        response.status(201).send('User added successfully');
    });
}

const getUserById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if(error) {
            throw error
        }
        response.status(200).json(results.rows[0])
    })
}

const updateUser = (request, response) => {
    const id = parseInt(request.params.id);
    const { name, email } = request.body

    pool.query(
        'UPDATE users SET name = $1, email = $2 WHERE id = $3',
        [name, email, id],
        (error, results) => {
            if(error) {
                throw error
            }
            response.status(200).send(`User updated with ID: ${id}`)
        }
    )
}

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM users WHERE id=$1', [id], (error, results) => {
        if(error) {
            throw error
        }
        response.status(200).send(`User deleted with id: ${id}`);
    })
}

module.exports = {
    getUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
} 

// only for testing
//module.exports = {getUsers}