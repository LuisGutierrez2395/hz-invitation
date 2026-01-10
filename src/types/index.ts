export interface RsvpFormData {
  asistira: 'si' | 'no' | 'no_se';
  nombre_completo: string;
  nombre_completo_2: string; 
  otras_alergias?: string;
  cancion_deseada?: string;
  fun_fact_person_1?: string;
  fun_fact_person_2?: string;
}

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
