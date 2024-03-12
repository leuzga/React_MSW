import { http, HttpResponse } from 'msw';

const handlers = [
  // Intercepta la solicitud "GET /api/data".
  http.get('/api/data', () => {
    // Crea una respuesta JSON utilizando HttpResponse.
    return HttpResponse.json({
      data: ['Item 1', 'Item 2', 'Item 3'],
    });
  }),
];

export default handlers;
