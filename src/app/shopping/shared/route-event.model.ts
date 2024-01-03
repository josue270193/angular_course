export class RouteEvent {

    private _show: string;

	constructor(show: string) {
		this._show = show;
	}

    /**
     * Getter show
     * @return {string}
     */
	public get show(): string {
		return this._show;
	}

    /**
     * Setter show
     * @param {string} value
     */
	public set show(value: string) {
		this._show = value;
	}

}