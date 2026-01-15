import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export class Social {
    Title: string;
    Url: string;
    Icon: IconDefinition;

    constructor(title: string, url: string, icon: IconDefinition) {
        this.Title = title;
        this.Url = url;
        this.Icon = icon;
    }
}