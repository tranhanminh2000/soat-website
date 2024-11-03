import { IUser } from "@/server/models/users";
import { Model } from "mongoose";

export interface IBaseRepository<T> {
  createConnection(): Promise<void>;
  cleanUpConnection(): Promise<void>;
  getById(id: string): Promise<T | null>;
  getAll(): Promise<T[]>;
  add(entity: T): Promise<T>;
  update(id: string, entity: Partial<T>): Promise<T | null>;
  delete(id: string): Promise<boolean>;
}

export class BaseRepository<T> implements IBaseRepository<T> {
  protected __model: Model<T>;

  constructor(model: Model<T>) {
    this.__model = model;
  }
  async createConnection() {
    await this.__model.db;
  }

  async getById(id: string): Promise<T | null> {
    return this.__model.findById(id).exec();
  }

  async getAll(): Promise<T[]> {
    return this.__model.find().exec();
  }

  async add(entity: T): Promise<T> {
    return this.__model.create(entity);
  }

  async update(id: string, entity: Partial<T>): Promise<T | null> {
    return this.__model.findByIdAndUpdate(id, entity, { new: true }).exec();
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.__model.findByIdAndDelete(id).exec();
    return result !== null;
  }

  async cleanUpConnection() {
    await this.__model.db.close();
  }
}

export interface IUserRepository extends IBaseRepository<IUser> {
  getByEmail(email: string): Promise<IUser | null>;
}
