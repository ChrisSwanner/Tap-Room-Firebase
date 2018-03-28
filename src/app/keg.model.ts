export class Keg {
  public empty: boolean = false;
  public onSale: boolean = false;
  public pintsLeft: number = 124;
  public salePrice: number = 0;
  constructor(public name:string, public alcoholContent: number, public price: number, public style: string) {
  }
}
