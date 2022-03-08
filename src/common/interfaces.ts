interface carInterface {
  horsepower: number;
  id: number;
  img_url: string;
  make: string;
  model: string;
  price: number;
  year: number;
}

interface formInputInterface {
  make: string;
  model: string;
  price: number;
  year: number;
  horsepower: number;
}

export { carInterface, formInputInterface };
