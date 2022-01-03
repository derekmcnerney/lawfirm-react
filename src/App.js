import React from "react";
import { Main } from "./views/Main";
import firebase from "./firebase";
import { collection, getDocs, getFirestore } from "@firebase/firestore";

export const App = (props) => {
  const [state, setstate] = useState(initialState)
  
  const db = getFirestore();

  const getPosts = useCallback(
    async () => {
      const querySnapshot = await getDocs( collection( db, 'posts' ))
      let newPosts = [];
      querySnapshot.forEach( doc => {
        newPosts.push({
          id: doc.id
          ...doc.data()
        })
        // console.log(doc.id)
        // console.log(doc.data() )
      } );

        setPosts(newPosts);

        return querySnapshot;
      }, [db]
  )
  
  useEffect(() => {
    getPosts();
  }, [getPosts])
    
  
 
  
  return (
    <div>
      <Main />
    </div>
  );
};
