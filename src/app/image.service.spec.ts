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

  describe('getImage', () => {
    it('Debe retornar la imagen con el id que se da como parametro si existe', () => {
      let imagene = service.getImage(2);
      expect(imagene.brand).toEqual('perro');
    });

    it('Debe retornar "indefinido" si se busca una imagen con un id que NO existe', () => {
      let imagene = service.getImage(100);
      expect(imagene).toEqual(undefined);
    });
  });
});
