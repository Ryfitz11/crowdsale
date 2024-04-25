import Spinner from 'react-bootstrap/Spinner'

const Loading = ()=>{
  return(
    <div className="text-center my-5">
      <Spinner animation="grow"/>
      <p className="my-2">loading Data...</p>

    </div>
  )
}

export default Loading
