export interface Ingredient {
    id: string;
    name: string;
    digestibility: string;
    binding: string;
    protein: number;
}

export const ingredients: Ingredient[] = [
  {
    "id": "1",
    "name": "ALBUMINA",
    "digestibility": "SCARSA",
    "binding": "MOLTO",
    "protein": 75
  },
  {
    "id": "2",
    "name": "CALCIO CASEINATO",
    "digestibility": "BUONA",
    "binding": "BUONO",
    "protein": 90
  },
  {
    "id": "3",
    "name": "CASEINA",
    "digestibility": "SCARSA",
    "binding": "NEUTRA",
    "protein": 90
  },
  {
    "id": "4",
    "name": "FARINA DI ARACHIDE TOST",
    "digestibility": "BUONA",
    "binding": "NEUTRA",
    "protein": 40
  },
  {
    "id": "5",
    "name": "FARINA DI ARINGHE",
    "digestibility": "BUONA (▼)",
    "binding": "SLEGANTE",
    "protein": 75
  },
  {
    "id": "6",
    "name": "FARINA DI AVENA",
    "digestibility": "BUONA",
    "binding": "BUONO",
    "protein": 11
  },
  {
    "id": "7",
    "name": "FARINA DI CARNE",
    "digestibility": "SCARSA",
    "binding": "NEUTRA",
    "protein": 80
  },
  {
    "id": "8",
    "name": "FARINA DI CECI",
    "digestibility": "BUONA",
    "binding": "MOLTO",
    "protein": 20
  },
  {
    "id": "9",
    "name": "FARINA DI CRISALIDE",
    "digestibility": "BUONA",
    "binding": "SLEGANTE",
    "protein": 20
  },
  {
    "id": "10",
    "name": "FARINA DI FAVA",
    "digestibility": "BUONA",
    "binding": "LEGANTE",
    "protein": 0
  },
  {
    "id": "11",
    "name": "FARINA DI FEGATO",
    "digestibility": "BUONA",
    "binding": "NEUTRA",
    "protein": 85
  },
  {
    "id": "12",
    "name": "FARINA DI GAMBERO",
    "digestibility": "MOLTO",
    "binding": "NEUTRA",
    "protein": 60
  },
  {
    "id": "13",
    "name": "FARINA DI GRANO",
    "digestibility": "MOLTO",
    "binding": "OTTIMO",
    "protein": 15
  },
  {
    "id": "15",
    "name": "FARINA DI MAIS",
    "digestibility": "OTTIMA",
    "binding": "MEDIA",
    "protein": 11
  },
  {
    "id": "16",
    "name": "FARINA DI MELASSA",
    "digestibility": "BUONA",
    "binding": "SLEGANTE",
    "protein": 30
  },
  {
    "id": "17",
    "name": "FARINA DI MERLUZZO",
    "digestibility": "BUONA (▼)",
    "binding": "NEUTRA",
    "protein": 60
  },
  {
    "id": "18",
    "name": "FARINA DI ORZO",
    "digestibility": "BUONA",
    "binding": "BUONO",
    "protein": 13
  },
  {
    "id": "19",
    "name": "FARINA DI PATATA",
    "digestibility": "BUONA",
    "binding": "OTTIMO",
    "protein": 9
  },
  {
    "id": "20",
    "name": "FARINA DI PESCE BIANCO",
    "digestibility": "BUONA (▼)",
    "binding": "NEUTRA",
    "protein": 60
  },
  {
    "id": "21",
    "name": "FARINA DI RISO",
    "digestibility": "MEDIA",
    "binding": "NEUTRA",
    "protein": 7
  },
  {
    "id": "22",
    "name": "FARINA DI SARDINA",
    "digestibility": "MOLTO (▼)",
    "binding": "NEUTRA",
    "protein": 60
  },
  {
    "id": "23",
    "name": "FECOLA DI PATATE",
    "digestibility": "BUONA",
    "binding": "OTTIMO",
    "protein": 0
  },
  {
    "id": "24",
    "name": "GERME DI GRANO",
    "digestibility": "MOLTO",
    "binding": "LEGANTE",
    "protein": 50
  },
  {
    "id": "25",
    "name": "GLUTINE DI GRANO",
    "digestibility": "SCARSA",
    "binding": "OTTIMO",
    "protein": 80
  },
  {
    "id": "26",
    "name": "GLUTINE DI MAIS",
    "digestibility": "SCARSA",
    "binding": "LEGANTE",
    "protein": 70
  },
  {
    "id": "27",
    "name": "ISOLATO DI SOYA",
    "digestibility": "BUONA",
    "binding": "MEDIA",
    "protein": 90
  },
  {
    "id": "28",
    "name": "LACTALBUMINA",
    "digestibility": "MOLTO",
    "binding": "BUONO",
    "protein": 90
  },
  {
    "id": "29",
    "name": "LATTE IN POLVERE",
    "digestibility": "MEDIA",
    "binding": "BUONO",
    "protein": 25
  },
  {
    "id": "30",
    "name": "NECTARBLEND",
    "digestibility": "BUONA",
    "binding": "SLEGANTE",
    "protein": 15
  },
  {
    "id": "31",
    "name": "PASTONCINO PER UCCELLI",
    "digestibility": "MOLTO",
    "binding": "SLEGANTE",
    "protein": 10
  },
  {
    "id": "32",
    "name": "POLVERE D'UOVO",
    "digestibility": "MEDIA",
    "binding": "MOLTO",
    "protein": 50
  },
  {
    "id": "33",
    "name": "PROSECTO INSECTIVORUS",
    "digestibility": "BUONA",
    "binding": "SLEGANTE",
    "protein": 10
  },
  {
    "id": "34",
    "name": "RED FACTOR",
    "digestibility": "BUONA",
    "binding": "SLEGANTE",
    "protein": 12
  },
  {
    "id": "35",
    "name": "ROBIN RED",
    "digestibility": "OTTIMA",
    "binding": "SLEGANTE",
    "protein": 12
  },
  {
    "id": "36",
    "name": "SEMI PER UCCELLI",
    "digestibility": "OTTIMA",
    "binding": "SLEGANTE",
    "protein": 10
  },
  {
    "id": "37",
    "name": "SEMOLINO",
    "digestibility": "OTTIMA",
    "binding": "LEGANTE",
    "protein": 13
  },
  {
    "id": "38",
    "name": "SLUIS CLO",
    "digestibility": "BUONA",
    "binding": "SLEGANTE",
    "protein": 13
  },
  {
    "id": "39",
    "name": "SODIO CASEINATO",
    "digestibility": "BUONA",
    "binding": "LEGANTE",
    "protein": 90
  },
  {
    "id": "40",
    "name": "SOYA GRASSA",
    "digestibility": "MEDIA",
    "binding": "MEDIA",
    "protein": 45
  },
  {
    "id": "41",
    "name": "SOYA TOSTATA",
    "digestibility": "BUONA",
    "binding": "MEDIA",
    "protein": 40
  },
  {
    "id": "42",
    "name": "SEMOLINO 50%+GERME 50%",
    "digestibility": "OTTIMA",
    "binding": "MOLTO",
    "protein": 31.5
  },
  {
    "id": "eggs",
    "name": "NUM. DI UOVA (MEDIE)",
    "digestibility": "",
    "binding": "",
    "protein": 1.3
  }
];
