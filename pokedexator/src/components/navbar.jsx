import PropTypes from "prop-types"


function NavBar({ next, previous }) {

  return (
    <div>
      <button onClick={previous}>Previous</button>
      <button onClick={next}>Next</button>
    </div>
  )
}


export default NavBar