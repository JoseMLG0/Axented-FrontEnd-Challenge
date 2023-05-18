import { Injectable } from '@angular/core';
import { Blogger } from './blogger';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { CollectionReference, DocumentData, collection, collectionData, docData } from '@angular/fire/firestore';
import { Firestore, addDoc, deleteDoc, doc, updateDoc } from '@angular/fire/firestore/firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BloggerService {
  private bloggerCollection: CollectionReference<DocumentData>;
  
  constructor(private firestore: Firestore) {
    this.bloggerCollection = collection(this.firestore, 'Blogger');
  }
  

  getAll() {
    return collectionData(this.bloggerCollection, {
      idField: 'id',
    }) as Observable<Blogger[]>;
  }

  get(id: string) {
    const bloggerDocumentReference = doc(this.firestore, `Blogger/${id}`);
    return docData(bloggerDocumentReference, { idField: 'id' });
  }

  create(blogger: Blogger) {
    return addDoc(this.bloggerCollection, blogger);
  }

  update(blogger: Blogger) {
    const pokemonDocumentReference = doc(
      this.firestore,
      `blogger/${blogger.id}`
    );
    return updateDoc(pokemonDocumentReference, { ...blogger });
  }

  delete(id: string) {
    const pokemonDocumentReference = doc(this.firestore, `blogger/${id}`);
    return deleteDoc(pokemonDocumentReference);
  } 
}
