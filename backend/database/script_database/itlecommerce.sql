CREATE TABLE rol_usuario
(
id_rol INT UNIQUE NOT NULL AUTO_INCREMENT,
nombre_rol VARCHAR(35) NOT NULL,
descripcion TEXT,
CONSTRAINT pk_rol primary key(id_rol)
);

CREATE TABLE usuarios 
(
 id_usuario INT UNIQUE AUTO_INCREMENT,
 nombre VARCHAR(30) NOT NULL,
 apellido_pat VARCHAR(30) NOT NULL,
 apellido_mat VARCHAR(30) NOT NULL,
 email VARCHAR(50) NOT NULL,
 psword VARCHAR(50) NOT NULL,
 rol INT NOT NULL,
 fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 fecha_modif TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 CONSTRAINT pk_usuario PRIMARY KEY(id_usuario),
 CONSTRAINT fk_rol_usuario foreign key(rol) references rol_usuario(id_rol)
);

CREATE TABLE estado
(
id_estado INT UNIQUE NOT NULL AUTO_INCREMENT,
nombre VARCHAR(50) NOT NULL,
CONSTRAINT pk_estado primary key(id_estado)
);
 
 create table direccion_usuarios
 (
 id_direccion int(6) UNIQUE auto_increment,
 calle varchar (50) not null,
 colonia varchar (50) not null,
 num_int varchar (10) not null,
 num_ext varchar(10),
 cod_postal varchar (5) not null,
 localidad varchar (30) not null,
 estado_id INT not null,
 telefono varchar(12) not null,
 usuario int(6) not null,
 constraint pk_direccion primary key (id_direccion),
 constraint fk_usuario foreign key(usuario) references usuarios(id_usuario),
 CONSTRAINT fk_direstado foreign key(estado_id) references estado (id_estado)
 );
 
 CREATE TABLE met_pagos
 (
 id_metpag int UNIQUE AUTO_INCREMENT NOT NULL,
 usuario INT NOT NULL,
 tipo_pago VARCHAR(30) NOT NULL,
 provider VARCHAR(30) NOT NULL,
 num_cuenta VARCHAR(13) NOT NULL,
 expiracion VARCHAR (5) NOT NULL,
 CONSTRAINT pk_metpag primary key(id_metpag),
 CONSTRAINT fk_usuario_pago foreign key(usuario) references usuarios(id_usuario)
 );
 
 CREATE TABLE descuentos
 (
 id_descuento INT NOT NULL UNIQUE AUTO_INCREMENT,
 nombre VARCHAR(30) NOT NULL,
 descripcion TEXT NOT NULL,
 desc_percent DECIMAL(5) NOT NULL,
 activo BOOLEAN NOT NULL,
 creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 modificado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 borrado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 CONSTRAINT pk_descuentos primary key(id_descuento)
 );
 
 CREATE TABLE prod_inventario
 (
 id_prod_inv INT NOT NULL AUTO_INCREMENT UNIQUE,
 cantidad INT NOT NULL,
 creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 modificado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 borrado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 CONSTRAINT pk_id_prodinv primary key(id_prod_inv)
 );
 
 CREATE TABLE productos
 (
 id_producto INT NOT NULL UNIQUE auto_increment,
 nombre VARCHAR(85) NOT NULL,
 descripcion TEXT NOT NULL,
 precio_unit INT NOT NULL,
 sku VARCHAR(15),
 inventario_id INT NOT NULL,
 descuento_id INT NOT NULL,
 creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 modificado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 CONSTRAINT pk_producto primary key(id_producto),
 CONSTRAINT fk_inv_prod foreign key(inventario_id) references prod_inventario(id_prod_inv),
 CONSTRAINT fk_desc_prod foreign key(descuento_id) references descuentos(id_descuento)
 );
 
 CREATE TABLE tags
 (
 id_tag int UNIQUE NOT NULL AUTO_INCREMENT,
 tag_name VARCHAR(30) NOT NULL,
 descripcion TEXT DEFAULT('Sin especificar'),
 creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 CONSTRAINT pk_tag primary key(id_tag)
 );
 
 CREATE TABLE product_tag
 (
 id_product_tag INT AUTO_INCREMENT UNIQUE NOT NULL,
 producto_id INT,
 id_tag INT,
 CONSTRAINT pk_prod_tag primary key(id_product_tag),
 CONSTRAINT fk_producto foreign key(producto_id) references productos(id_producto),
 CONSTRAINT fk_tag foreign key(id_tag) references tags(id_tag)
 );
 
 CREATE TABLE categoria_detalle
 (
 id_cat_detalle INT UNIQUE NOT NULL AUTO_INCREMENT,
 titulo_cat varchar(30) NOT NULL,
 descripcion TEXT DEFAULT ('Sin especificar'),
 CONSTRAINT pk_cat_det primary key(id_cat_detalle)
 );
 
 CREATE TABLE subcat_detalle
 (
 id_subcat_detalle INT UNIQUE NOT NULL AUTO_INCREMENT,
 titulo_subcat VARCHAR(35) NOT NULL,
 decripcion TEXT NOT NULL,
 creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 modificacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 titulo_cat INT NOT NULL,
 CONSTRAINT pk_subcat_det primary key(id_subcat_detalle),
 CONSTRAINT fk_titulo_cat foreign key(titulo_cat) references categoria_detalle(id_cat_detalle)
 );
 
 CREATE TABLE detalle_producto
 (
 id_detalle INT,
 id_producto INT,
 CONSTRAINT fk_dp_detalle foreign key(id_detalle) references subcat_detalle(id_subcat_detalle),
 CONSTRAINT fk_dp_producto foreign key(id_producto) references productos(id_producto)
 );
 
 CREATE TABLE reseña_producto
 (
 id_reseña INT UNIQUE NOT NULL AUTO_INCREMENT,
 id_usuario INT NOT NULL,
 titulo_res VARCHAR(75) NOT NULL,
 descripcion TEXT NOT NULL,
 likes INT, 
 creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 modificado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 CONSTRAINT pk_reseña primary key(id_reseña),
 CONSTRAINT fk_usuario_reseña foreign key(id_usuario) references usuarios(id_usuario)
 );
 
 CREATE TABLE detalle_pago
 (
 id_detalle_pago INT UNIQUE NOT NULL AUTO_INCREMENT,
 orden_id INT,
 monto INT NOT NULL,
 proveedor VARCHAR(35) NOT NULL,
 estatus VARCHAR(35) NOT NULL,
 creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 modificado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 CONSTRAINT pk_detalle_pago primary key(id_detalle_pago)
 );
 
 CREATE TABLE orden
 (
 id_orden INT UNIQUE NOT NULL AUTO_INCREMENT,
 id_usuario INT NOT NULL,
 total DECIMAL(15) NOT NULL,
 id_pago INT,
 estado VARCHAR(20),
 creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 modificado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 CONSTRAINT pk_orden primary key(id_orden),
 CONSTRAINT fk_det_pag foreign key(id_pago) references detalle_pago(id_detalle_pago)
 );
 
 CREATE TABLE orden_items
 (
 id_orden_item INT UNIQUE NOT NULL AUTO_INCREMENT,
 orden_id INT NOT NULL,
 producto_id INT NOT NULL,
 cantidad INT NOT NULL,
 creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 modificado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 CONSTRAINT pk_orden_item primary key(id_orden_item),
 CONSTRAINT fk_orden_item foreign key(orden_id) references orden(id_orden),
 CONSTRAINT fk_orden_product foreign key(producto_id) references productos(id_producto)
 );
 
 CREATE TABLE carrito
 (
 id_carrito INT UNIQUE NOT NULL AUTO_INCREMENT,
 usuario_id INT NOT NULL,
 total DECIMAL NOT NULL,
 creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 modificado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 CONSTRAINT pk_carrito primary key(id_carrito),
 CONSTRAINT fk_usuario_carrito foreign key(usuario_id) references usuarios(id_usuario)
 );
 
 CREATE TABLE carrito_item
 (
 id_car_item INT UNIQUE NOT NULL AUTO_INCREMENT,
 carrito_id INT NOT NULL,
 producto_id INT NOT NULL,
 cantidad INT NOT NULL,
 creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 modificado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 CONSTRAINT pk_carrito_item primary key (id_car_item),
 CONSTRAINT fk_carritoitem foreign key(carrito_id) references carrito(id_carrito),
 CONSTRAINT fk_carritoitem_prod foreign key(producto_id) references productos(id_producto)
 );
 
CREATE TABLE favoritos
 (
 id_favorito INT UNIQUE NOT NULL AUTO_INCREMENT,
 usuario_id INT NOT NULL,
 creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 modificado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 CONSTRAINT pk_favorito primary key(id_favorito),
 CONSTRAINT fk_usuario_fav foreign key(usuario_id) references usuarios(id_usuario)
 );
 
 CREATE TABLE favorito_item
 (
 id_fav_item INT UNIQUE NOT NULL AUTO_INCREMENT,
 favorito_id INT NOT NULL,
 producto_id INT NOT NULL,
 creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 modificado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 CONSTRAINT pk_favorito_item primary key (id_fav_item),
 CONSTRAINT fk_favitem foreign key(favorito_id) references favoritos(id_favorito),
 CONSTRAINT fk_favitem_prod foreign key(producto_id) references productos(id_producto)
 );