export interface RsvpFormData {
  nombre_completo: string;
  email?: string;
  asistira: 'si' | 'no' | 'no_se';
  ceremonia: boolean;
  vegetariano: boolean;
  sin_gluten: boolean;
  vegano: boolean;
  sin_lactosa: boolean;
  otras_alergias?: string;
  comentarios?: string;
}

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
