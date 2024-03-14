import { Image } from './image.interface';
import { ImageProxy } from './image-proxy';

// Client
function main(): void {
    const imageProxy1: Image = new ImageProxy("image1.jpg");
    imageProxy1.display(); 
    imageProxy1.display();//(from cache)

}


main();
