export class Recipe {

    private _name: string;
    private _description: string;
    private _imagePath: string;

    constructor(name: string, description: string, imagePath: string) {
        this._name = name;
        this._description = description;
        this._imagePath = imagePath;
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


}