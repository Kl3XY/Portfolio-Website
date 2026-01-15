export class Qualification {
    Title: string;
    FromToWhatTime: string
    GPA: string
    Description: string;

    constructor(title: string, fromWhenToWhere: string, desc: string, gpa: string) {
        this.GPA= gpa
        this.Title = title;
        this.FromToWhatTime = fromWhenToWhere;
        this.Description = desc;
    }
}