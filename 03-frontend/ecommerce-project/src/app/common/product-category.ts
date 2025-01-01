export class ProductCategory {
    private _id: number;
    private _categoryName: string;

    constructor(id: number, categoryName: string) {
        this._id = id;
        this._categoryName = categoryName;
    }

    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get categoryName(): string {
        return this._categoryName;
    }

    public set categoryName(categoryName: string) {
        this._categoryName = categoryName;
    }
}