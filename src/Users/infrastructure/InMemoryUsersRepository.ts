import { Users } from "../domain/Users";
import { UsersRepository } from "../domain/UsersRepository";

export class InMemoryUsersRepository implements UsersRepository {
  private users: Users[] = [];
  private nextId: number = 1;

  async login(correo: string, password: string): Promise<Users | null> {
    const user = this.users.find(user => user.correo === correo && user.password === password);
    console.log(user);
    return user || null;
  }

  async getById(id: number): Promise<Users | null> {
    const user = this.users.find(user => user.id === id);
    console.log(user);
    return user || null;
  }

  async getAll(): Promise<Users[] | null> {
    console.log(this.users);
    return this.users.length > 0 ? this.users : null;
  }

  async createUsers(nombre: string, correo: string, password: string): Promise<Users | null> {
    const newUser = new Users(this.nextId++, nombre, correo, password);
    this.users.push(newUser);
    console.log(newUser);
    return newUser;
  }
}
