import React, { useState } from "react";
import Sidemenu from "./component/sidemenu/Sidemenu"
import Content from "./component/content/Content"
import placeholder from "./placeholder"

const Body = () => {
    const [characterList, setCharacterList] = useState(placeholder)

    // setCharacterList(prevState => {

    // })

    return (
        <main className="main-body">
            <Sidemenu />
            <Content
                result={characterList.results}
            />
        </main>
    )
}

export default Body;



  // import rickAndMortyAPI from "./api"
  // useEffect(() => {
  //   rickAndMortyAPI()
  //     .then(data => {
  //       setCharacterList(data)
  //     }).catch(err => {
  //       console.log(err);
  //     })
  // }, [characterList.results])