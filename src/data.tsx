import * as firebase from "firebase";
import firebaseConfig from "./firebase.config.json";

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

export const orderedKeys = (location: string): Promise<any> => {
    const ref = db.ref(location);
    return new Promise((resolve, reject) => {
        ref.orderByValue().on("value", (snapshot) => {
            if (!snapshot) {
                return reject(new Error(`No data at ${ location }`));
            }
            const values: any[] = [];
            snapshot.forEach((data) => {
                values.push(data.key);
                return false;
            });
            resolve(values);
        });
    });
};

export const value = (location: string): Promise<any> => {
    const ref = db.ref(location);
    return new Promise((resolve, reject) => {
        ref.on("value", (snapshot) => {
            if (!snapshot) {
                return reject(new Error(`No data at ${ location }`));
            }
            resolve(snapshot.val());
        });
    });
};
