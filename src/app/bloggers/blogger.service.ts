import { Injectable } from '@angular/core';
import { Blogger } from './blogger';
import {
  CollectionReference,
  DocumentData,
  collection,
  collectionData,
  docData,
  Firestore,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  setDoc,
  query,
  where,
  getDocs,
  Query,
  arrayUnion,
  or,
  getCountFromServer,
} from '@angular/fire/firestore';

import { Observable, filter, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BloggerService {
  private bloggerCollection: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.bloggerCollection = collection(this.firestore, 'Blogger');
    this.firstTimeData();
  }

  async firstTimeData() {
    const snapshot = await getCountFromServer(this.bloggerCollection);
    if (snapshot.data().count === 0) {
      const defaultData = {
        bloggers: [
          {
            id: '1',
            name: 'Juan Perez',
            website: 'juanperez.io',
            picture_url: 'https://placekitten.com/200/300',
            email: 'conact@juanperez.io',
            friends: [],
          },
          {
            id: '2',
            name: 'Amano Pikamee',
            website: 'pikamee.io',
            picture_url: 'https://placekitten.com/200/300',
            email: 'contact@pikamee.io',
            friends: ['1'],
          },
          {
            id: '3',
            name: 'Tony Stark',
            website: 'tonystark.io',
            picture_url: 'https://placekitten.com/200/300',
            email: 'contact@tonystark.io',
            friends: ['1', '2'],
          },
        ],
      };
      defaultData.bloggers.forEach(blogger => {
        this.create(blogger);
      }); 

    }
  }

  getAll() {
    return collectionData(this.bloggerCollection, {
      idField: 'idf',
    }) as Observable<Blogger[]>;
  }

  searchData(valueToSearch: string) {
    const q = collectionData(this.bloggerCollection, {
      idField: 'idf',
    }) as Observable<Blogger[]>;

    return q.pipe(
      map((m) => {
        const filterR = m.filter(
          (f) =>
            f.name.toLowerCase().includes(valueToSearch.toLowerCase()) ||
            f.website.toLowerCase().includes(valueToSearch.toLowerCase())
        );
        return filterR;
      })
    );
  }

  addNewFriend(bloggerIDF: string, friendID: string) {
    const bloggerDocumentReference = doc(
      this.firestore,
      `Blogger/${bloggerIDF}`
    );
    return updateDoc(bloggerDocumentReference, {
      friends: arrayUnion(friendID),
    });
  }

  getFriends(friendsID: string[]) {
    const q = query(
      this.bloggerCollection,
      where('id', 'in', friendsID.length === 0 ? ['na'] : friendsID)
    );
    return collectionData(q, { idField: 'idf' }) as Observable<Blogger[]>;
  }

  getNotFriends(friendsID: string[], bloggerID: string) {
    if (friendsID.length === 0) {
      return this.getAll().pipe(
        map((m) => {
          return m.filter((f) => f.id != bloggerID);
        })
      );
    }
    const q = query(this.bloggerCollection, where('id', 'not-in', friendsID));
    return (
      collectionData(q, { idField: 'idf' }) as Observable<Blogger[]>
    ).pipe(
      map((m) => {
        return m.filter((f) => f.id != bloggerID);
      })
    );
  }

  get(idf: string) {
    const bloggerDocumentReference = doc(this.firestore, `Blogger/${idf}`);
    return docData(bloggerDocumentReference, {
      idField: 'idf',
    }) as Observable<Blogger>;
  }

  create(blogger: Blogger) {
    return addDoc(this.bloggerCollection, blogger);
  }

  update(blogger: Blogger) {
    const bloggerDocumentReference = doc(
      this.firestore,
      `Blogger/${blogger.id}`
    );
    return updateDoc(bloggerDocumentReference, { ...blogger });
  }

  delete(idf?: string) {
    const bloggerDocumentReference = doc(this.firestore, `Blogger/${idf}`);
    return deleteDoc(bloggerDocumentReference);
  }

  queryToObservable(query: Query) {
    const p = getDocs(query).then((qs) => {
      return qs.docs.map((doc) => {
        return { ...doc.data() } as Blogger;
      });
    });
    const o = from(p);
    return o;
  }
}
