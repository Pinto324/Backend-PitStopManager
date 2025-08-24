
function authorize(roles = []) {
    // Si roles es un string, lo convertimos a array
    if (typeof roles === 'string') {
        roles = [roles];
    }
    
    return (req, res, next) => {
        // Verificar que el usuario esté autenticado
        if (!req.user) {
            return res.status(401).json({ message: 'Usuario no autenticado' });
        }
        
        // Verificar que el usuario tenga el rol requerido
        if (!roles.includes(req.user.rol.rol)) {
            return res.status(403).json({ 
                message: 'Acceso denegado. Permisos insuficientes',
                requiredRoles: roles,
                yourRole: req.user.rol.rol
            });
        }
        
        next();
    };
}

module.exports = authorize;