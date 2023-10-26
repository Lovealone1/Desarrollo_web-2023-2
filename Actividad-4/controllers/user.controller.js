class UserController {

    createUser(req, res) {
        const { id, nombre, apellido, correo } = req.body;
        // Aquí puedes guardar el usuario en la base de datos o hacer alguna otra acción
        res.status(201).json({
            ok: true,
            message: 'Usuario creado correctamente',
            user: { id, nombre, apellido, correo }
        });
    }

    updateUser(req, res) {
        const { id } = req.params;
        const { nombre, apellido, correo } = req.body;
        // Aquí puedes actualizar el usuario en la base de datos o hacer alguna otra acción
        res.status(200).json({
            ok: true,
            message: 'Usuario actualizado correctamente',
            user: { id, nombre, apellido, correo }
        });
    }

    getUser(req, res) {
        const { id } = req.params;
        // Aquí puedes buscar el usuario en la base de datos o hacer alguna otra acción
        const user = { id: 1, nombre: 'Daniel', apellido: 'Garcia', correo: 'daniel@gmail.com' };
        res.status(200).json({
            ok: true,
            user
        });
    }

    getUsers(req, res) {
        // Aquí puedes obtener la lista de usuarios de la base de datos o hacer alguna otra acción
        const users = [
            { id: 1, nombre: 'Daniel', apellido: 'Garcia', correo: 'daniel@gmail.com' },
            { id: 2, nombre: 'Jhonny', apellido: 'Paz', correo: 'jhonny@gmail.com' }
        ];
        res.status(200).json({
            ok: true,
            users
        });
    }

    deleteUser(req, res) {
        const { id } = req.params;

        res.status(204).json({
            ok: true,
            message: 'Usuario eliminado correctamente',
            userId: id
        });
    }
}

module.exports = UserController;
