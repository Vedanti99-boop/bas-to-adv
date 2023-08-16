
import './App.css'
import ChangeTitle from './Components/ChangeTitle'
import Child from './Components/Child'
import ConditionalFunc_1 from './Components/ConditionalFunc_1'

function App() {
  // const obj={
  //   titleblock:"Title" ,
  //   desc:"Anything you like",
  //   verified:true,
  // }

  return (
    <>
     {/* <div>
     <ChangeTitle />
     </div> */}

     <div className='container1'>
      <ConditionalFunc_1 title="Title" desc="Anything you like" verified="false"/>
      {/* <ConditionalFunc_1 {...obj}/>
      <ConditionalFunc_1 {...obj}   />
      <ConditionalFunc_1 {...obj}   /> */}
     </div>

     {/* <Child/> */}


    
    

    </>
  )
}

export default App
