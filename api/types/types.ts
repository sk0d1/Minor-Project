
export interface Drug {
  drugName: string;
  compositions: Composition[];
  units: number;
  totalDosage: number;
  price: number;
  expiryDate: string;
}
export interface Composition {
  name: string;
  dosage: string;
}

export interface Product extends Drug {
  vendorWalletAddress: string;
}


export interface Transaction {
  drug:Drug;
  attestationId: string;
  owner: string;
  timestamp: Date;
}
