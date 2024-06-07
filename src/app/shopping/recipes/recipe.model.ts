import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    
    private _id: number;
    private _name: string;
    private _description: string;
    private _imagePath: string;
    private _ingredients: Ingredient[];

	constructor(id: number, name: string, description: string, imagePath: string, ingredients: Ingredient[]) {
        this._id = id;
        this._name = name;
        this._description = description;
        this._imagePath = imagePath;
        this._ingredients = ingredients;
    }

    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}
	
    /**
     * Getter name
     * @return {string}
     */
    public get name(): string {
        return this._name;
    }

    /**
     * Getter description
     * @return {string}
     */
    public get description(): string {
        return this._description;
    }

    /**
     * Getter imagePath
     * @return {string}
     */
    public get imagePath(): string {
        return this._imagePath;
    }

    /**
     * Getter ingredients
     * @return {Ingredient[]}
     */
    public get ingredients(): Ingredient[] {
        return this._ingredients;
    }

    /**
     * Setter name
     * @param {string} value
     */
    public set name(value: string) {
        this._name = value;
    }

    /**
     * Setter description
     * @param {string} value
     */
    public set description(value: string) {
        this._description = value;
    }

    /**
     * Setter imagePath
     * @param {string} value
     */
    public set imagePath(value: string) {
        this._imagePath = value;
    }

    /**
     * Setter ingredients
     * @param {Ingredient[]} value
     */
    public set ingredients(value: Ingredient[]) {
        this._ingredients = value;
    }

}