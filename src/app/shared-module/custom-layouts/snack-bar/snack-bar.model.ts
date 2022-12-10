export class SnackBar {
    id?: number;
    message?: string;
    timeoutPeriod?: number;
    showActions?: boolean;
    action?: () => void;

    constructor(init?:Partial<SnackBar>) {
        Object.assign(this, init);
    }
}