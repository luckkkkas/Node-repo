import type { Request, Response } from "express";
import { getFirestore } from "firebase-admin/firestore";

interface IUser {
  name: string;
  age: number;
  document: string;
  email: string;
}

export class UserController {  
  static async getAll(req: Request, res: Response) {
    const snapshot = await getFirestore().collection('users').get();
    const users = snapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      };
    })
    res.status(200).send(users);
  }

  static async getbyId(req: Request, res: Response) {
    let userID:string = req.params.id || '';
    const docUser = await getFirestore().collection('users').doc(userID).get();
    let user = {
      id: docUser.id,
      ...docUser.data()
    }

    res.status(200).send(user);
  }

  static async save(req: Request, res: Response) {
    const newUser: IUser = req.body;
    const response = await getFirestore().collection('users').add(newUser);

    res.status(200).json(response);
  }
}
