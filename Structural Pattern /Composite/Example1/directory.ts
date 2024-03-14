import FileSystemComponent from './component';

class Directory implements FileSystemComponent {
  private name: string;
  private children: FileSystemComponent[] = [];

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  add(component: FileSystemComponent): void {
    this.children.push(component);
  }

  remove(component: FileSystemComponent): void {
    const index = this.children.indexOf(component);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  list(): void {
    console.log(`Directory: ${this.name}`);
    this.children.forEach(child => {
      child.list();
    });
  }
}

export default Directory;
