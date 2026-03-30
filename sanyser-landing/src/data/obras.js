import centroMedico from '../assets/image.png';
import hotel from '../assets/hotel.png';

// featured: true → card grande (col-span-2 row-span-2), muestra título + descripción
// featured: false → card chica (h-[292px]), muestra solo título
//
// imagen: URL o ruta local. Las URLs de abajo son las imágenes del diseño Stitch.
// Reemplazar por fotos reales cuando el cliente las provea.
export const obras = [
  {
    id: 1,
    titulo: 'Edificio Residencial de Alta Gama',
    descripcion: 'Instalación completa de sistemas presurizados y cloacales.',
    featured: true,
    imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMNXdctvm5Cx8rLBXVRB8IS33D4dufFjZWONvLGRzEU8T4DtgsfgEH5oWF01NF0qaJWefPaO_x4wWgky37-8aifpJWuwJ4JVh5yFNaXHwXKYOhz2zr6QND4RoC1qJFgKDNm-y5vEUTiaO8O8ozhYEI5kTYr9jqXO2JyHb-3IBTtLEW_sKsQH4F76OwRiUOR25FL2tWFN20Axz1uiSRQLOUvNubMqQXRhne4vd8OPNEAiEXqHLu5f_jwQ_bTAIomkrBboectUXFjI0',
  },
  {
    id: 2,
    titulo: 'Planta Industrial en GBA',
    descripcion: null,
    featured: false,
    imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgAktMDVICbEaQ87EBzRoWf38RyJSQH-EWJ9YSSmzuk9Xv4oqxS-YqgWfBgdg_XdLoCjS0zS7Gi9GtvCeQeCL6c9CAIWfkkiOwxqnrzbpXoc5iOX8t2UA-XogcmBBXSx_VtqeND68J-3NPucRWRmBabMtsmfTn6WAnFWZFaxgCHl0SuDW8KIOo5uSy56NitsFsSwC2o1SzXdusLXEQRsNCi6XXRoh-YxBJmVUXaroQPogGndZFro74BxQGZITunt51s2GiR2p2tvA',
  },
  {
    id: 3,
    titulo: 'Complejo Residencial Privado',
    descripcion: null,
    featured: false,
    imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCwn1MstnVe5WjeHZGr_SyjTIvXp-noUz16BUSakhLPAy0WO_EjvTfUGkCW3MfHiU1j4iEBU2PWuwMS_0TkcPUqS3krWHRhI62e8a2A0vH7li6faHJcrTpHBNjdBuZogZas28obHRfaCaaICY9q4utvJQmxaDpOPeZxKOFeseU2cykqieIDvko84KycQwzGC1MNIYO7qPrYAh3Z2HorrXdVUyX-yWuhytxIaXLE5VivXZPx866OLuQfDa4hC-n_ECzE1aopObracw',
  },
  {
    id: 4,
    titulo: 'Hotel de Categoría Internacional',
    descripcion: null,
    featured: false,
    imagen: hotel,
  },
  {
    id: 5,
    titulo: 'Centro de Salud y Medicina',
    descripcion: null,
    featured: false,
    imagen: centroMedico,
  },
];
