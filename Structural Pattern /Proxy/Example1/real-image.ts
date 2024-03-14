import { Image } from './image.interface';

// Real Subject
export class RealImage implements Image {
    private filename: string;

    constructor(filename: string) {
        this.filename = filename;
        this.loadImage();
    }

    private loadImage(): void {
        console.log("Loading image: " + this.filename);
    }

    display(): void {
        console.log("Displaying image: " + this.filename);
    }
}
