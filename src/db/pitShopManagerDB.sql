CREATE DATABASE pitshop_manager;
USE pitshop_manager;

CREATE TABLE Rol (
    id_rol INT AUTO_INCREMENT PRIMARY KEY,
    rol VARCHAR(50)
) ENGINE=InnoDB;

CREATE TABLE Usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100),
    username VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    rol INT NOT NULL,
    email VARCHAR(150),
    telefono VARCHAR(50),
    correo_verificado BOOLEAN,
    FOREIGN KEY (rol) REFERENCES Rol(id_rol)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Empleado (
    id_empleado INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT UNIQUE,
    es_mecanico BOOLEAN,
    es_interno BOOLEAN,
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Tipo_Especialidad (
    id_tipo_especialidad INT AUTO_INCREMENT PRIMARY KEY,
    tipo_especialidad VARCHAR(100) NOT NULL
) ENGINE=InnoDB;


CREATE TABLE Especialidad (
    id_especialidad INT AUTO_INCREMENT PRIMARY KEY,
    id_empleado INT NOT NULL,
    id_tipo_especialidad INT NOT NULL,
    FOREIGN KEY (id_empleado) REFERENCES Empleado(id_empleado)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (id_tipo_especialidad) REFERENCES Tipo_Especialidad(id_tipo_especialidad)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Vehiculo (
    id_vehiculo INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT,
    marca VARCHAR(100),
    modelo VARCHAR(100),
    placas VARCHAR(50),
    FOREIGN KEY (id_cliente) REFERENCES Usuario(id_usuario)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Proveedor (
    id_proveedor INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    nombre_empresa VARCHAR(150),
    es_servicio BOOLEAN,
    descripcion TEXT,
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Repuesto (
    id_repuesto INT AUTO_INCREMENT PRIMARY KEY,
    nombre_repuesto VARCHAR(150)
) ENGINE=InnoDB;

CREATE TABLE Proveedor_Repuesto (
    id_proveedor_repuesto INT AUTO_INCREMENT PRIMARY KEY,
    id_proveedor INT,
    id_repuesto INT,
    precio DOUBLE,
    FOREIGN KEY (id_proveedor) REFERENCES Proveedor(id_proveedor)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (id_repuesto) REFERENCES Repuesto(id_repuesto)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Estado_Pedido (
    id_estado_pedido INT AUTO_INCREMENT PRIMARY KEY,
    estado VARCHAR(50)
) ENGINE=InnoDB;


CREATE TABLE Pedido (
    id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    fecha_pedido DATE NOT NULL,
    fecha_entrega DATE NOT NULL,
    estado INT NOT NULL,
    FOREIGN KEY (estado) REFERENCES Estado_Pedido(id_estado_pedido)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Estado_Pedido_Detalle (
    id_estado_pedido_detalle INT AUTO_INCREMENT PRIMARY KEY,
    estado VARCHAR(50)
) ENGINE=InnoDB;

CREATE TABLE Pedido_Detalle (
    id_pedido_detalle INT AUTO_INCREMENT PRIMARY KEY,
    id_pedido INT,
    id_proveedor_repuesto INT,
    estado INT,
    cantidad_solicitada INT,
    FOREIGN KEY (id_pedido) REFERENCES Pedido(id_pedido)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (id_proveedor_repuesto) REFERENCES Proveedor_Repuesto(id_proveedor_repuesto)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (estado) REFERENCES Estado_Pedido_Detalle(id_estado_pedido_detalle)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Inventario (
    id_inventario INT AUTO_INCREMENT PRIMARY KEY,
    id_repuesto INT,
    cantidad INT,
    precio_unitario DECIMAL(10,2),
    FOREIGN KEY (id_repuesto) REFERENCES Repuesto(id_repuesto)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Estado_Orden_Reparacion (
    id_estado_orden_rep INT AUTO_INCREMENT PRIMARY KEY,
    estado VARCHAR(50)
) ENGINE=InnoDB;

CREATE TABLE Orden_Reparacion (
    id_orden_reparacion INT AUTO_INCREMENT PRIMARY KEY,
    id_vehiculo INT,
    fecha_ingreso DATE,
    hora_ingreso TIME,
    fecha_egreso DATE,
    hora_egreso TIME,
    estado INT, 
    FOREIGN KEY (id_vehiculo) REFERENCES Vehiculo(id_vehiculo)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (estado) REFERENCES Estado_Orden_Reparacion(id_estado_orden_rep)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Servicio (
    id_servicio INT AUTO_INCREMENT PRIMARY KEY,
    servicio VARCHAR(150),
    es_correctivo BOOLEAN,
    descripcion TEXT,
    tiempo_estimado INT,
    precio DOUBLE
) ENGINE=InnoDB;

CREATE TABLE Estado_Trabajo (
    id_estado_trabajo INT AUTO_INCREMENT PRIMARY KEY,
    estado VARCHAR(50)
) ENGINE=InnoDB;

CREATE TABLE Servicio_Orden_Reparacion (
    id_servicio_orden_reparacion INT AUTO_INCREMENT PRIMARY KEY,
    id_orden_reparacion INT,
    id_servicio INT,
    id_estado_trabajo INT,
    FOREIGN KEY (id_orden_reparacion) REFERENCES Orden_Reparacion(id_orden_reparacion)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (id_servicio) REFERENCES Servicio(id_servicio)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (id_estado_trabajo) REFERENCES Estado_Trabajo(id_estado_trabajo)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Inventario_Orden_Reparacion (
    id_inventario INT,
    id_orden_reparacion INT,
    cantidad INT,
    PRIMARY KEY (id_inventario, id_orden_reparacion),
    FOREIGN KEY (id_inventario) REFERENCES Inventario(id_inventario)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (id_orden_reparacion) REFERENCES Orden_Reparacion(id_orden_reparacion)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Factura (
    id_factura INT AUTO_INCREMENT PRIMARY KEY,
    id_orden_reparacion INT,
    fecha DATE,
    total DECIMAL(10,2),
    FOREIGN KEY (id_orden_reparacion) REFERENCES Orden_Reparacion(id_orden_reparacion)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Pago (
    id_pago INT AUTO_INCREMENT PRIMARY KEY,
    id_factura INT,
    monto DECIMAL(10,2),
    fecha DATE,
    FOREIGN KEY (id_factura) REFERENCES Factura(id_factura)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Chat_Usuario (
    id_chat INT AUTO_INCREMENT PRIMARY KEY,
    id_orden_reparacion INT,
    mensaje TEXT,
    visto BOOLEAN,
    FOREIGN KEY (id_orden_reparacion) REFERENCES Orden_Reparacion(id_orden_reparacion)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Tipo_Notificacion (
    id_tipo_notificacion INT AUTO_INCREMENT PRIMARY KEY,
    tipo_notificacion VARCHAR(100)
) ENGINE=InnoDB;

CREATE TABLE Notificacion (
    id_notificacion INT AUTO_INCREMENT PRIMARY KEY,
    id_pedido INT,
    id_tipo_notificacion INT,
    comentario TEXT,
    fecha DATE,
    hora TIME,
    FOREIGN KEY (id_pedido) REFERENCES Pedido(id_pedido)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (id_tipo_notificacion) REFERENCES Tipo_Notificacion(id_tipo_notificacion)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Empleado_Orden_Reparacion (
    id_empleado_orden_reparacion INT AUTO_INCREMENT PRIMARY KEY,
    id_empleado INT,
    id_orden_reparacion INT,
    es_especialista BOOLEAN,
    FOREIGN KEY (id_empleado) REFERENCES Empleado(id_empleado)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (id_orden_reparacion) REFERENCES Orden_Reparacion(id_orden_reparacion)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE TipoReporte (
    id_tipo_reporte INT AUTO_INCREMENT PRIMARY KEY,
    tipo_reporte VARCHAR(100),
    mostrar_mecanico BOOLEAN
) ENGINE=InnoDB;

CREATE TABLE Reporte (
    id_reporte INT AUTO_INCREMENT PRIMARY KEY,
    id_empleado_orden_reparacion INT,
    id_tipo_reporte INT,
    observaciones TEXT,
    solucionado BOOLEAN,
    fecha DATE,
    hora TIME,
    FOREIGN KEY (id_empleado_orden_reparacion) REFERENCES Empleado_Orden_Reparacion(id_empleado_orden_reparacion)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (id_tipo_reporte) REFERENCES TipoReporte(id_tipo_reporte)
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
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Recibo (
    id_recibo INT AUTO_INCREMENT PRIMARY KEY,
    id_pedido INT,
    fecha DATE,
    total DECIMAL(10,2),
    FOREIGN KEY (id_pedido) REFERENCES Pedido(id_pedido)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;
