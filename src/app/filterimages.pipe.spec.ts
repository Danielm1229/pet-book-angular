import { FilterimagesPipe } from "./filterimages.pipe";
import { ImageService } from "./image.service";

describe("FilterimagesPipe", () => {
  let pipe : FilterimagesPipe;
  let imageService: ImageService;
  let imagenes: any[];

  beforeEach(() => {
    pipe = new FilterimagesPipe();
    imageService = new ImageService();
    imagenes = imageService.getImages();
  });

  it('Debe crear el componente pipe', () => {
    const pipe = new FilterimagesPipe();
    expect(pipe).toBeTruthy();
  });

  describe('#transform', () =>{
    it('Con lista de imagenes vacia y pipe correcto deberia devolver vacio', () =>{
      imagenes = [];
      let laptop = 'all';

      expect(pipe.transform(imagenes, laptop)).toEqual([]);
    });

    it('Con lista de imagenes null y pipe diferente de "all" deberia generar error', () =>{
      imagenes = null;
      let laptop = 'perro';

      expect(() => pipe.transform(imagenes, laptop)).toThrowError(Error);
    });

    it('Con lista de imagenes null y pipe correcto', () =>{
      imagenes = [];
      let laptop = 'all';

      expect(pipe.transform(imagenes, laptop).length).toEqual(0);
    });

    it('Con pipe "all" deberia devolver todas las imagenes', () =>{
      let laptop = 'all'; 

      expect(pipe.transform(imagenes, laptop).length).toEqual(imagenes.length);
    });

    it('Con pipe "perro" deberia devolver todas las imagenes que tengan como brand perro', () =>{
      let laptop = 'perro';

      expect(pipe.transform(imagenes, laptop).length).toEqual(3);
    });

    it('Con pipe "gato" deberia devolver todas las imagenes que tengan como brand gato', () =>{
      let laptop = 'gato';

      expect(pipe.transform(imagenes, laptop).length).toEqual(2);
    });

    it('Con pipe null no deberia devolver ninguna imagen', () =>{
      let laptop = null;

      expect(pipe.transform(imagenes, laptop).length).toEqual(0);
    });

    it('Con pipe vacio no deberia devolver ninguna imagen', () =>{
      let laptop = '';

      expect(pipe.transform(imagenes, laptop).length).toEqual(0);
    });

    it('Con pipe undefined no deberia devolver ninguna imagen', () =>{
      let laptop = undefined;

      expect(pipe.transform(imagenes, laptop).length).toEqual(0);
    });

    it('Con pipe diferente al esperado no deberia devolver ninguna imagen', () =>{
      let laptop = 'asdfasf';

      expect(pipe.transform(imagenes, laptop).length).toEqual(0);
    });
  });
});