const request = require('supertest');
const app = require('../app');

describe('Rutas principales', () => {
  it('should respond with "ITL HARDWARE STORE API" at /', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('ITL HARDWARE STORE API');
  });

  it('should respond with "OK" at /healthcheck', async () => {
    const response = await request(app).get('/healthcheck');
    expect(response.status).toBe(200);
    expect(response.text).toBe('OK');
  });

  it('should respond with JSON data at /api', async () => {
    const response = await request(app).get('/api');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ API: 'UP' });
  });
});


//PRODUCTOS
describe('Producto Routes', () => {
  const productoMock = {
    nombre: 'Producto de Prueba',
    descripcion: 'Esta es una descripción de prueba',
    precioUnit: 100,
    sku: 'SKU123',
    inventarioId: 1,
    descuentoId: 1,
  };

  let productoId;

  // Prueba de creación de un nuevo producto
  it('should create a new product', async () => {
    const response = await request(app)
      .post('/api/productos')
      .send(productoMock);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('idProducto');
    productoId = response.body.idProducto;
  });

  // Prueba de obtención de todos los productos
  it('should get all products', async () => {
    const response = await request(app)
      .get('/api/productos');

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  // Prueba de obtención de un producto específico
  it('should get a specific product', async () => {
    const response = await request(app)
      .get(`/api/productos/${productoId}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('idProducto', productoId);
  });

  // Prueba de actualización de un producto existente
  it('should update an existing product', async () => {
    const updatedProduct = {
      nombre: 'Producto Modificado',
      descripcion: 'Esta es una descripción modificada',
      precioUnit: 150,
    };

    const response = await request(app)
      .put(`/api/productos/${productoId}`)
      .send(updatedProduct);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('idProducto', productoId);
    expect(response.body).toHaveProperty('nombre', updatedProduct.nombre);
    expect(response.body).toHaveProperty('descripcion', updatedProduct.descripcion);
    expect(response.body).toHaveProperty('precioUnit', updatedProduct.precioUnit);
  });

  // Prueba de eliminación de un producto
  it('should delete a product', async () => {
    const response = await request(app)
      .delete(`/api/productos/${productoId}`);

    expect(response.status).toBe(204);
  });
});
    