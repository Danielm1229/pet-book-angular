import { TestBed } from '@angular/core/testing';

import { ImageService } from './image.service';

describe('ImageService', () => {
  let service: ImageService;

  beforeEach(() => {
    service = new ImageService();
  });

  it('Debe crearse el servicio', () => {
    expect(service).toBeTruthy();
  });

  describe('getImages', () => {
    it('Debe retornar todas las imagenes que se proveen por el servicio', () => {
      let imagenes = service.getImages();
      expect(imagenes.length).toEqual(5);
    });
  });

  describe('#getImage(id)', () =>  {
    it('Deberia retornar indefinido cuando se envia indefinido ', () => {
      let id;
      let imagen = service.getImage(id);
      expect(imagen).toBeUndefined();
    });

    it('Deberia retornar indefinido cuando se envia como id no existente ', () => {
      let id=20;
      let imagen = service.getImage(id);
      expect(imagen).toBeUndefined();
    });

    it('Deberia retornar un perro cuando se envia como id el 1 ', () => {
      let id=1;
      let imagen = service.getImage(id);
      expect(imagen.brand).toEqual("perro");
    });
  });
});
