export interface WorkExperience {
    id: number;
    role: string;
    organization: string;
    startDate: string;
    endDate: string;
    currentlyActive: boolean;
    workInfo: WorkDescription[];
    year: number;
}

export interface WorkDescription {
    description: string;
}