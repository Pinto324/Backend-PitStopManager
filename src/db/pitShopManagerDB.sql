CREATE DATABASE pitshop_manager;
USE pitshop_manager;

CREATE TABLE Rol (
    id INT AUTO_INCREMENT PRIMARY KEY,
    rol VARCHAR(50)
) ENGINE=InnoDB;

CREATE TABLE Usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100),
    username VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    rol INT NOT NULL,
    email VARCHAR(150),
    telefono VARCHAR(50),
    correo_verificado BOOLEAN,
    verificacion_activa BOOLEAN,
    FOREIGN KEY (rol) REFERENCES Rol(id)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Empleado (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT UNIQUE,
    es_mecanico BOOLEAN,
    es_interno BOOLEAN,
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Tipo_Especialidad (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo_especialidad VARCHAR(100) NOT NULL
) ENGINE=InnoDB;


CREATE TABLE Especialidad (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_empleado INT NOT NULL,
    id_tipo_especialidad INT NOT NULL,
    FOREIGN KEY (id_empleado) REFERENCES Empleado(id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (id_tipo_especialidad) REFERENCES Tipo_Especialidad(id)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Vehiculo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT,
    marca VARCHAR(100),
    modelo VARCHAR(100),
    placas VARCHAR(50),
    FOREIGN KEY (id_cliente) REFERENCES Usuario(id)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Proveedor (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    nombre_empresa VARCHAR(150),
    es_servicio BOOLEAN,
    descripcion TEXT,
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Repuesto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_repuesto VARCHAR(150)
) ENGINE=InnoDB;

CREATE TABLE Proveedor_Repuesto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_proveedor INT,
    id_repuesto INT,
    precio DOUBLE,
    FOREIGN KEY (id_proveedor) REFERENCES Proveedor(id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (id_repuesto) REFERENCES Repuesto(id)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Estado_Pedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    estado VARCHAR(50)
) ENGINE=InnoDB;


CREATE TABLE Pedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fecha_pedido DATE NOT NULL,
    fecha_entrega DATE NOT NULL,
    estado INT NOT NULL,
    FOREIGN KEY (estado) REFERENCES Estado_Pedido(id)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Estado_Pedido_Detalle (
    id INT AUTO_INCREMENT PRIMARY KEY,
    estado VARCHAR(50)
) ENGINE=InnoDB;

CREATE TABLE Pedido_Detalle (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_pedido INT,
    id_proveedor_repuesto INT,
    estado INT,
    cantidad_solicitada INT,
    FOREIGN KEY (id_pedido) REFERENCES Pedido(id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (id_proveedor_repuesto) REFERENCES Proveedor_Repuesto(id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (estado) REFERENCES Estado_Pedido_Detalle(id)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Inventario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_repuesto INT,
    cantidad INT,
    precio_unitario DECIMAL(10,2),
    FOREIGN KEY (id_repuesto) REFERENCES Repuesto(id)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Estado_Orden_Reparacion (
    id INT AUTO_INCREMENT PRIMARY KEY,
    estado VARCHAR(50)
) ENGINE=InnoDB;

CREATE TABLE Orden_Reparacion (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_vehiculo INT,
    fecha_ingreso DATE,
    hora_ingreso TIME,
    fecha_egreso DATE,
    hora_egreso TIME,
    estado INT, 
    FOREIGN KEY (id_vehiculo) REFERENCES Vehiculo(id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (estado) REFERENCES Estado_Orden_Reparacion(id)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Servicio (
    id INT AUTO_INCREMENT PRIMARY KEY,
    servicio VARCHAR(150),
    es_correctivo BOOLEAN,
    descripcion TEXT,
    tiempo_estimado INT,
    precio DOUBLE
) ENGINE=InnoDB;

CREATE TABLE Estado_Trabajo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    estado VARCHAR(50)
) ENGINE=InnoDB;

CREATE TABLE Servicio_Orden_Reparacion (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_orden_reparacion INT,
    id_servicio INT,
    id_estado_trabajo INT,
    FOREIGN KEY (id_orden_reparacion) REFERENCES Orden_Reparacion(id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (id_servicio) REFERENCES Servicio(id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (id_estado_trabajo) REFERENCES Estado_Trabajo(id)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Inventario_Orden_Reparacion (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_inventario INT,
    id_orden_reparacion INT,
    cantidad INT,
    FOREIGN KEY (id_inventario) REFERENCES Inventario(id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (id_orden_reparacion) REFERENCES Orden_Reparacion(id)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Factura (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_orden_reparacion INT,
    fecha DATE,
    total DECIMAL(10,2),
    FOREIGN KEY (id_orden_reparacion) REFERENCES Orden_Reparacion(id)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Pago (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_factura INT,
    monto DECIMAL(10,2),
    fecha DATE,
    FOREIGN KEY (id_factura) REFERENCES Factura(id)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Chat_Usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_orden_reparacion INT,
    mensaje TEXT,
    visto BOOLEAN,
    FOREIGN KEY (id_orden_reparacion) REFERENCES Orden_Reparacion(id)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Tipo_Notificacion (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo_notificacion VARCHAR(100)
) ENGINE=InnoDB;

CREATE TABLE Notificacion (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_pedido INT,
    id_tipo_notificacion INT,
    comentario TEXT,
    fecha DATE,
    hora TIME,
    FOREIGN KEY (id_pedido) REFERENCES Pedido(id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (id_tipo_notificacion) REFERENCES Tipo_Notificacion(id)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Empleado_Orden_Reparacion (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_empleado INT,
    id_orden_reparacion INT,
    es_especialista BOOLEAN,
    FOREIGN KEY (id_empleado) REFERENCES Empleado(id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (id_orden_reparacion) REFERENCES Orden_Reparacion(id)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE TipoReporte (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo_reporte VARCHAR(100),
    mostrar_mecanico BOOLEAN
) ENGINE=InnoDB;

CREATE TABLE Reporte (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_empleado_orden_reparacion INT,
    id_tipo_reporte INT,
    observaciones TEXT,
    solucionado BOOLEAN,
    fecha DATE,
    hora TIME,
    FOREIGN KEY (id_empleado_orden_reparacion) REFERENCES Empleado_Orden_Reparacion(id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (id_tipo_reporte) REFERENCES TipoReporte(id)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Codigo_verificacion (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    codigo VARCHAR(100),
    fecha DATE,
    hora TIME,
    booleaan BOOLEAN,
    alerta BOOLEAN,
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Recibo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_pedido INT,
    fecha DATE,
    total DECIMAL(10,2),
    FOREIGN KEY (id_pedido) REFERENCES Pedido(id)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;
