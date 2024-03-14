import { Image } from './image.interface';
import { RealImage } from './real-image';

// Proxy with Caching
export class ImageProxy implements Image {
    private realImage: RealImage | null = null;
    private filename: string;

    constructor(filename: string) {
        this.filename = filename;
    }

    display(): void {
        if (this.realImage === null) {
            this.realImage = new RealImage(this.filename);
            console.log("Displaying post fetching from source");
        }
        else{
            console.log("Displaying From Cache");
        }
        this.realImage.display();
    }
}
