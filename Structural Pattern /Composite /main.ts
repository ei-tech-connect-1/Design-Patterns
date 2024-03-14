
import File from './file';
import Directory from './directory';

const file1 = new File("Document1.txt");
const file2 = new File("Document2.txt");
const file3 = new File("Picture.png");
// Directory for Docs
const directory1 = new Directory("Documents");
directory1.add(file1);
directory1.add(file2);
// Directory for Images
const directory2 = new Directory("Images");
directory2.add(file3);
// Root directory for directories
const root = new Directory("Root");
root.add(directory1);
root.add(directory2);
// Prints out the entire structure
root.list();
//Root - Directory 
// |
// |_____ Documents (Directory / Branch / composite)
// |	|
// |	|_______ Document1.txt (File / Leaf)
// |	|
// |	|_______ Document2.txt (File / Leaf)
// |
// |_____ Images (Directory / Branch / composite)
//  	|
// 	    |_______ Image.jpg (File / Leaf)
