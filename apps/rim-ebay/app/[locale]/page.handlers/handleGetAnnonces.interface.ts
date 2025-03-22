import { Annonce } from "@repo/mytypes/types";

export interface IPageAnnonce {
  totalPages: number;
  annonces: Annonce[];
}
export interface IHandleGetAnnonces {
  (): Promise<{
    pageAnnonceData: IPageAnnonce | null;
    errorMessage: string;
  }>;
}
