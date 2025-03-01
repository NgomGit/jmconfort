import { PRODUCTS } from '../utils/mockData';
import {db} from './index'

import { collection, getDocs, addDoc, doc, getDoc, query, orderBy, where,onSnapshot, and, or} from "firebase/firestore"; 



export const initFirebaseFirestore = async () =>{
   // Add a new document with a generated id.
//    PRODUCTS.forEach(async (product)=>{
//     const docRef = await addDoc(collection(db, "products"), product);
//     console.log("Document written with ID: ", docRef.id);
//    })
console.log("La taille du tableau est ", PRODUCTS.length)
    
}

function applyQueryFilters(q, { category, city, price, sort }) {
    if (category) {
            q = query(q, where("category", "==", category));
    }
    if (city) {
            q = query(q, where("city", "==", city));
    }
    if (price) {
            q = query(q, where("price", "==", price.length));
    }
    if (sort === "Rating" || !sort) {
            q = query(q, orderBy("avgRating", "desc"));
    } else if (sort === "Review") {
            q = query(q, orderBy("numRatings", "desc"));
    }
    return q;
}

export const getProducts = async () =>{
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
}


export function getProductsSnapshot(callback, filters = {}) {
    if (typeof callback !== "function") {
            console.log("Error: The callback parameter is not a function");
            return;
    }

    let q = query(collection(db, "products"));
    q = applyQueryFilters(q, filters);

    const unsubscribe = onSnapshot(q, querySnapshot => {
            const results = querySnapshot.docs.map(doc => {
                    return {
                            id: doc.id,
                            ...doc.data(),
                            // Only plain objects can be passed to Client Components from Server Components
                            timestamp: doc.data().timestamp.toDate(),
                    };
            });

            callback(results);
    });

    return unsubscribe;
}


export async function getProductsDoc(callback, filters={}){
        console.log("Filters applied ", filters)
        const products = []
        let q = query(collection(db, "products"));
        if(filters?.min_price){
                const minPrice = Number(filters.min_price)
                const maxPrice = Number(filters.max_price)
                q = query(q, and (where("price" , ">=" , minPrice), and (where("price" , "<=" , maxPrice))))
        }

        if(filters.category){
                const {category} = filters
                q = query(q, where("category.slug", "==", category));
        }
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
                const ref = doc.id
                const product = doc.data()
            products.push({
                ...product,
                ref
            })
        });
    
        callback(products)
    
}

export async function getLatestProducts(callback){
        const products = []
        const q = query(collection(db, "products"), orderBy('timestamp', 'desc'));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
                const ref = doc.id
                const product = doc.data()
                products.push({
                        ...product,
                        ref
                })
        });
    
        callback(products.slice(0, 5))
    
}

export async function getFeaturedProducts(callback){
        const products = []
        const q = query(collection(db, "products"), where("is_featured", "==", true));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
                const ref = doc.id
                const product = doc.data()
                products.push({
                        ...product,
                        ref
                })
        });
    
        callback(products)
    
}

export async function getCategories(callback, filters={}){
        const categories = []
        let q = query(collection(db, "categories"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            const ref = doc.id
            const cats = doc.data()
            categories.push({
                ...cats,
                ref,
            })
    
        });
    
        callback(categories)
}

export async function getProductById(ref, callback){
       
        const docRef = doc(db, "products", ref);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
                const product = docSnap.data()
                callback({...product, ref})
        } else {
                // docSnap.data() will be undefined in this case
               callback({})
        }
    
}


