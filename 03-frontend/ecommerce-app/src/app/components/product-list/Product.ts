export class Product {
    private _sku: string;
    private _name: string;
    private _description: string;
    private _unitPrice: number;
    private _imageUrl: string;
    private _active: boolean;
    private _unitsInStock: number;
    private _dateCreated: Date; 
    private _lastUpdated: Date;

    constructor(sku: string, name: string, description: string, unitPrice: number, 
                imageUrl: string, active: boolean, unitsInStock: number, dateCreated: Date, lastUpdated: Date){
                    this._sku = sku;
                    this._name = name;
                    this._description = description;
                    this._unitPrice = unitPrice;
                    this._imageUrl = imageUrl;
                    this._active = active;
                    this._unitsInStock = unitsInStock;
                    this._dateCreated = dateCreated;
                    this._lastUpdated = lastUpdated;
                }

    public get sku(): string {
        return this._sku;
    }

    public set sku(sku: string) {
        this._sku = sku;
    }

    public get name(): string {
        return this._name;
    }
    
    public set name(name: string) {
        this._name = name;
    }

    public get description(): string {
        return this._description;
    }

    public set description(description: string) {
        this._description = description;
    }

    public get unitPrice(): number {
        return this._unitPrice;
    }

    public set unitPrice(unitPrice: number) {
        this._unitPrice = unitPrice;
    }

    public get imageUrl(): string {
        return this._imageUrl;
    }

    public set imageUrl(imageUrl: string) {
        this._imageUrl = imageUrl;
    }

    public get active(): boolean {
        return this._active;
    }

    public set active(active: boolean) {
        this._active = active;
    }

    public get unitsInStock(): number {
        return this._unitsInStock;
    }

    public set unitsInStock(unitsInStock: number) {
        this._unitsInStock = unitsInStock;
    }

    public get dateCreated(): Date {
        return this._dateCreated;
    }

    public set dateCreated(dateCreated: Date) {
        this._dateCreated = dateCreated;
    }

    public get lastUpdated(): Date {
        return this._lastUpdated;
    }

    public set lastUpdated(lastUdpated: Date) {
        this._lastUpdated = lastUdpated;
    }

}